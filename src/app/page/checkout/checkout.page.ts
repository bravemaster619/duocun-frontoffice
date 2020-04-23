import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartInterface, CartItemInterface } from 'src/app/model/cart.model';
import { CartService } from 'src/app/service/cart/cart.service';
import { getCartItemSubtotal, getCartSubtotal, CartPriceSummaryInterface } from 'src/app/model/cart.model';
import { ApiService } from 'src/app/service/api/api.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationInterface } from 'src/app/model/account.model';
import { TranslateService } from '@ngx-translate/core';
import { StripeToken, StripeSource } from "stripe-angular"
import * as Config from 'src/assets/config.json';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  providers: [
    Geolocation
  ]
})
export class CheckoutPage implements OnInit {

  cart: CartInterface;
  mapLat: number;
  mapLng: number;
  location: LocationInterface;
  address: string;
  geocodeKey: string;
  lang: string;
  summary: CartPriceSummaryInterface;
  cartLoading: boolean;
  mapLoading: boolean;
  processing: boolean;
  invalidError: any;
  notes: string;
  extraData = {
    "name": "",
    "address_city": "",
    "address_line1": "",
    "address_line2": "",
    "address_state": "",
    "address_zip": ""
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translator: TranslateService,
    private cartService: CartService,
    private api: ApiService,
    private geolocation: Geolocation,
    private alert: AlertController
  ) { 
    //@ts-ignore
    this.geocodeKey = process.env.NODE_ENV === "production" ? Config.production.GEOCODE_KEY : Config.development.GEOCODE_KEY;
    this.cartLoading = true;
    this.mapLoading = true;
    this.processing = false;
  }

  ngOnInit() {
    this.initLang();
    this.initCart();
    this.initMap();
  }

  initLang() {
    this.translator.onLangChange.subscribe(({ lang }) => {
      this.lang = lang;
    });
  }

  initCart() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['cart-type'] && params['cart-type'] === "buy-now" ) {
        this.cartService.getBuyNowCart().subscribe(cart => {
          this.cart = cart;
          this.getCartSummary();
        })
      } else {
        this.cartService.getCart().subscribe(cart => {
          this.cart = cart;
          this.getCartSummary();
        });
      }
    });
  }

  getCartSummary() {
    this.api.v2().post("cart/summary", this.cart).then(observable => observable.subscribe(summary => {
      this.summary = <CartPriceSummaryInterface> summary;
      this.cartLoading = false;
    }));
  }

  initMap() {
    this.api.v2().get(`users/current`).then(observable => {
      observable.subscribe((res) => {
        // @ts-ignore
        const data = res.data;
        if (data.location) {
          this.mapLat = data.location.lat;
          this.mapLng = data.location.lng;
          this.location = data.location;
          this.getPlace(this.location.lat, this.location.lng).then(place => {
            this.setLocationFromGooglePlace(place);
            this.mapLoading = false;
          })
        }
        if (!data.location || !data.location.lat || !data.location.lng) {
          // @ts-ignore
          this.location = {};
          this.geolocation.getCurrentPosition().then((loc) => {
            this.mapLat = loc.coords.latitude;
            this.mapLng = loc.coords.longitude;
            this.location.lat = this.mapLat;
            this.location.lng = this.mapLng;
            this.getPlace(this.location.lat, this.location.lng).then(place => {
              this.setLocationFromGooglePlace(place);
              this.mapLoading = false;
            })
            this.mapLoading = false;
          });
        } else {
          this.mapLoading = false;
        }
      });
    }).catch(e => {
      this.router.navigate(['/home']);
    });
  }

  cartItemSubtotal(item: CartItemInterface) {
    return getCartItemSubtotal(item);
  }

  cartSubtotal() {
    return getCartSubtotal(this.cart);
  }

  getPlace(lat: number, lng: number): Promise<any> {
    //@ts-ignore
    const endpoint = "https://maps.googleapis.com/maps/api/geocode/json";
    return new Promise((resolve, reject) => {
      fetch(`${endpoint}?latlng=${lat},${lng}&key=${this.geocodeKey}&language=${this.lang}`).then(response => {
        response.json().then(data => {
          if (data.status === "OK") {
            if (data.results && data.results[0]) {
              resolve(data.results[0]);
            } else {
              reject(data.results);
            }
          } else {
            reject(data.status);
          }
        })
      })
    });
  }

  handleMapClick(event: any) {
    if (event.coords) {
      this.location.lat = event.coords.lat;
      this.location.lng = event.coords.lng;
      this.getPlace(this.location.lat, this.location.lng).then(place => {
        this.setLocationFromGooglePlace(place);
      });
    }
  }

  async setLocationFromGooglePlace(place: any) {
    //@ts-ignore
    this.location = {lat: this.location.lat, lng: this.location.lng};
    if (place.place_id) {
      this.location.placeId = place.place_id;
    }
    this.address = place.formatted_address;
    if (place.address_components && place.address_components.length) {
      place.address_components.forEach(component => {
        if (component.types.includes('postal_code')) {
          this.location.postalCode = component.short_name;
        }
        if (component.types.includes('administrative_area_level_1')) {
          this.location.province = component.short_name;
        }
        if (component.types.includes('locality')) {
          this.location.city = component.short_name;
        }
        if (component.types.includes('sublocality_level_1')) {
          this.location.subLocality = component.short_name;
        }
        if (component.types.includes('street_number')) {
          this.location.streetNumber = component.short_name;
        }
        if (component.types.includes('route')) {
          this.location.streetName = component.short_name;
        }
      });
    }
  }


  order( token:StripeToken ){
    this.processing = true;
    if (!this.address || ! this.location) {
      this.showAlert("Notice", "Please set address", "OK");
    }
    this.api.v2().post("order/new", {
      token,
      items: this.cart.items,
      address: this.address,
      location: this.location,
      notes: this.notes
    }).then(observable => {
      observable.subscribe((data:any) => {
        if (data.success) { 
          this.showAlert("Notice", "Ordered successfully", "OK");
          this.cartService.clearCart();
        } else {
          this.showAlert("Notice", "Order failed", "OK");
        }
      })
    }).finally(() => {
      this.processing = false;
    })
  }

  showAlert(header, message, button) {
    this.translator.get([header, message, button]).subscribe(dict => {
      this.alert.create({
        header: dict[header],
        message: dict[message],
        buttons: [dict[button]]
      }).then(alert => alert.present());
    });
  }

}

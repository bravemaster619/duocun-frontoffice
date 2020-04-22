import { Component, OnInit } from '@angular/core';
import { AccountInterface, LocationInterface } from 'src/app/model/account.model';
import { ApiService } from 'src/app/service/api/api.service';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Config from 'src/assets/config.json';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
  providers: [
    Geolocation
  ]
})
export class MyAccountPage implements OnInit {

  account: AccountInterface
  loading: boolean;
  processing: boolean;
  lang: string;
  geocodeKey: string;
  
  // map center
  mapLat: number;
  mapLng: number;

  backButtonText: string;
  error: string;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private geolocation: Geolocation,
    private translator: TranslateService,
    private alert: AlertController
  ) { 
    this.loading = true;
    this.processing = false;
    this.account = {
      username: '',
      password: '',
      passwordConfirmation: '',
      phone: ''
    };
    this.geocodeKey = process.env.NODE_ENV === "production" ? Config.production.GEOCODE_KEY : Config.development.GEOCODE_KEY;
    this.error = '';
  }

  ngOnInit() {
    this.lang = this.translator.currentLang;
    this.translator.onLangChange.subscribe(({ lang }) => {
      this.lang = lang;
    })
    this.translator.get("Back").subscribe((dict: any) => {
      this.backButtonText = dict['Back']
    });
    this.auth.getAuthState().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.updateData();
      }
    });
  }

  updateData() {
    this.api.v2().get(`users/current`).then(observable => {
      observable.subscribe((res) => {
        // @ts-ignore
        const data = res.data;
        this.account.username = data.username;
        this.account.phone = data.phone;
        if (data.location) {
          this.account.location = data.location;
          this.mapLat = this.account.location.lat;
          this.mapLng = this.account.location.lng;
        }
        if (!this.account.location || !this.account.location.lat || !this.account.location.lng) {
          // @ts-ignore
          this.account.location = {};
          this.geolocation.getCurrentPosition().then((loc) => {
            this.account.location.lat = loc.coords.latitude;
            this.account.location.lng = loc.coords.longitude;
            this.mapLat = this.account.location.lat;
            this.mapLng = this.account.location.lng;
            this.getPlace(this.account.location.lat, this.account.location.lng).then(place => {
              this.setLocationFromGooglePlace(place);
              this.loading = false;
            })
            this.loading = false;
          });
        } else {
          this.loading = false;
        }
      });
    });
  }

  handleSave() {
    this.error = '';
    if (!this.validateInput()) {
      if (this.error) {
        this.showAlert("Notice", this.error, "OK");
      }
      return;
    }
    this.processing = true;
    this.api.v2().post("users/save", this.account).then(observable => {
      observable.subscribe((res: any) => {
        if (res.success) {
          this.showAlert("Notice", "Saved successfully", "OK");
          this.updateData();
        } else {
          this.showAlert("Notice", "Save failed", "OK");
        }
      })
    }).catch(e => {
      console.error(e);
      this.showAlert("Notice", "Save failed", "OK");
    }).finally(() => {
      this.processing = false;
    });
  }

  validateInput(): boolean {
    // if (!this.account.username) {
    //   this.error = "Please input username";
    //   return false;
    // }
    if (this.account.username) {
      if (this.account.username.length < 5) {
        this.error = "Username too short";
        return false;
      }
    }
    if (!this.account.location || !this.account.location.lat || !this.account.location.lng) {
      this.error = "Please set address";
      return false;
    }
    if (this.account.password) {
      if (this.account.password.length < 7) {
        this.error = "Password too short";
        return false;
      }
      if (this.account.password !== this.account.passwordConfirmation) {
        this.error = "Password mismatch";
        return false;
      }
    }
    return true;
  }

  handleMapClick(event: any) {
    if (event.coords) {
      this.account.location.lat = event.coords.lat;
      this.account.location.lng = event.coords.lng;
      this.getPlace(this.account.location.lat, this.account.location.lng).then(place => {
        this.setLocationFromGooglePlace(place);
      })
    }
  }

  getPlace(
    lat: number,
    lng: number
  ): Promise<any> {
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

  async setLocationFromGooglePlace(place: any) {
    //@ts-ignore
    this.account.location = {lat: this.account.location.lat, lng: this.account.location.lng};
    if (place.place_id) {
      this.account.location.placeId = place.place_id;
    }
    if (place.address_components && place.address_components.length) {
      place.address_components.forEach(component => {
        if (component.types.includes('postal_code')) {
          this.account.location.postalCode = component.short_name;
        }
        if (component.types.includes('administrative_area_level_1')) {
          this.account.location.province = component.short_name;
        }
        if (component.types.includes('locality')) {
          this.account.location.city = component.short_name;
        }
        if (component.types.includes('sublocality_level_1')) {
          this.account.location.subLocality = component.short_name;
        }
        if (component.types.includes('street_number')) {
          this.account.location.streetNumber = component.short_name;
        }
        if (component.types.includes('route')) {
          this.account.location.streetName = component.short_name;
        }
      });
    }
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

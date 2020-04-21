import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { CartInterface } from 'src/app/model/cart.model';
import * as Config from "src/assets/config.json";
import { OrderableItemInterface, areEqualOrderableItems } from 'src/app/model/orderable-item.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartInterface;
  private buyNowCart: CartInterface;
  private cart$: BehaviorSubject<CartInterface>;
  private buyNowCart$: BehaviorSubject<CartInterface>;

  constructor(
    private storage: Storage,
    private platform: Platform
  ) {
    this.buyNowCart = {
      type: 'buy-now',
      items: []
    };
    this.cart = {
      type: 'normal',
      items: []
    };
    this.buyNowCart$ = new BehaviorSubject<CartInterface>(this.buyNowCart);
    this.cart$ = new BehaviorSubject<CartInterface>(this.cart);
    this.platform.ready().then(() => {
      this.initCarts();
    });
  }

  initCarts() {
    this.storage.get(Config.CART_KEY).then((cartData:any) => {
      if (cartData && cartData.type === "normal") {
        this.cart = cartData;
        this.cart$.next(cartData);
      }
    });
  }

  saveCart() {
    this.cart$.next(this.cart);
    return this.storage.set(Config.CART_KEY, this.cart);
  }

  getCart(): Subject<CartInterface> {
    return this.cart$;
  }

  getBuyNowCart(): Subject<CartInterface> {
    return this.buyNowCart$;
  }

  getCartQuantity(): number {
    let quantity = 0;
    this.cart.items.forEach(item => {
      quantity += item.quantity;
    });
    return quantity;
  }

  setItemQuantity(itemIndex: number, quantity:number): CartInterface {
    if (quantity < 1) {
      this.cart.items.splice(itemIndex, 1);
    } else {
      this.cart.items[itemIndex].quantity = quantity;
    }
    this.saveCart();
    return this.cart;
  }

  upItemQuantity(itemIndex: number): CartInterface {
    this.cart.items[itemIndex].quantity += 1;
    this.saveCart();
    return this.cart;
  }

  downItemQuantity(itemIndex: number): CartInterface {
    if (this.cart.items[itemIndex].quantity > 1) {
      this.cart.items[itemIndex].quantity -= 1;
      this.saveCart();
    } else {
      return this.setItemQuantity(itemIndex, 0);
    }
  }

  addItem(item:OrderableItemInterface): CartInterface {
    const existingItemIndex = this.cart.items.findIndex(exisiting => areEqualOrderableItems(exisiting, item));
    if (existingItemIndex !== -1) {
      this.setItemQuantity(existingItemIndex, this.cart.items[existingItemIndex].quantity + item.quantity);
    } else {
      this.cart.items.push(item);
      this.saveCart();
    }
    return this.cart;
  }

  setBuyNowItem(item:OrderableItemInterface): CartInterface {
    this.buyNowCart.items = [item];
    this.buyNowCart$.next(this.buyNowCart);
    return this.buyNowCart;
  }

  clearCart() {
    this.cart.items = [];
    this.cart$.next(this.cart);
    this.saveCart();
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { CartInterface, CartItemInterface } from 'src/app/model/cart.model';
import { getCartItemSubtotal } from 'src/app/model/cart.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: CartInterface

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

  handleQuantityChange(itemIdx: number, quantity: number) {
    this.cartService.setItemQuantity(itemIdx, quantity);
  }

  cartItemSubtotal(item: CartItemInterface) {
    return getCartItemSubtotal(item);
  }

}

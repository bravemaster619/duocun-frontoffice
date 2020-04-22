import { OrderableItemInterface } from './orderable-item.model';

export interface CartItemInterface extends OrderableItemInterface{

}

export interface CartInterface {
  type: 'normal'|'buy-now';
  items: Array<CartItemInterface>;
}

export function getCartItemSubtotal(item: CartItemInterface): number {
  return item.price * item.quantity;
}

export function getCartSubtotal(cart: CartInterface): number {
  let price = 0;
  cart.items.forEach(item => {
    price += getCartItemSubtotal(item);
  });
  return price;
}
import { OrderableItemInterface } from './orderable-item.model';

export interface CartItemInterface extends OrderableItemInterface{

}

export interface CartInterface {
  type: 'normal'|'buy-now';
  items: Array<CartItemInterface>;
}

export function getCartItemSubtotal(item: CartItemInterface) {
  return item.price * item.quantity;
}
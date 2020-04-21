import { OrderableItemInterface } from './OrderableItem';

export interface CartItemInterface extends OrderableItemInterface{

}

export interface CartInterface {
  type: 'normal'|'buy-now';
  items: Array<CartItemInterface>;
}
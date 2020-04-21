import { ProductInterface } from './product.model';

export interface OrderableItemInterface {
  product: ProductInterface;
  productId: string;
  combinationIdx: number;
  attributeDescriptions?: Array<string>;
  combinationDescription?: string;
  combinationDescriptionEN?: string;
  price: number;
  quantity: number;
}

export function areEqualOrderableItems(one: OrderableItemInterface, other: OrderableItemInterface) {
  return one.productId == other.productId && one.combinationIdx == other.combinationIdx;
}
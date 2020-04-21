export interface OrderableItemInterface {
  productId: string;
  combinationIdx: number;
  attributeDescriptions?: Array<string>;
  price: number;
  quantity: number;
}

export function areEqualOrderableItems(one: OrderableItemInterface, other: OrderableItemInterface) {
  return one.productId == other.productId && one.combinationIdx == other.combinationIdx;
}
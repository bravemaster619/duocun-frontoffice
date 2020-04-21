export interface OrderableItemInterface {
  productId: string;
  combinationIdx: number;
  attributeDescriptions?: Array<string>;
  price: number;
  quantity: number;
}
export interface OrderableItem {
  productId: string;
  attrIdx?: number;
  valIdx?: number;
  attributeDescriptions?: Array<string>;
  price: number;
  quantity: number;
}
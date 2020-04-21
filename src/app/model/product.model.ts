export interface FeaturedProductInterface {
  _id: string,
  name: string,
  description: string,
  price: number,
  featured: boolean,
  pictures: Array<{
    name: string,
    url: string
  }>,
  order: number
}
export interface ProductAttributeInterface {
  _id: string,
  name: string,
  nameEN?: string,
  values: Array<{
    name: string,
    nameEN?: string,
    price: number,
    quantity: number
  }>
}

export interface ProductCombinationValueInterface {
  attrIdx: string,
  valIdx: number|string
}

export interface ProductCombinationInterface {
  price: number;
  quantity: number;
  values: Array<ProductCombinationValueInterface>;
}

export interface ProductInterface {
  _id: string,
  name: string,
  nameEN?: string,
  description: string,
  descriptionEN?: string,
  price: number,
  featured: number,
  dow? : Array<any>,
  pictures: Array<{
    name: string,
    url: string
  }>,
  order: number,
  status?: boolean,
  stock?: {
    enabled: boolean,
    quantity?: number,
    outofstockMessage?: string,
    outofstockMessageEN?: string
  },
  attributes: Array<ProductAttributeInterface>,
  combinations: Array<ProductCombinationInterface>
}

export function areEqualCombinationValues(one: ProductCombinationValueInterface, other: ProductCombinationValueInterface):boolean {
  return one.valIdx == other.valIdx && one.attrIdx == other.attrIdx;
}

export function containEqualCombinationValues(one: ProductCombinationInterface, other: ProductCombinationInterface): boolean {
  if ((!one.values || !one.values.length) && (!other.values || !other.values.length)) {
    return true;
  }
  if (one.values.length !== other.values.length) {
    return false;
  }
  for (let i = 0; i< one.values.length; i++) {
    if (!other.values.find(w => areEqualCombinationValues(one.values[i], w))) {
      return false;
    }
  }
  return true;
}
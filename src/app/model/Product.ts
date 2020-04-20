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
  name: string,
  nameEN?: string,
  values: Array<{
    name: string,
    nameEN?: string,
    price: number,
    quantity: number
  }>
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
  attributes: Array<any>
}
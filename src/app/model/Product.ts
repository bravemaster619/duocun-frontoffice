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

export interface ProductInterface {
  _id: string,
  name: string,
  description: string,
  price: number,
  featured: number,
  pictures: Array<{
    name: string,
    url: string
  }>,
  order: number
}
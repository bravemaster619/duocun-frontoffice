export interface FeaturedProductInterface {
  _id: string,
  name: string,
  description: string,
  price: number,
  cost: number,
  featured: boolean,
  pictures: Array<{
    name: string,
    url: string
  }>,
  order: number
}
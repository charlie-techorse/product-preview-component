import { ImageType } from './imageType'

export interface ItemType {
  image: ImageType,
  type: string,
  title: string,
  description: string,
  price: number,
  newPrice: number
}
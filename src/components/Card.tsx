import { ImageType } from '../types/imageType'
import './card.css'

type CardProps = {
  image: ImageType,
  type: string,
  title: string,
  description: string,
  price: number,
  newPrice: number
}

export function Card({ image, type, title, description, price, newPrice }: CardProps) {
  return <div className='card'>
    <img className='card__img' src={image.src} alt={image.name}></img>
    <div className='card__content'>
      <h2 className='card__content-type'>{type}</h2>
      <h1 className='card__content-title'>{title}</h1>
      <p className='card__content-description'>{description}</p>
      <p>${newPrice}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  </div>
}
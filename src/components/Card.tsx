import { ItemType } from '../types/itemType'
import './card.css'

type CardProps = {
  item: ItemType
}

export function Card({ item }: CardProps) {
  return <div className='card'>
    <img className='card__img' src={item.image.src} alt={item.image.name}></img>
    <div className='card__content'>
      <h2 className='card__content-type'>{item.type}</h2>
      <h1 className='card__content-title'>{item.title}</h1>
      <p className='card__content-description'>{item.description}</p>
      <p>${item.newPrice}</p>
      <p>${item.price}</p>
      <button>Add to Cart</button>
    </div>
  </div>
}
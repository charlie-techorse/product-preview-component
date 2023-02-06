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
      <div className='card__content-prices'>
        <p className='card__content-price card__content-new'>${item.newPrice}</p>
        <p className='card__content-price card__content-old'>${item.price}</p>
      </div>
      <button className='card__content-button'><img src="/icon-cart.svg" />Add to Cart</button>
    </div>
  </div>
}
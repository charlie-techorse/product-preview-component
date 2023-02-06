import './card.css'

type CardProps = {
  image: string,
  type: string,
  title: string,
  description: string,
  price: number,
  newPrice: number
}

export function Card({ image, type, title, description, price, newPrice }: CardProps) {
  return <div className='card'>
    <img className='card__img' src={image}></img>
    <h2>{type}</h2>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>${newPrice}</p>
    <p>${price}</p>
    <button>Add to Cart</button>
  </div>
}
import './card.css'

export function Card() {
  return <div className='card'>
    <img className='card__img' src='/image-product-mobile.jpg'></img>
    <h2>Parfume</h2>
    <h1>Gabrielle Essence Eau De Parfum</h1>
    <p>
      A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL.
    </p>
    <p>$149.99</p>
    <p>$169.99</p>
    <button>Add to Cart</button>
  </div>
}
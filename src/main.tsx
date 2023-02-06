import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './components/Card'
import './index.css'
import { ImageType } from './types/imageType'

const image: ImageType = { src: '/image-product-mobile.jpg', name: '' }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Card
      image={image}
      type='Perfume'
      title='Gabrielle Essence Eau De Parfum'
      description='A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
      price={169.99}
      newPrice={149.99} />
  </React.StrictMode>,
)

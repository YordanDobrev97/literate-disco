import { useState } from 'react'
import styles from '../../styles/ecommerce/main.module.css'

const ImageContainer = () => {
  const [images, setImages] = useState([
    '/image-product-1-thumbnail.jpg',
    '/image-product-2-thumbnail.jpg',
    '/image-product-3-thumbnail.jpg',
    '/image-product-4-thumbnail.jpg',
  ])

  return (
    <section className={styles['left-wrapper']}>
      <div className={styles['main-top-image']}>
        <img className={styles['main-img']} src="/image-product-1-thumbnail.jpg" />
      </div>
      <div className={styles['bottom-images']}>
        {images && images.map((image) => {
          return (
            <img className={styles['small-img']} src={image} />
          )
        })}
      </div>
    </section>
  )
}

export default ImageContainer
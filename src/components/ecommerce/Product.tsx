import { useState } from 'react'
import Pricing from '../../components/ecommerce/Pricing'
import ProductDetails from '../../components/ecommerce/ProductDetails'
import styles from '../../styles/ecommerce/main.module.css'

const Product = () => {
  const [productCount, setProductCount] = useState<number>(0)
  
  const increaseHandler = () => {
    setProductCount((prevValue) => prevValue + 1)
  }

  const decreaseHandler = () => {
    if (productCount > 0) {
      setProductCount((prevValue) => prevValue - 1)
    }
  }

  return (
    <>
      <ProductDetails />
      <Pricing />

      <article className={styles['cart-wrapper']}>
        <button onClick={decreaseHandler} className={styles['decrease-btn']}>-</button>
        <p className={styles['product-count']}>{productCount}</p>
        <button onClick={increaseHandler} className={styles['increase-btn']}>+</button>
        <button className={styles['add-cart-btn']}>
          <i className="fas fa-shopping-cart"></i>
          Add to cart
        </button>
      </article>
    </>
  )
}

export default Product
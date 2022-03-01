import { useState, useContext } from 'react'
import { ToastContainer, toast, cssTransition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Pricing from '../../components/ecommerce/Pricing'
import ProductDetails from '../../components/ecommerce/ProductDetails'
import CartContext from '../../context/cartContext'

import styles from '../../styles/ecommerce/main.module.css'

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut"
});


const Product = () => {
  const [productCount, setProductCount] = useState<number>(0)
  const context = useContext(CartContext)

  const increaseHandler = () => {
    setProductCount((prevValue) => {
      context.setQuantity(prevValue + 1)
      return prevValue + 1
    })
  }

  const decreaseHandler = () => {
    if (productCount > 0) {
      setProductCount((prevValue) => {
        context.setQuantity(prevValue - 1)
        return prevValue - 1
      })
    }
  }

  const addToCartHandler = () => {
    if (productCount !== 0) {
      context.setBasket(true)
    } else {
      toast.error('You cannot add the product when the quantity is 0')
    } 
  }

  const removeFromCart = () => {
    context.setBasket(false)
  }

  return (
    <>
      <ProductDetails />
      <Pricing />

      <article className={styles['cart-wrapper']}>
        <button onClick={decreaseHandler} className={styles['decrease-btn']}>-</button>
        <p className={styles['product-count']}>{productCount}</p>
        <button onClick={increaseHandler} className={styles['increase-btn']}>+</button>

        {context.isAddToBasket ? (
          <button onClick={removeFromCart} className={styles['remove-cart-btn']}>
            <i className="fas fa-shopping-cart"></i>
            Remove from cart
          </button>
        ) : (
          <button onClick={addToCartHandler} className={styles['add-cart-btn']}>
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </button>
        )}
        <ToastContainer transition={bounce} autoClose={3000} closeOnClick/>
      </article>
    </>
  )
}

export default Product
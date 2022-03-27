import { useState, useEffect, useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons'

import CartContext from '../../context/cartContext'
import styles from '../../styles/ecommerce/navigation.module.css'

interface BasketProps {
  image: string,
  productName: string,
  price: number,
}

const Basket = ({ image, productName, price }: BasketProps) => {
  const [isShowBasket, setShowBasket] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const context = useContext(CartContext)

  useEffect(() => {
    setTotalPrice(context.quantity * price)
  }, [context.quantity])

  const onShowBaksetHandler = () => {
    setShowBasket((oldValue) => !oldValue)
  }

  return (
    <>
      <button onClick={onShowBaksetHandler} className={styles['basket']}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {context.isAddToBasket && (<span className={styles['notification']}>
          <FontAwesomeIcon icon={faBell} />
        </span>)}
      </button>

      {isShowBasket && (<div className={styles['cart-checkout']}>
        <h3>Cart</h3>

        {context.isAddToBasket ? (
          <>
            <div className={styles['basket-product']}>
                <img src={image} />
                <div>
                <h4>{productName}</h4>
                <p>${price} x {context.quantity} ${totalPrice}</p>
                </div>
              </div>
             
              <button className={styles['checkout-btn']}>Checkout</button>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>)}
    </>
  )
}

export default Basket
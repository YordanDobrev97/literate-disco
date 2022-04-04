import { useState } from 'react'
import Navbar from '../../components/ecommerce/Navbar'
import ImageContainer from '../../components/ecommerce/ImageContainer'
import Product from '../../components/ecommerce/Product'
import BackBtn from '../../components/common/BackButton'
import CartContext from '../../context/cartContext'

import '../../styles/ecommerce/variables.css'
import styles from '../../styles/ecommerce/main.module.css'

const ECommerce = () => {
  const [isEmptyBasket, setBasket] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)
  return (
    <CartContext.Provider value={{
      isAddToBasket: isEmptyBasket, setBasket, quantity, setQuantity}}>
      <BackBtn />
      <Navbar />

      <main className={styles['main-wrapper']}>
        <ImageContainer />

        <section className={styles['right-wrapper']}>
          <Product />
        </section>
      </main>
    </CartContext.Provider>
  )
}

export default ECommerce
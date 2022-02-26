import Navbar from '../../components/ecommerce/Navbar'
import ImageContainer from '../../components/ecommerce/ImageContainer'
import Product from '../../components/ecommerce/Product'

import styles from '../../styles/ecommerce/main.module.css'

const ECommerce = () => {
  return (
    <>
      <Navbar />

      <main className={styles['main-wrapper']}>
        <ImageContainer />

        <section className={styles['right-wrapper']}>
          <Product />
        </section>
      </main>
    </>
  )
}

export default ECommerce
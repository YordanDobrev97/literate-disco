import styles from '../../styles/ecommerce/main.module.css'

const Pricing = () => {
  return (
    <article className={styles['pricing']}>
    <span className={styles['price']}>$125.00</span>
    <span className={styles['discount']}>50%</span>
    <p className={styles['save-money']}>$250.00</p>
  </article>
  )
}

export default Pricing
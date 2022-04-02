import styles from '../../styles/ecommerce/main.module.css'
import { PRODUCT_THUMBNAIL } from '../../constants/EcommerceConstants'

const ImageContainer = () => {
  return (
    <section className={styles['left-wrapper']}>
      <div className={styles['main-top-image']}>
        <img className={styles['main-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '1')} />
      </div>
      <div className={styles['bottom-images']}>
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '1')} alt='product-thumnail'/>
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '2')} alt='product-thumnail'/>
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '3')} alt='product-thumnail'/>
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '4')} alt='product-thumnail'/>
      </div>
    </section>
  )
}

export default ImageContainer
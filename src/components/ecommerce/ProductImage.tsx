import React from 'react'
import styles from '../../styles/ecommerce/main.module.css'
import { PRODUCT_THUMBNAIL } from '../../constants/EcommerceConstants'

interface ProoductImageProps {
  children: React.ReactNode
}

const ProductImage = ({ children }: ProoductImageProps) => {
  return (
    <>
      <div className={styles['main-top-image']}>
        {children}
      </div>
      <div className={styles['bottom-images']} style={{justifyContent: 'center'}}>
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '1')} alt='product-thumnail' />
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '2')} alt='product-thumnail' />
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '3')} alt='product-thumnail' />
        <img className={styles['small-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '4')} alt='product-thumnail' />
      </div>
    </>
  )
}

export default ProductImage
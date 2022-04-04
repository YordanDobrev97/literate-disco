import { useState } from 'react'
import { Modal } from '@mui/material'

import styles from '../../styles/ecommerce/main.module.css'
import { PRODUCT_THUMBNAIL, MAX_PRODUCT_IMAGES } from '../../constants/EcommerceConstants'
import ProductImage from './ProductImage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ImageContainer = () => {
  const [open, setOpen] = useState(false)
  const [countImage, setCountImage] = useState(1)

  const openHandle = () => setOpen(true)
  const closeHandle = () => setOpen(false)

  const nextImage = () => {
    let value = countImage + 1
    if (countImage === MAX_PRODUCT_IMAGES) {
      value = 1
    }
    setCountImage(value)
  }
  
  const previousImage = () => {
    let value = countImage - 1
    if (countImage === 1) {
      value = MAX_PRODUCT_IMAGES
    }
    setCountImage(value)
  }

  return (
    <section className={styles['left-wrapper']}>
      <ProductImage>
        <img onClick={openHandle} className={styles['main-img']} src={PRODUCT_THUMBNAIL.replace('{0}', '1')} />
      </ProductImage>

      <Modal open={open} onClose={closeHandle}>
        <div className={styles['modal-container']}>
          <button className={styles['close-btn']} onClick={closeHandle}>X</button>
          <ProductImage>
            <button onClick={previousImage} className={styles['arrow-btn']}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <img onClick={openHandle} className={styles['main-img']} src={PRODUCT_THUMBNAIL.replace('{0}', `${countImage}`)} />
            <button onClick={nextImage} className={styles['arrow-btn']}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </ProductImage>
        </div>
      </Modal>
    </section>
  )
}

export default ImageContainer
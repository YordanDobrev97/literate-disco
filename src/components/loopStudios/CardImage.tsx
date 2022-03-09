import styles from '../../styles/loopStudios/index.module.css'

interface CardImageProps {
  image: string,
  title: string
}

const CardImage = ({image, title}: CardImageProps) => {
  return (
    <div className={styles['card-image-container']}>
      <img src={image} alt='card image'/>
      <h3>{title}</h3>
    </div>
  )
}

export default CardImage
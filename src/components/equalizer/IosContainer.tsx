import styles from '../../styles/equalizer/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'

const IosContainer = () => {
  return (
    <div className={styles['ios-container']}>
        <button className={styles['ios-btn']}>
          <FontAwesomeIcon icon={faApple}/>
          iOS Download
        </button>
      </div>
  )
}

export default IosContainer
import styles from '../../styles/equalizer/index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  return (
    <div className={styles['social-media']}>
      <FontAwesomeIcon className={styles['fa-facebook']} icon={faFacebook} />
      <FontAwesomeIcon className={styles['fa-twitter']} icon={faTwitter} />
      <FontAwesomeIcon className={styles['fa-instagram']} icon={faInstagram} />
    </div>
  )
}

export default SocialMedia
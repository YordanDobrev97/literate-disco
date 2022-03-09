import styles from '../../styles/loopStudios/index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterMedia = () => {
  return (
    <div className={styles['footer-media']}>
        <div className={styles['media-container']}>
          <FontAwesomeIcon className={styles['icon']} icon={faFacebook}/>
          <FontAwesomeIcon className={styles['icon']} icon={faTwitter}/>
          <FontAwesomeIcon className={styles['icon']} icon={faPinterest}/>
          <FontAwesomeIcon className={styles['icon']} icon={faInstagram}/>
        </div>
        <p className={styles['copyright']}>&copy; 2021 Loopstudios. All rights reserved.</p>
      </div>
  )
}

export default FooterMedia
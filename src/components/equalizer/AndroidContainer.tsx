import styles from '../../styles/equalizer/index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

const AndroidContainer = () => {
  return (
    <div className={styles['android-container']}>
      <button className={styles['android-btn']}>
        <FontAwesomeIcon icon={faRobot}/>
        Android Download
      </button>
    </div>
  )
}

export default AndroidContainer
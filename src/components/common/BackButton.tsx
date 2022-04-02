import { Link } from 'react-router-dom'
import styles from '../../styles/common.module.css'

const BackButton = () => {
  return (
    <Link to='/projects'>
          <button className={styles['back-btn']}>Back</button>
    </Link>
  )
}

export default BackButton
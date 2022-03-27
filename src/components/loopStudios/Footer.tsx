import styles from '../../styles/loopStudios/index.module.css'

import Nav from './Nav'
import FooterMedia from './FooterMedia'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-nav']}>
        <h1>loopstudio</h1>
        <Nav />
      </div>
      <FooterMedia />
    </footer>

  )
}

export default Footer
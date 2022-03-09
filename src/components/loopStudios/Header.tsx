import styles from '../../styles/loopStudios/index.module.css'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles['header-loop-studio']}>
      <section className={styles['loop-studio-section']}>
        <a>loopstudios</a>
        <Nav />
      </section>

      <section className={styles['loop-studio-bottom-section']}>
        <h1 className={styles['loop-studio-title']}>Immersive experiences that deliver</h1>
      </section>
    </header>
  )
}

export default Header
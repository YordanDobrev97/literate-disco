import styles from '../../styles/loopStudios/index.module.css'

const Header = () => {
  return (
    <header className={styles['header-loop-studio']}>
      <section className={styles['loop-studio-section']}>
        <a>loopstudios</a>

        <nav>
          <ul className={styles['loop-studio-nav']}>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
      </section>

      <section className={styles['loop-studio-bottom-section']}>
        <h1 className={styles['loop-studio-title']}>Immersive experiences that deliver</h1>
      </section>
    </header>
  )
}

export default Header
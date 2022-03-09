import styles from '../../styles/equalizer/index.module.css'

import Rectangle from '../../components/equalizer/Rectangle'

const Header = () => {
  return (
    <header className={styles['site-header']}>
      <h1 className={styles['header-title']}>equalizer</h1>
      <img className={styles['background-img']} src={'/bg-main-desktop.png'}/>
      <Rectangle />

      <h2 className={styles['heading']}>We make your music sound extraordinary.</h2>
      <p className={styles['description']}>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
    </header>
  )
}

export default Header
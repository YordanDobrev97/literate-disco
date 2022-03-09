import styles from '../../styles/equalizer/index.module.css'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className={styles['equalizer-footer']}>
      <h1>equalizer</h1>

      <p>All rights reserved © Equalizer 2021.
        Have any problems? Contact us via social media or email us at equalizer@example.com</p>

      <SocialMedia />
    </footer>
  )
}

export default Footer
import styles from '../../styles/equalizer/index.module.css'
import IosContainer from '../../components/equalizer/IosContainer'
import AndroidContainer from '../../components/equalizer/AndroidContainer'

const PremiumContainer = () => {
  return (
    <div className={styles['premium-container']}>
      <h4>Premium EQ</h4>
      <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
      <div>
        <span className={styles['price']}>$4</span>
        <span>/ month</span>
      </div>

      <IosContainer />
      <AndroidContainer />
    </div>
  )
}

export default PremiumContainer
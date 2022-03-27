import styles from '../../styles/equalizer/index.module.css'
import Header from '../../components/equalizer/Header'
import PremiumContainer from '../../components/equalizer/PremiumContainer'
import Footer from '../../components/equalizer/Footer'

const Equalizer = () => {
  return (
    <div className={styles['site-container']}>
      <Header />

      <main className={styles['main-section']}>
        <div className={styles['main-image-container']}>
          <img className={styles['phone']} src={'/phone-boost.png'} />

          <svg className={styles['outside']} width="480" height="428" viewBox="0 0 312 428" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M156 116C156 72.9218 190.922 38 234 38C277.078 38 312 72.9218 312 116V272H256C200.772 272 156 227.228 156 172V116Z" fill="#66E2DC" />
            <rect x="78" y="38" width="78" height="78" rx="39" fill="#FCFAF9" />
            <rect y="-40" width="78" height="156" rx="39" fill="#66E2DC" />
            <rect y="116" width="156" height="156" rx="78" fill="#FFB964" />
            <rect x="1" y="273" width="154" height="154" rx="77" stroke="#FCFAF9" stroke-width="2" />
            <rect x="40" y="351" width="76" height="76" rx="38" stroke="#FCFAF9" stroke-width="2" />
          </svg>

          <PremiumContainer />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Equalizer
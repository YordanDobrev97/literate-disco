import styles from '../../styles/calculator/main.module.css'

const RightSidebar = () => {
  return (
    <div className={styles['right-container']}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>Tip Total</h4>
        <span className={styles.price}>$4.27</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>Total</h4>
        <span className={styles.price}>$32.79</span>
      </div>

      <div style={{ width: '60%', margin: 'auto' }}>
        <button className={styles['reset-btn']}>Reset</button>
      </div>
    </div>
  )
}

export default RightSidebar
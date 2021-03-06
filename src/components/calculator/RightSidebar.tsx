import styles from '../../styles/calculator/main.module.css'

interface RightSidebarProps {
  tipTotal: number,
  total: number,
  reset: () => void
}

const RightSidebar = ({tipTotal, total, reset}: RightSidebarProps) => {
  const onResetHandler = () => {
    reset()
  }
  
  return (
    <div className={styles['right-container']}>
      <div className={styles['total']}>
        <h4>Tip Total</h4>
        <span className={styles.price}>${tipTotal.toFixed(2)}</span>
      </div>
      <div className={styles['total']}>
        <h4>Total</h4>
        <span className={styles.price}>${total.toFixed(2)}</span>
      </div>

      <div style={{ width: '60%', margin: 'auto' }}>
        <button
        className={styles['reset-btn']}
        onClick={onResetHandler}>Reset</button>
      </div>
    </div>
  )
}

export default RightSidebar
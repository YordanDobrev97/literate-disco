import { useState } from 'react'
import styles from '../../styles/calculator/main.module.css'

const PercentContainer = () => {
  const [rates, setRates] = useState<number[]>([
    5, 10, 15, 25, 50
  ])
  let classNameType = ''
  const selectRate = (target: any) => {
    classNameType += 'active'
    target.classList.add('active')
  }

  return (
    <div className={styles['percent-container']}>
      {rates && rates.map((rate, i) => {
        return (
          <p className={classNameType} key={i} onClick={(e) => selectRate(e.target)}>{rate}%</p>
        )})}
      <p className={styles['custom']}>Custom</p>
    </div>
  )
}

export default PercentContainer
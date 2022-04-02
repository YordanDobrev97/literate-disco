import { useState, useContext } from 'react'
import styles from '../../styles/calculator/main.module.css'

import PercentButton from '../../components/calculator/PercentButton'
import RateContext from '../../context/rateContext'

const PercentContainer = () => {
  const [rates] = useState<number[]>([5, 10, 15, 25, 50])
  const [selected, setSelected] = useState<number>()
  const rateContext = useContext(RateContext)

  const selectRate = (key: number) => {
    setSelected(key)
  }

  const onSetCustomHandler = (value: number) => {
    rateContext.setRate(value)
  }

  return (
    <div className={styles['percent-container']}>
      {rates && rates.map((rate, i) => {
        const currentClassName = selected === i ? styles.active : ''

        return (
            <PercentButton
            className={currentClassName}
            key={i}
            index={i}
            rate={rate}
            onClick={selectRate}
          />
        )
      })}

      <input
      type='number'
      className={styles['custom']}
      placeholder='Custom'
      value={rateContext.rate || ''}
      onChange={(e) => onSetCustomHandler(Number(e.target.value))}
      />
    </div>
  )
}

export default PercentContainer
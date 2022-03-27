import { useState } from 'react'
import styles from '../../styles/calculator/main.module.css'

import PercentButton from '../../components/calculator/PercentButton'
import RateContext from '../../context/rateContext'

interface PercentContainerProps {
  setRate: (value: number) => void
}

const PercentContainer = ({ setRate }: PercentContainerProps) => {
  const [rates, setRates] = useState<number[]>([5, 10, 15, 25, 50])
  const [selected, setSelected] = useState<number>()

  const selectRate = (key: number) => {
    console.log(key)
    setSelected(key)
  }

  return (
    <div className={styles['percent-container']}>
      {rates && rates.map((rate, i) => {
        const currentClassName = selected === i ? styles.active : ''

        return (
          <RateContext.Provider value={{rate: 0, setRate}}>
            <PercentButton
            className={currentClassName}
            key={i}
            index={i}
            rate={rate}
            onClick={selectRate}
          />
          </RateContext.Provider>
        )
      })}
      <p className={styles['custom']}>Custom</p>
    </div>
  )
}

export default PercentContainer
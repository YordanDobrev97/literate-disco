import { useState, useEffect } from 'react'
import styles from '../../styles/calculator/main.module.css'

import Container from '../../components/calculator/Container'
import Input from '../../components/calculator/Input'
import RightSidebar from '../../components/calculator/RightSidebar'
import PercentContainer from '../../components/calculator/PercentContainer'

const CalculatorPage = () => {
  const [price, setPrice] = useState<number>(0.0)
  const [rate, setRate] = useState<number>(0)
  const [peopleCount, setPeopleCount] = useState<number>(0)
  const [tipTotal, setTipTotal] = useState<number>(0.0)
  const [total, setTotal] = useState<number>(0.0)

  useEffect(() => {
    if (price && rate && peopleCount) {
      const tipTotalRes = price * (rate / 100) / peopleCount
      setTipTotal(tipTotalRes)
      setTotal((price / peopleCount) + tipTotalRes)
    }
  }, [price, rate, peopleCount])

  const onPriceHandler = (value: number) => {
    setPrice(value)
  }

  const onSetPeopleCount = (value: number) => {
    setPeopleCount(value)
  }

  const reset = () => {
    setTipTotal(0)
    setTotal(0)
  }

  return (
    <div className={styles['main-calculator-container']}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Container title='Bill'>
            <Input placeholder='$' onChange={onPriceHandler}/>
          </Container>

          <Container title='Select Tip %'>
            <PercentContainer setRate={setRate}/>
          </Container>

          <Container title='Number of people'>
           <Input placeholder='👤' onChange={onSetPeopleCount}/>
          </Container>
        </div>
        <RightSidebar
          tipTotal={tipTotal}
          total={total}
          reset={reset}
          />
      </div>
    </div>
  )
}

export default CalculatorPage
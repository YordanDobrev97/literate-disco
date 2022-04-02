import { useState, useEffect } from 'react'

import styles from '../../styles/calculator/main.module.css'
import Container from '../../components/calculator/Container'
import Input from '../../components/calculator/Input'
import RightSidebar from '../../components/calculator/RightSidebar'
import PercentContainer from '../../components/calculator/PercentContainer'
import BackButton from '../../components/common/BackButton'
import RateContext from '../../context/rateContext'

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
    if (value >= 0) {
      setPrice(value)
    }
  }

  const onSetPeopleCount = (value: number) => {
    if (value >= 0) {
      setPeopleCount(value)
    }
  }

  const reset = () => {
    setTipTotal(0)
    setTotal(0)
    setPrice(0.0)
    setPeopleCount(0)
    setRate(0)
  }

  return (
    <div className={styles['main-calculator-container']}>
      <BackButton />
      <h1 className={styles['calculator-heading']}>Splittter</h1>
      <RateContext.Provider value={{ rate, setRate }}>
        <div className={styles['container']}>
          <div>
            <Container title='Bill' notification={price === 0}>
              <Input
                placeholder='$'
                onChange={onPriceHandler}
                defaultValue={price}
                extendStyles={price === 0 ? { border: '1px solid red' } : {}}
              />
            </Container>

            <Container title='Select Tip %' notification={false}>
              <PercentContainer />
            </Container>

            <Container title='Number of people' notification={peopleCount === 0}>
              <Input
                placeholder='👤'
                onChange={onSetPeopleCount}
                defaultValue={peopleCount}
                extendStyles={peopleCount === 0 ? { border: '1px solid red' } : {}}
              />
            </Container>
          </div>
          <RightSidebar
            tipTotal={tipTotal}
            total={total}
            reset={reset}
          />
        </div>
      </RateContext.Provider>
    </div>
  )
}

export default CalculatorPage
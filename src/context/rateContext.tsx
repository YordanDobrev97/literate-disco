import { createContext } from 'react'
const RateContext = createContext({
  rate: 0,
  setRate: (value: number) => {}
})

export default RateContext
import { createContext } from 'react'
const cartContext = createContext({
  isAddToBasket: false,
  setBasket: (value: boolean) => {},
  quantity: 0,
  setQuantity: (value: number) => {}
})

export default cartContext
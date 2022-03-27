import { createContext } from 'react'

const ThemeContext = createContext({
  currentTheme: 'light',
  setTheme: (value: string) => {}
})

export default ThemeContext
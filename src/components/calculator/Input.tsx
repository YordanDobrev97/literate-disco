import styles from '../../styles/calculator/main.module.css'

interface InputProps {
  placeholder: string
  defaultValue: number
  onChange: (value: number) => void
  extendStyles: {}
}

const Input = ({ placeholder, defaultValue, onChange, extendStyles }: InputProps) => {
  return (
    <input
      type='number'
      className={styles.input}
      placeholder={placeholder}
      value={defaultValue}
      style={extendStyles}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  )
}

export default Input
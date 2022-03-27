import styles from '../../styles/calculator/main.module.css'

interface InputProps {
  placeholder: string
  onChange: (value: number) => void
}

const Input = ({ placeholder, onChange }: InputProps) => {
  return (
    <input
      type='number'
      className={styles.input}
      placeholder={placeholder}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  )
}

export default Input
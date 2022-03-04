import styles from '../../styles/calculator/main.module.css'

interface InputProps {
  placeholder: string
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      type='number'
      className={styles.input}
      placeholder={placeholder}
    />
  )
}

export default Input
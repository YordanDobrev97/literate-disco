import { useContext } from 'react'
import RateContext from '../../context/rateContext'

interface PercentButtonProps {
  rate: number
  index: number
  onClick: (index: number) => void
  className: string
}

const PercentButton = ({
  rate,
  index,
  onClick,
  className }: PercentButtonProps) => {
  const context = useContext(RateContext)

  const _onClick = () => {
    context.setRate(rate)
    onClick(index)
  }

  return (
    <p onClick={_onClick} className={className}>
      {rate}%
    </p>
  )
}

export default PercentButton
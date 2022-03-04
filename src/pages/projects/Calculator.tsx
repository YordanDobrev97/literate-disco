import styles from '../../styles/calculator/main.module.css'

import Container from '../../components/calculator/Container'
import Input from '../../components/calculator/Input'
import RightSidebar from '../../components/calculator/RightSidebar'
import PercentContainer from '../../components/calculator/PercentContainer'

const CalculatorPage = () => {
  return (
    <div className={styles['main-calculator-container']}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Container title='Bill'>
            <Input placeholder='$' />
          </Container>

          <Container title='Select Tip %'>
            <PercentContainer />
          </Container>

          <Container title='Number of people'>
           <Input placeholder='👤'/>
          </Container>
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default CalculatorPage
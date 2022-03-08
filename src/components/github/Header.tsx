import styles from '../../styles/github/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import SearchContainer from './SearchContainer'

const Header = () => {
  return (
    <header className={styles['github-header']}>
        <section className={styles['github-header-section']}>
          <h1 className={styles['github-title']}>devfinder</h1>
          <div style={{ display: 'flex', fontSize: '20px' }}>
            <p style={{ textTransform: 'uppercase' }}>dark</p>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </section>

        <SearchContainer />
      </header>
  )
}

export default Header
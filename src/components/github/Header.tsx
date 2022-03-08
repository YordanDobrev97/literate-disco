import { useContext } from 'react'
import styles from '../../styles/github/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import SearchContainer from './SearchContainer'
import ThemeContext from '../../context/themeContext'

const Header = () => {
  const context = useContext(ThemeContext)

  const onThemeHandler = () => {
    if (context.currentTheme === 'light') {
      context.setTheme('dark')
    } else {
      context.setTheme('light')
    }
  }

  return (
    <header className={styles['github-header']}>
        <section className={styles['github-header-section']}>
          <h1 className={styles['github-title']}>devfinder</h1>
          <button style={{border: 'none'}} onClick={onThemeHandler}>
          <div style={{ display: 'flex', fontSize: '20px' }}>
            <p style={{ textTransform: 'uppercase' }}>{context.currentTheme === 'light' ? 'dark': 'light'}</p>
            <FontAwesomeIcon icon={faMoon} />
          </div>
          </button>
        </section>

        <SearchContainer />
      </header>
  )
}

export default Header
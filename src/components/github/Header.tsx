import { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import styles from '../../styles/github/index.module.css'
import SearchContainer from './SearchContainer'
import { LIGHT, DARK, WHITE, BLACK, SLATE_GREY } from '../../constants/GithubConstants'
import ThemeContext from '../../context/themeContext'

const Header = () => {
  const context = useContext(ThemeContext)

  const onThemeHandler = () => {
    if (context.currentTheme === LIGHT) {
      context.setTheme(DARK)
    } else {
      context.setTheme(LIGHT)
    }
  }

  return (
    <header className={styles['github-header']}>
      <section className={styles['github-header-section']}>
        <h1 style={{color: context.currentTheme === LIGHT ? BLACK: WHITE}}>devfinder</h1>
        <button className={styles['github-theme-btn']} onClick={onThemeHandler}>
          <div className={styles['github-theme-container']}>
            <p className={styles['github-current-theme']} style={{ color: context.currentTheme === LIGHT ? BLACK: WHITE }}>{context.currentTheme === LIGHT ? DARK : LIGHT}</p>
            <FontAwesomeIcon
            icon={context.currentTheme === LIGHT ? faMoon : faSun}
            color={context.currentTheme === LIGHT ? SLATE_GREY: WHITE}/>
          </div>
        </button>
      </section>

      <SearchContainer />
    </header>
  )
}

export default Header
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/github/index.module.css'
import Header from '../../components/github/Header'
import UserInfo from '../../components/github/UserInfo'
import GithubContext from '../../context/githubSearchContext'
import ThemeContext from '../../context/themeContext'
import { LIGHT, WHITE, DARKBLUE } from '../../constants/GithubConstants'

const GithubPage = () => {
  const [user, setUser] = useState({
    name: '',
    image: '',
    repos: 0,
    following: 0,
    followers: 0,
    bio: '',
    blog: '',
    created_at: '',
    twitter_username: '',
    location: '',
  })
  const [currentTheme, setTheme] = useState(LIGHT)

  const theme: string = currentTheme === LIGHT ? WHITE : DARKBLUE

  return (
    <ThemeContext.Provider value={{currentTheme, setTheme}}>
      <div className={styles['github-container']}
      style={{backgroundColor: theme}}>
      <GithubContext.Provider value={{user, setUser}}>
        <Link to='/projects'>
          <button className={styles['back-btn']}>Back</button>
        </Link>
        <Header />

        <main style={{backgroundColor: theme }}>
          <UserInfo />
        </main>
      </GithubContext.Provider>
    </div>
    </ThemeContext.Provider>
  )
}

export default GithubPage
import { useContext } from 'react'

import styles from '../../styles/github/index.module.css'

import Description from '../../components/github/Description'
import MediaContainer from '../../components/github/MediaContainer'
import GithubSearchContext from '../../context/githubSearchContext'
import ThemeContext from '../../context/themeContext'
import { LIGHT } from '../../constants/GithubConstants'

const UserInfo = () => {
  const context = useContext(GithubSearchContext)
  const themeContext = useContext(ThemeContext)

  const currentColor = themeContext.currentTheme === LIGHT ? 'black': 'white'
  return (
    <div className={styles['github-main-container']}>
      <>
        <Description />

        <div className={styles['github-user-info']}
        style={{background: themeContext.currentTheme === LIGHT ? '#F6F8FF': '#141D2F'}}>
          <div className={styles['repositories-info']}>
            <h3 style={{color: currentColor}}>Repos</h3>
            <p style={{color: currentColor}}>{context.user.repos}</p>
          </div>

          <div className={styles['following-info']}>
            <h3 style={{color: currentColor}}>Following</h3>
            <p style={{color: currentColor}}>{context.user.following}</p>
          </div>

          <div className={styles['followers-info']}>
            <h3 style={{color: currentColor}}>Followers</h3>
            <p style={{color: currentColor}}>{context.user.followers}</p>
          </div>

        </div>

        <MediaContainer />
      </>
    </div>
  )
}

export default UserInfo
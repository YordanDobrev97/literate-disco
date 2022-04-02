import { useContext } from 'react'
import { format } from 'date-fns'

import styles from '../../styles/github/index.module.css'
import GithubSearchContext from '../../context/githubSearchContext'
import ThemeContext from '../../context/themeContext'

const Description = () => {
  const context = useContext(GithubSearchContext)
  const themeContext = useContext(ThemeContext)

  return (
    <>
      <div className={styles['github-top']}>
        <img className={styles['github-icon']}
        src={context.user.image || '/github-icon.png'} alt='github-icon' />
        <div className={styles['github-profile-container']}>
          <h2 className={styles[`github-profile-${themeContext.currentTheme}`]}>{context.user.name}</h2>
          <p className={styles['github-username']}>@{context.user.name}</p>
          <p className={styles[`github-profile-${themeContext.currentTheme}`]}>{context.user.bio || 'This profile has no bio'}</p>
        </div>
        {context.user.created_at && <p className={styles['github-date']}>Jointed {format(new Date(context.user.created_at), 'dd MMM yyyy')}</p>}
      </div>
    </>
  )
}

export default Description
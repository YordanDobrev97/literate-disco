import { useContext } from 'react'
import styles from '../../styles/github/index.module.css'

import GithubSearchContext from '../../context/githubSearchContext'

const Description = () => {
  const context = useContext(GithubSearchContext)

  return (
    <>
      <div className={styles['github-top']}>
        <img className={styles['github-icon']} src={context.user.image || '/github-icon.png'} alt='github-icon' />
        <div className={styles['github-profile-container']}>
          <h2 className={styles['github-profile-username']}>{context.user.name}</h2>
        </div>
      </div>
      <p className={styles['github-profile-description']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio provident quod veritatis non quis itaque.</p>
    </>
  )
}

export default Description
import { useContext } from 'react'
import styles from '../../styles/github/index.module.css'

import GithubSearchContext from '../../context/githubSearchContext'

const FollowersInfo = () => {
  const context = useContext(GithubSearchContext)

  return (
    <div className={styles['followers-info']}>
      <h3>Followers</h3>
      <p>{context.user.followers}</p>
    </div>
  )
}

export default FollowersInfo
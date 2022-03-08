import { useContext } from 'react'
import styles from '../../styles/github/index.module.css'

import GithubSearchContext from '../../context/githubSearchContext'

const FollowingInfo = () => {
  const context = useContext(GithubSearchContext)
  return (
    <div className={styles['following-info']}>
      <h3>Following</h3>
      <p>{context.user.following}</p>
    </div>
  )
}

export default FollowingInfo
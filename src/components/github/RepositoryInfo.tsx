import { useContext } from 'react'
import styles from '../../styles/github/index.module.css'

import GithubContext from '../../context/githubSearchContext'

const RepositoryInfo = () => {
  const context = useContext(GithubContext)

  return (
    <div className={styles['repositories-info']}>
      <h3>Repos</h3>
      <p>{context?.user.repos}</p>
    </div>
  )
}

export default RepositoryInfo
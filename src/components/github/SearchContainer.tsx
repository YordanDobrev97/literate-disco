import { useState, useContext } from 'react'
import styles from '../../styles/github/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import GithubSearchContext from '../../context/githubSearchContext'

import { GithubAPI } from '../../utils/api'
import SearchService from '../../services/searchGithubApi'

const SearchContainer = () => {
  const [username, setUsername] = useState<string>('')
  const context = useContext(GithubSearchContext)

  const onSearchHandler = async () => {
    const data = await SearchService(username)
    console.log(data)
    context.setUser({
      name: data.login,
      image: data.avatar_url,
      repos: data.repos_url.length,
      following: data.following_url.length,
      followers: data.followers_url.length
    })
  }

  return (
    <section className={styles['github-search-section']}>
      <div className={styles['github-search-container']}>
        <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />

        <input
          className={styles['github-input']}
          type='text'
          placeholder='Search githu username...' 
          onChange={(e) => setUsername(e.target.value)}
          />
        <button onClick={onSearchHandler} className={styles['github-search-btn']}>Search</button>
      </div>
    </section>
  )
}

export default SearchContainer
import { useState, useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from '../../styles/github/index.module.css'
import GithubSearchContext from '../../context/githubSearchContext'
import ThemeContext from '../../context/themeContext'
import SearchService from '../../services/searchGithubApi'
import { LIGHT } from '../../constants/GithubConstants'

const SearchContainer = () => {
  const [username, setUsername] = useState<string>('')
  const [invalidSearch, setInvalidSearch] = useState<boolean>(false)
  const context = useContext(GithubSearchContext)
  const themeContext = useContext(ThemeContext)

  const onSearchHandler = async () => {
    const data = await SearchService(username)

    if (data.message !== 'Not Found') {
      context.setUser({
        name: data.login,
        image: data.avatar_url,
        repos: data.repos_url.length,
        following: data.following_url.length,
        followers: data.followers_url.length,
        bio: data.bio,
        created_at: data.created_at,
        blog: data.blog,
        location: data.location,
        twitter_username: data.twitter_username,
      })
      setInvalidSearch(false)
    } else {
      setInvalidSearch(true)
    }
  }

  return (
    <section className={styles['github-search-section']}>
      <div className={styles['github-search-container']}>
        <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />

        <input
          className={`${styles['github-input']} ${styles[themeContext.currentTheme]}`}
          type='text'
          placeholder='Search github username...' 
          onChange={(e) => setUsername(e.target.value)}
          style={{color: themeContext.currentTheme === LIGHT ? 'black': 'white'}}
          />
          {invalidSearch && <span style={{color: 'red'}}>No results</span>}
        <button onClick={onSearchHandler} className={styles['github-search-btn']}>Search</button>
      </div>
    </section>
  )
}

export default SearchContainer
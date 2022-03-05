import styles from '../../styles/github/index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'

const GithubPage = () => {
  return (
    <div className={styles['github-container']}>
      <header className={styles['github-header']}>
        <section className={styles['github-header-section']}>
          <h1 className={styles['github-title']}>devfinder</h1>
          <div style={{display: 'flex', fontSize: '20px'}}>
            <p style={{textTransform: 'uppercase'}}>dark</p>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </section>

        <section className={styles['github-search-section']}>
          <div className={styles['github-search-container']}>
            <FontAwesomeIcon icon={faSearch} className={styles['search-icon']}/>

            <input className={styles['github-input']} type='text' placeholder='Search githu username...'/>
            <button className={styles['github-search-btn']}>Search</button>
          </div>
        </section>
      </header>

    </div>
  )
}

export default GithubPage
import styles from '../../styles/github/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchContainer = () => {
  return (
    <section className={styles['github-search-section']}>
          <div className={styles['github-search-container']}>
            <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />

            <input className={styles['github-input']} type='text' placeholder='Search githu username...' />
            <button className={styles['github-search-btn']}>Search</button>
          </div>
        </section>
  )
}

export default SearchContainer
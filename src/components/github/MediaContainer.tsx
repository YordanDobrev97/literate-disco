import styles from '../../styles/github/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const MediaContainer = () => {
  return (
    <div className={styles['github-media-container']}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          Sofia, Bulgaria
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} />
          Not Avaliable
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <FontAwesomeIcon icon={faLink} />
          https://github.blog
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          @github
        </div>
      </div>
    </div>
  )
}

export default MediaContainer
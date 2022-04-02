import { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../../styles/github/index.module.css'
import ThemeContext from '../../context/themeContext'
import GithubContext from '../../context/githubSearchContext'
import { LIGHT } from '../../constants/GithubConstants'

const MediaContainer = () => {
  const themeContext = useContext(ThemeContext)
  const githubContext = useContext(GithubContext)

  const currentColor = themeContext.currentTheme === LIGHT ? 'black': 'white'
  return (
    <div className={styles['github-media-container']}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{color: currentColor}}>
          <FontAwesomeIcon icon={faLocationDot} color={currentColor} />
          {githubContext.user.location}
        </div>
        <div style={{color: currentColor}}>
          <FontAwesomeIcon icon={faTwitter} color={currentColor}/>
          {githubContext.user.twitter_username || 'Not Avaliable'}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{color: currentColor}}>
          <FontAwesomeIcon icon={faLink} color={currentColor}/>
          {githubContext.user.blog}
        </div>
        <div style={{color: currentColor}}>
          <FontAwesomeIcon icon={faGithub} color={currentColor}/>
          @github
        </div>
      </div>
    </div>
  )
}

export default MediaContainer
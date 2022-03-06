import styles from '../../styles/github/index.module.css'

import Header from '../../components/github/Header'
import UserInfo from '../../components/github/UserInfo'
import Description from '../../components/github/Description'
import MediaContainer from '../../components/github/MediaContainer'
import RepositoryInfo from '../../components/github/RepositoryInfo'
import FollowersInfo from '../../components/github/FollowersInfo'
import FollowingInfo from '../../components/github/FollowingInfo'

const GithubPage = () => {
  return (
    <div className={styles['github-container']}>
      <Header />

      <main>
        <UserInfo>
          <>
            <Description />

            <div className={styles['github-user-info']}>
              <RepositoryInfo />
              <FollowersInfo />
              <FollowingInfo />
            </div>

            <MediaContainer />
          </>
        </UserInfo>
      </main>
    </div>
  )
}

export default GithubPage
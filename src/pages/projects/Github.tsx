import { useState } from 'react'
import styles from '../../styles/github/index.module.css'

import Header from '../../components/github/Header'
import UserInfo from '../../components/github/UserInfo'
import Description from '../../components/github/Description'
import MediaContainer from '../../components/github/MediaContainer'
import RepositoryInfo from '../../components/github/RepositoryInfo'
import FollowersInfo from '../../components/github/FollowersInfo'
import FollowingInfo from '../../components/github/FollowingInfo'

import GithubContext from '../../context/githubSearchContext'

const GithubPage = () => {
  const [user, setUser] = useState({
    name: '',
    image: '',
    repos: 0,
    following: 0,
    followers: 0
  })
  return (
    <div className={styles['github-container']}>
      <GithubContext.Provider value={{user, setUser}}>
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
      </GithubContext.Provider>
    </div>
  )
}

export default GithubPage
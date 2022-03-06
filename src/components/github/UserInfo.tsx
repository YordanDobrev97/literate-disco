import React from 'react'
import styles from '../../styles/github/index.module.css'

interface UserInfoProps {
  children: React.ReactNode
}

const UserInfo = ({ children }: UserInfoProps) => {
  return (
    <div className={styles['github-main-container']}>
      {children}
    </div>
  )
}

export default UserInfo
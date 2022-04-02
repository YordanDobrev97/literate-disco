import React from 'react'
import styles from '../../styles/calculator/main.module.css'

interface ContainerProps {
  title: string
  notification: boolean
  children: React.ReactNode
}

const Container = ({ title, notification, children }: ContainerProps) => {
  return (
    <div>
      <div className={styles['item']}>
        <h3>{title}</h3>
        {notification && <span>No can't zero</span>}
      </div>
        {children}
    </div>
  )
}

export default Container
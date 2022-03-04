import React from 'react'

interface ContainerProps {
  title: string
  children: React.ReactNode
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Container
import styles from '../../styles/loopStudios/index.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles['loop-studio-nav']}>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </nav>
  )
}

export default Nav
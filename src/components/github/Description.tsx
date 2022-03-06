import styles from '../../styles/github/index.module.css'

const Description = () => {
  return (
    <>
      <div className={styles['github-top']}>
        <img className={styles['github-icon']} src='/github-icon.png' alt='github-icon' />
        <div className={styles['github-profile-container']}>
          <h2 className={styles['github-profile-username']}>The Octoat</h2>
          <p className={styles['github-profile-user']}>@Octoat</p>
          <p>Joined 25 Jun 2021</p>
        </div>
      </div>
      <p className={styles['github-profile-description']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio provident quod veritatis non quis itaque. Beatae numquam quae ab voluptate! Minima ipsum, quaerat quod possimus neque dicta. Aperiam, exercitationem.</p>
    </>
  )
}

export default Description
import styles from '../../styles/loopStudios/index.module.css'

const AboutSection = () => {
  return (
    <>
      <section className={styles['about-section']}>
        <img className={styles['iteractive-img']} src={'/interactive.jpg'} alt='about-image'/>
      
        <div className={styles['about-container']}>
          <h2 className={styles['about-title']}>The leader in interactive VR</h2>
          <p className={styles['about-description']}>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </section>
    </>
  )
}

export default AboutSection
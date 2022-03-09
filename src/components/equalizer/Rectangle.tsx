import styles from '../../styles/equalizer/index.module.css'

const Rectangle = () => {
  return (
    <div className={styles['rectangle-container']}>
        <svg width="200" height="420" viewBox="0 0 278 428" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 69.5C0 31.1162 31.1162 0 69.5 0V0C107.884 0 139 31.1162 139 69.5V285.333H100C44.7715 285.333 0 240.562 0 185.333V69.5Z" fill="#66E2DC" />
          <path d="M139 285.333H206.667C246.063 285.333 278 317.27 278 356.667V358.5C278 396.884 246.884 428 208.5 428V428C170.116 428 139 396.884 139 358.5V285.333Z" fill="#191826" />
          <rect x="208.5" y="71.3333" width="69.5" height="71.3333" rx="34.75" fill="#FFB964" />
          <rect x="208.5" width="69.5" height="71.3333" rx="34.75" fill="#FA7453" />
          <rect y="285.333" width="139" height="142.667" rx="69.5" fill="#FA7453" />
          <rect x="139" width="69.5" height="142.667" rx="34.75" fill="#191826" />
          <rect x="139" y="142.667" width="139" height="142.667" rx="69.5" stroke="#191826" stroke-width="2" />
          <rect x="139" y="178.333" width="69.5" height="71.3333" rx="34.75" stroke="#191826" stroke-width="2" />
        </svg>
      </div>
  )
}

export default Rectangle
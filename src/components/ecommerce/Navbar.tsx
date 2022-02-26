import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from '../../styles/ecommerce/navigation.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <button className={styles['close-btn']}>
                <i className="fas fa-times"></i>
            </button>
            <button className={styles['hamburger-btn']}>
                <i className="fas fa-bars"></i>
            </button>

            <h1 className={styles['nav-title']}>sneakers</h1>

            <ul className={styles['nav-items']}>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']}>Collections</a>
                </li>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']}>Men</a>
                </li>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']}>Women</a>
                </li>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']}>About</a>
                </li>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']}>Contact</a>
                </li>
            </ul>

            <div className="right">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <img className={styles['profile-img']} src="/avatar.png" />
            </div>
        </nav>
    )
}

export default Navbar
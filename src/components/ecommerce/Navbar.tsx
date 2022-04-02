import Basket from '../../components/ecommerce/Basket'
import styles from '../../styles/ecommerce/navigation.module.css'
import { PRODUCT_THUMBNAIL, AVATAR } from '../../constants/EcommerceConstants'

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

            <div className={styles['right']}>
                <Basket
                    image={PRODUCT_THUMBNAIL.replace('{0}', '1')}
                    productName='Fall Limited Edition Sneakers'
                    price={125}/>
                <img className={styles['profile-img']} src={AVATAR} />
            </div>
        </nav>
    )
}

export default Navbar
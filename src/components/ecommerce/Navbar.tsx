import { useContext } from 'react'

import Basket from '../../components/ecommerce/Basket'
import CartContext from '../../context/cartContext'
import styles from '../../styles/ecommerce/navigation.module.css'

const Navbar = () => {
    const context = useContext(CartContext)

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
                    image='/image-product-1-thumbnail.jpg'
                    productName='Fall Limited Edition Sneakers'
                    price={125}/>
                <img className={styles['profile-img']} src="/avatar.png" />
            </div>
        </nav>
    )
}

export default Navbar
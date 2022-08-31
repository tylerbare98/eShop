import styles from './Header.module.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    return(
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <StorefrontIcon className={styles.header_logoImage} font-size="large"/>
                <h2 className={styles.header_logoTitle}>eSHOP</h2>
            </div>

            <div className={styles.header_search}>
                <input type="text" className={styles.header_searchInput} />
                <SearchIcon className={styles.header_searchIcon}/>
            </div>

            <div className={styles.header_nav}>
                <div className={styles.nav_item}>
                    <span className={styles.nav_itemLineOne}>Hello Guest</span>
                    <span className={styles.nav_itemLineTwo}>Sign In</span>
                </div>
                <div className={styles.nav_item}>
                    <span className={styles.nav_itemLineOne}>Your</span>
                    <span className={styles.nav_itemLineTwo}>Shop</span>
                </div>
                <div className={styles.basket_item}>
                    <ShoppingBasketIcon className={styles.basket_itemBasket}/>
                    <span className={styles.basket_basketCount}>0</span>
                </div>
                
            </div>
        </div>
    )
}

export default Header;
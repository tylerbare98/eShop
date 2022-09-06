import styles from './Header.module.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { checkoutState } from '../../models/models'

const Header = () => {

    //state setup
    const storeState: checkoutState = useSelector((state: checkoutState) => state)

    return(
        <div className={styles.header}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={styles.header_logo}>
                    <StorefrontIcon className={styles.header_logoImage} font-size="large"/>
                    <h2 className={styles.header_logoTitle}>eSHOP</h2>
                </div>
            </Link>

            <div className={styles.header_search}>
                <input type="text" className={styles.header_searchInput} />
                <SearchIcon className={styles.header_searchIcon}/>
            </div>

            <div className={styles.header_nav}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <div className={styles.nav_item}>
                        <span className={styles.nav_itemLineOne}>Hello Guest</span>
                        <span className={styles.nav_itemLineTwo}>Sign In</span>
                    </div>
                </Link>
                <div className={styles.nav_item}>
                    <span className={styles.nav_itemLineOne}>Your</span>
                    <span className={styles.nav_itemLineTwo}>Shop</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className={styles.basket_item}>
                        <ShoppingBasketIcon className={styles.basket_itemBasket}/>
                        <span className={styles.basket_basketCount}>{storeState.list.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
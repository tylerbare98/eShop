import { useSelector } from 'react-redux'
import { checkoutState, productProps } from '../../models/models'
import styles from './Checkout.module.css'
import ProductCheckout from './ProductCheckout'
import SubTotalCheckout from './SubTotalCheckout'

const Checkout = () => {

    //state setup
    const storeState: checkoutState = useSelector((state: checkoutState) => state)

    const createProduct = (item: productProps) => {
        return(
            <ProductCheckout id={item.id} key={item.id} title={item.title} price={item.price} rating={item.rating} imgSRC={item.imgSRC} />
        )
        
    }
    const products = storeState.list.map(createProduct)

    return(
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <img className="adImage" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <h3>Your Shopping Basket</h3>
                {products}
            </div>
            <div className={styles.rightContainer}>
                <SubTotalCheckout />
            </div>
            
        </div> 
    )
}

export default Checkout;
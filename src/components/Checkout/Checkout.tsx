import styles from './Checkout.module.css'
import ProductCheckout from './ProductCheckout'
import SubTotalCheckout from './SubTotalCheckout'

const Checkout = () => {
    return(
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <img className="adImage" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <h3>Your Shopping Basket</h3>
                <ProductCheckout title="Wireless Earbuds, MPWHYL Bluetooth 5.3 Headphones, 30 Hours of Playtime, Headphones with Microphone, Deep Bass in Ear Headphones, IPX8 Waterproof Bluetoth in Ear Headphones for Workouts and Running" 
                price={34.27} rating={5} 
                imgSRC="https://m.media-amazon.com/images/I/61vimE99G6L._AC_SL1500_.jpg"/>
                <ProductCheckout title="Fire HD 8 tablet, 8'' HD display, 32 GB, latest model (2020 release), designed for portable entertainment, Black" 
                price={19.95} rating={4} 
                imgSRC="https://m.media-amazon.com/images/I/71rQHf5SUPL._AC_SL1500_.jpg"/>        
            </div>
            <div className={styles.rightContainer}>
                <SubTotalCheckout />
            </div>
            
        </div> 
    )
}

export default Checkout;
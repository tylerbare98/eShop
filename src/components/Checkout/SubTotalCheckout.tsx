import { useSelector } from 'react-redux'
import { checkoutState } from '../../models/models'
import styles from './SubTotalCheckout.module.css'

const SubTotalCheckout = () => {

    //state setup
    const storeState: checkoutState = useSelector((state: checkoutState) => state)

    const giftHandler = () => {
        //nothing: mwah-haha
    }

    const checkoutHandler = () => {
        alert("Ordering items...")
    }

    const total = storeState.list.reduce(
        (prev, curr) => prev + curr.price, 0
    ).toFixed(2)

    return(
        <div className={styles.container}>
            <span>Subtotal ({storeState.list.length} items): <strong>${total}</strong></span>
            <section>
                    <input type="checkbox"
                        onClick={giftHandler}/>
                    <span>This order contains a gift</span>
            </section>
            <button className={styles.checkoutButton} onClick={checkoutHandler}> Proceed to checkout</button>
        </div>
    )
}

export default SubTotalCheckout;
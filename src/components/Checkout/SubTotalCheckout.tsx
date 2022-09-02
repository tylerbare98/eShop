import styles from './SubTotalCheckout.module.css'

const SubTotalCheckout = () => {

    const giftHandler = () => {

    }

    return(
        <div className={styles.container}>
            <span>Subtotal (0 items): <strong>$0</strong></span>
            <section>
                    <input type="checkbox"
                        onClick={giftHandler}/>
                    <span>This order contains a gift</span>
            </section>
            <button className={styles.checkoutButton}> Proceed to checkout</button>
        </div>
    )
}

export default SubTotalCheckout;
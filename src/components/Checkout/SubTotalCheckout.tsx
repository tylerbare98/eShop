import styles from './SubTotalCheckout.module.css'

const SubTotalCheckout = () => {

    const giftHandler = () => {

    }

    const checkoutHandler = () => {
        alert("Ordering items...")
    }

    return(
        <div className={styles.container}>
            <span>Subtotal (0 items): <strong>$0</strong></span>
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
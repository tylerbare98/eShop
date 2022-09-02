import styles from './ProductCheckout.module.css'
import {productProps} from '../../models/models'

const Product: React.FC<productProps> = (props) => {
    return(
        <div className={styles.container}>
            <img src={props.imgSRC} alt="" className={styles.image}></img>
            <div className={styles.description}>
                <p>{props.title}</p>
                <span>${props.price}</span>
                <p>⭐⭐⭐⭐⭐</p>
                <button className={styles.basketButton}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default Product;
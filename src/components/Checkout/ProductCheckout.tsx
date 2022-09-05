import styles from './ProductCheckout.module.css'
import {productProps} from '../../models/models'
import { useDispatch } from 'react-redux';

const Product: React.FC<productProps> = (props) => {

    //state setup
    const dispatch = useDispatch();

    const removeHandler = (id: string) => {
        dispatch({
            type: 'RemoveFromBasket',
            id
          });
    }

    return(
        <div className={styles.container}>
            <img src={props.imgSRC} alt="" className={styles.image}></img>
            <div className={styles.description}>
                <p>{props.title}</p>
                <span>${props.price}</span>
                <p>⭐⭐⭐⭐⭐</p>
                <button className={styles.basketButton} onClick={(e) => removeHandler(props.id)}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default Product;
import styles from './Product.module.css'
import {checkoutState, productProps} from '../../models/models'
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';


const Product: React.FC<productProps> = (props) => {

  //state setup
  const storeState: checkoutState = useSelector((state: checkoutState) => state)
  const dispatch = useDispatch();

  const AddToCartHandler = (product: productProps) => {
    dispatch({
      type: 'AddToBasket',
      item: product
    });
  }

  const item:productProps = {
    id:uuid(), title:props.title, price:props.price, rating:props.rating, imgSRC:props.imgSRC
  }
  
  return (
    <div className={styles.container}>
        <div className={styles.description}>
            <p>{props.title}</p>
            <span>${props.price}</span>
            <p>⭐⭐⭐⭐⭐</p>
        </div>
        <img src={props.imgSRC} alt="" className={styles.image}></img>
        <button className={styles.basketButton} 
          onClick={(e) => AddToCartHandler(item)}
          >Add to Basket
        </button>
    </div>
  );
}

export default Product;

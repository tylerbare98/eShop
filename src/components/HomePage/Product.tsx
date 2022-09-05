import styles from './Product.module.css'
import { productProps } from '../../models/models'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';


const Product: React.FC<productProps> = (props) => {

  //state setup
  const dispatch = useDispatch();

  const AddToCartHandler = (product: productProps) => {
    console.log(product.id)
    dispatch({
      type: 'AddToBasket',
      item:product
    });
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
          onClick={(e) => AddToCartHandler({id:uuid(), title:props.title, price:props.price, rating:props.rating, imgSRC:props.imgSRC})}
          >Add to Basket
        </button>
    </div>
  );
}

export default Product;

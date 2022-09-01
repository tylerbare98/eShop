import { PropaneSharp } from '@mui/icons-material';
import styles from './Product.module.css'

type productProps = {
  title: string, price: number, rating: number, imgSRC: string 
}

const Product: React.FC<productProps> = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.description}>
            <p>{props.title}</p>
            <span>${props.price}</span>
            <p>⭐⭐⭐⭐⭐</p>
        </div>
        <img src={props.imgSRC} alt="" className={styles.image}></img>
        <button className={styles.basketButton}>Add to Basket</button>
    </div>
  );
}

export default Product;

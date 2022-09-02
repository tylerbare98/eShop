import Product from './Product'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <div>
        <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg'
            className={styles.ecommercePhoto} alt=""></img>
        <div className={styles.row}>
            <Product title="Wireless Earbuds, MPWHYL Bluetooth 5.3 Headphones, 30 Hours of Playtime, Headphones with Microphone, Deep Bass in Ear Headphones, IPX8 Waterproof Bluetoth in Ear Headphones for Workouts and Running" 
                price={34.27} rating={5} 
                imgSRC="https://m.media-amazon.com/images/I/61vimE99G6L._AC_SL1500_.jpg"/>
            <Product title="Fire HD 8 tablet, 8'' HD display, 32 GB, latest model (2020 release), designed for portable entertainment, Black" 
                price={19.95} rating={4} 
                imgSRC="https://m.media-amazon.com/images/I/71rQHf5SUPL._AC_SL1500_.jpg"/>
        </div>
        <div className={styles.row}>
            <Product title="20W Waterproof Bluetooth Speaker, Portable Wireless Speakers with 28H Playtime, IPX7 Waterproof, Wireless Stereo Pairing, Bluetooth 5.0 Speaker for Shower Home Outdoors Travel" 
                price={106.32} rating={1} 
                imgSRC="https://m.media-amazon.com/images/I/91Dx8-EPbAL._AC_SL1500_.jpg"/>
            <Product title="WolfLawS G9300 Gaming Headset Headphones for PS4 PS5 Xbox One PC Switch with Microphone, Over Ear Gaming Headsets with Bass Surround Sound, Memory Foam Ear Pads for Game Boy Sony PSP Sega Gensis" 
                price={99.99} rating={2} 
                imgSRC="https://m.media-amazon.com/images/I/61OJI6c+9eL._AC_SL1000_.jpg"/>
            <Product title="Ashthorpe 30-inch Beginner Acoustic Guitar Package (Blue), Basic Starter Kit w/Gig Bag, Strings, Strap, Tuner, Picks" 
                price={15.35} rating={5} 
                imgSRC="https://m.media-amazon.com/images/I/81aka9RIA0L._AC_SL1500_.jpg"/>
        </div>
        <div className={styles.row}>
        <Product title="My First Guitar: Learn To Play: Kids" 
                price={198.77} rating={3} 
                imgSRC="https://m.media-amazon.com/images/I/515lRblZkES.jpg"/>
        </div>
    </div>
  );
}

export default HomePage;

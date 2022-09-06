import styles from './Login.module.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    //state setup
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={styles.header_logo}>
                    <StorefrontIcon className={styles.header_logoImage} font-size="large"/>
                    <h2 className={styles.header_logoTitle}>eSHOP</h2>
                </div>
            </Link>

            <div className={styles.loginContainer}>
                <h1>Sign-in</h1>
                <form action="/">
                    <label><strong>E-mail</strong></label><br/>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} id="email" /><br/><br/>
                    <label><strong>Password</strong></label><br/>
                    <input type="password" value={password} onChange={e => setEmail(e.target.value)} id="password" /><br/><br/>
                    <input type="submit" className={styles.signIn} value="Sign In" />
                </form>
                <p className={styles.agreement}>By signing in you agree to the eShop Website Consitions of Use & Sale. 
                    Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>
                <form action="/">
                    <input type="submit" className={styles.createAccount} value="Create your eShop Account" />
                </form>
            </div>
        </>
    )
}

export default Login;
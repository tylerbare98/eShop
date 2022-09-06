import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; //Routes replaced Switch in v6
import Checkout from "./components/CheckoutPage/Checkout";
import HeaderBar from "./components/UI/Header"
import HomePage from "./components/HomePage/HomePage"
import { Provider } from 'react-redux'
import store from './store/checkoutStore'
import Login from "./components/LoginPage/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path="/" element={<><HeaderBar/><HomePage/></>} />
            <Route path="/checkout" element={<><HeaderBar/><Checkout /></>} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

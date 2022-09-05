import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; //Routes replaced Switch in v6
import Checkout from "./components/Checkout/Checkout";
import HeaderBar from "./components/Header"
import HomePage from "./components/HomePage/HomePage"
import { Provider } from 'react-redux'
import store from './store/checkoutStore'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <HeaderBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

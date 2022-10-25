import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/index';
import Cart from './pages/cart/index';
import Information from './pages/checkout/information/index';
import Shipping from './pages/checkout/shipping/index';
import Payment from './pages/checkout/payment/index';
import './App.css';
import './assets/styles/globals.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path='checkout'>
            <Route path='information' element={<Information />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/home/index';
import Cart from './pages/cart/index';
import Information from './pages/checkout/information/index';
import Shipping from './pages/checkout/shipping/index';
import Payment from './pages/checkout/payment/index';
import Admin from './pages/admin/index';
import {CheckoutProvider} from './context/CheckoutContext';
import Protected from './containers/Protected';
import ConditionalRoute from  './containers/ConditionalRoute';
import './App.css';
import './assets/styles/globals.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin" element={ <Admin />} />
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="cart" element={<Cart />} />

            {/* Checkout route  */}
            <Route path='checkout' element={
              <CheckoutProvider>
                <ConditionalRoute />
              </CheckoutProvider>
            }>
                <Route path='information' element={<Information />} />
                <Route path="shipping" element={ <Shipping />} />
                <Route path="payment" element={<Payment />} />
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

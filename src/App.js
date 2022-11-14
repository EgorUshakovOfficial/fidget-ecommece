import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import {CheckoutProvider} from './context/CheckoutContext';
import { PageProvider } from './context/PageContext';
import Home from './pages/home/index';
import Cart from './pages/cart/index';
import Information from './pages/checkout/information/index';
import Shipping from './pages/checkout/shipping/index';
import Payment from './pages/checkout/payment/index';
import Admin from './pages/admin/index';
import Dashboard from './pages/dashboard/index';
import Protected from './containers/routes/Protected';
import Conditional from  './containers/routes/Conditional';
import './App.css';
import './assets/styles/globals.css';

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="admin" element={ <Admin />} />
              <Route path="dashboard" element={
                  //<Protected>
                    <PageProvider>
                      <Dashboard />
                    </PageProvider>
                  //</Protected>
                }
              />
              <Route path="cart" element={<Cart />} />
              {/* Checkout route  */}
              <Route path='checkout' element={
                <CheckoutProvider>
                  <Conditional />
                </CheckoutProvider>
              }>
                  <Route path='information' element={<Information />} />
                  <Route path="shipping" element={ <Shipping />} />
                  <Route path="payment" element={<Payment />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;

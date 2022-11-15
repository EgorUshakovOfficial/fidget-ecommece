import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider, Protected } from './features/authentication/index';
import { PageProvider } from './features/dashboard/index';
import {Conditional, CheckoutProvider} from  './features/checkout/index';
import ShoppingHome from './pages/Shopping/ShoppingHome';
import Cart from './pages/Shopping/Cart';
import Information from './pages/Checkout/Information';
import Shipping from './pages/Checkout/Shipping';
import Payment from './pages/Checkout/Payment';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
import './assets/styles/globals.css';

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<ShoppingHome />} />
              <Route path="admin" element={ <Admin />} />
              <Route path="dashboard" element={
                  <Protected>
                    <PageProvider>
                      <Dashboard />
                    </PageProvider>
                  </Protected>
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

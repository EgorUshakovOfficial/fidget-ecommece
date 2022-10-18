import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/index';
import Checkout from './pages/checkout/index';
import './App.css';
import './assets/styles/globals.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

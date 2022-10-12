import ShoppingGallery from './components/ShoppingGallery'; 
import Layout from './containers/Layout'; 
import CartSlider from './components/CartSlider'; 
import './App.css';
import './assets/styles/globals.css'; 

function App() {
  return (
    <div className="App">
      <Layout>
        <ShoppingGallery />
        <CartSlider />
      </Layout>
    </div>
  );
}

export default App;

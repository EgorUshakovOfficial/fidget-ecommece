import logo from './logo.svg';
import ShoppingGallery from './components/ShoppingGallery'; 
import Header from './components/Header'; 
import './App.css';
import './assets/styles/globals.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <ShoppingGallery />
    </div>
  );
}

export default App;

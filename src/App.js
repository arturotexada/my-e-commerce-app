import {
  HashRouter,
  Routes,
  Route
  } from 'react-router-dom';

import { 
  Home, 
  About, 
  ShopDetail, 
  ProductDetail, 
  Products, 
  Purchases, 
  Cart 
  } from './pages';

import { useSelector } from 'react-redux';  
import './App.css';

//import LoadingScreen from './components/LoadingScreen';
import { LoadingScreen } from './components';

function App() {
  const isLoading = useSelector(state => state.isLoading)
  return (  
    <div className="App">
      <HashRouter>
      
        { isLoading && <LoadingScreen/> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />


          <Route path="/shop/:id" element={<ShopDetail />} />    
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products/" element={<Products/>} />


          <Route path="/purchases/" element={<Purchases/>} />
          <Route path="/cart/" element={<Cart/>} />
        </Routes>

      </HashRouter>
    </div>   
  );
}

export default App;
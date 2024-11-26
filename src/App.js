
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Trending from './Pages/Trending';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import CartPage from './Components/CartPage';



function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path="/shop/card/:id" element={<ProductDetails/>}/>
    <Route path='/shop/card/cartpage' element={<CartPage/>}/>
    <Route path='/trending' element={<Trending/>}/>
   </Routes>
   </>
  );
}

export default App;

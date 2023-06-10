
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import Delivery from './pages/Delivery';
import DiscountSale from './pages/DiscountSale';
import Order from './pages/Order';
import Product from './pages/Product';
import Favourite from "./pages/Favourite";
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/delivery' element={<Delivery/>}/>
      <Route path='discount' element={<DiscountSale/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='favourite' element={<Favourite/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

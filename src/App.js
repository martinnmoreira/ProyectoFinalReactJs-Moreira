import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import FetchContainer from "./components/FetchContainer/FetchContainer"
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Cart from './components/Cart/Cart';
import { CartProvider } from "./Context/CartContext";
import BuyForm from "./components/BuyForm/BuyForm"
import Contacto from "./pages/Contacto";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/categoria/:tipocategoria' element={<ItemListContainer/>} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
          <Route path='/fetch' element={<FetchContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/Finalizar' element={<BuyForm />} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

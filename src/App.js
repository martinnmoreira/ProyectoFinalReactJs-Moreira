import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Container } from "react-bootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import FetchContainer from "./components/FetchContainer/FetchContainer"
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart/Cart';
import { CartProvider } from "./Context/CartContext";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/categoria/:tipocategoria' element={<ItemListContainer/>} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/fetch' element={<FetchContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <footer className="container-fluid">
          <Container className="btn btn-light">
            <Footer greeting1={"Inicio"} greeting2={"Productos"}  greeting3={"Contacto"} />
          </Container>
        </footer>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

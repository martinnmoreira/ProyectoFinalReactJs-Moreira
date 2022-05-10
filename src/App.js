import Header from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { Container } from "react-bootstrap";
import {products} from "./data/Products/Products";
import ItemCount from "./components/ItemCount/ItemCount";



function App() {
  const taskProducts = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })

  taskProducts.then((res) => {
    console.log("The promise has run successfully")
  }).catch((err) => {
    console.log(("An error ocurred running the promise"))
  })

  return (
    <>
    <div className="App">
      <Header />
      <main className="main-content container">
        <ItemListContainer />
      </main >
      <footer className="container-fluid">
        <Container className="btn btn-light">
          <Footer greeting1={"Inicio"} greeting2={"Productos"}  greeting3={"Contacto"} />
        </Container>
      </footer>
    </div>
    </>
  );
}

export default App;

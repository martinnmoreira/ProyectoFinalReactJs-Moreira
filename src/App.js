import Header from "./components/Navbar/Navbar";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { Container } from "react-bootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <>
    <div className="App">
      <Header />
      <main className="main-content container">
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
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

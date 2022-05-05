import Header from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { Container } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content container">
        <ItemListContainer greeting1={"Lapices"} greeting2={"Lapiceras"} greeting3={"Cuadernos"} greeting4={"Carpetas"} greeting5={"Cartucheras"}/>
      </main >
      <footer className="container">
        <Container className="btn btn-light">
          <Footer greeting={"Inicio"} greeting2={"Productos"}  greeting3={"Contacto"} />
        </Container>
      </footer>
    </div>
  );
}

export default App;

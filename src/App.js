import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <Header titulo="Desafio Estado de los componentes y eventos" />
      <Formulario />

      <Footer titulo="."/>
    </div>
  );
}

export default App;

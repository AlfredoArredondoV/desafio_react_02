import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header titulo="Desafio Estado de los componentes y eventos" />
      <Form />
      <Footer titulo="."/>
    </div>
  );
}

export default App;

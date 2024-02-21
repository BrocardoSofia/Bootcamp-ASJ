import './App.css';
import Componente1 from './components/Componente1';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Hola Mundo!
        </h2>
        <p>Primera App en React.</p>
        <Componente1 texto="Otro texto... " color="Red"/>
        <Componente1 texto="Hola, que tal?"/>
      </header>
    </div>
  );
}

export default App;

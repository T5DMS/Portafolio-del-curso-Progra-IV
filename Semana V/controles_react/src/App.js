import logo from './logo.svg';
import './App.css';

function App(propts) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hola Mundo!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {propts.nombre}
        </a>
      </header>
    </div>
  );
}

export default App;

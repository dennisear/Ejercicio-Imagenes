import './App.css';
import Todo from './componentes/Todo'
import Cuerpo from './componentes/Cuerpo';
import Footer from './componentes/Footer';
import Title from './componentes/Title';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GlobalStyles/>
      <Title/>
      <Todo/>
      <Cuerpo/>
      <Footer/>
    </div>
  );
}

export default App;
import './App.css';
import Todo from './componentes/Todo'
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <div className="App">
    <Router>
    <GlobalStyles/>
    <Switch>
    <Route path="/"exact component={Home}/>
    <Route path="/contact"exact component={Contact}/>
    </Switch>
    </Router>
    </div>
  )
}

export default App;
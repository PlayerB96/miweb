import './App.css';
import Navbar from './componentes/navbar';
import Inicio from './componentes/inicio';
import Blog from './componentes/blog';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Inicio/>
        </Route>
        <Route exact path="/blog">
          <Blog/>
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;

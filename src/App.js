import './App.css';
import { Button,ButtonGroup } from 'react-bootstrap';
import Apirender from './Apirender';
import colombia from './colombia.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
     
      <div>
        <nav>

        <h2>Consumo Api - Departamentos y Municipios Colombia</h2>
          <ButtonGroup className="centered">
              <Link to="/">
                  <Button variant="secondary">
                        INICIO
                  </Button>
              </Link>
              <Link to="/Api">
                  <Button variant="secondary">
                        API
                  </Button>
              </Link>
            
        </ButtonGroup>
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Api">
            <Apirender></Apirender>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <img src={colombia} className="centered"></img>
 
}
export default App;

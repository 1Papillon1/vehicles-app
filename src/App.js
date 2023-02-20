import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Store from "./Stores/Store";
import TestAll from "./pages/Makes";
import Makes from "./pages/Makes";
import Models from "./pages/Models";
import Home from "./pages/Home";
import "./styles/app.scss";

function App() {

  const vehiclesStore = new Store();

  return (
    <Router>
        <nav className="navigation" >
          <ul className="navigation__list">
          <Link className="navigation__list__item" to="/">HOME</Link>
            <Link className="navigation__list__item" to="/vehicles/makes">VEHICLE MAKES</Link>
            
          </ul>
        </nav>
      <Switch>

        

        <Route path="/vehicles/makes">
          <Makes store={vehiclesStore}/>
        </Route>

        <Route path="/vehicles/models">
          <Models store={vehiclesStore}/>
        </Route>

        <Route path="/">
          <Home store={vehiclesStore}/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;

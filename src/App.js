import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Makes from "./pages/Makes";
import Models from "./pages/Models";
import Home from "./pages/Home";
import "./styles/app.scss";

function App() {
  return (
    <Router>
        <nav className="navigation" >
          <ul className="navigation__list">
          <Link className="navigation__list__item" to="/">HOME</Link>
            <Link className="navigation__list__item" to="/makes">VEHICLE MAKES</Link>
            <Link className="navigation__list__item" to="/models">VEHICLE MODELS</Link>
          </ul>
        </nav>
      <Switch>

      

        <Route path="/makes">
          <Makes />
        </Route>

        <Route path="/models">
          <Models />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;

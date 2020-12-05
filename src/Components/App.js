import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import * as ROUTES from "./Routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);


// import logo from '../Images/logo.svg';
import './styles.css';

import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';


function App() {
  return (
    <Router>
      <div>
        <div className="hidden text-center">
          <div className="row desktop-banner">
            <div className="col">
              {/* <img className="littler-square" alt="logo" src={Logo} /> */}
              <h3>
                <br></br>
                Visit us on mobile to get the full experience!
              </h3>
            </div>
          </div>
        </div>
        {/* -------- */}
        <div className="site-content">
          <Switch>
            <Route exact path={ROUTES.LANDING}>
              <Redirect to={ROUTES.ABOUT} />
            </Route>
            <Route exact path={ROUTES.HOME}>
              <Redirect to={ROUTES.ABOUT} />
            </Route>
            <Route path={ROUTES.ABOUT} component={AboutPage} />
            <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

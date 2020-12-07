import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import * as ROUTES from "./Routes";
import Navigation from "./Navigation";
import "./styles.css";
// import logo from '../Images/logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";

import { AboutPage, NotFoundPage, RobinWilliamsPage, SocialAccountsPage } from "./Pages";


import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faCheckSquare, faCoffee, faHome, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, faCheckSquare, faCoffee, faHome, faExternalLinkAlt);


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
            <Route path={ROUTES.SOCIAL_ACCOUNTS} component={SocialAccountsPage} />
            <Route path={ROUTES.ROBIN_WILLIAMS} component={RobinWilliamsPage} />
            <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
          </Switch>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import * as ROUTES from "./Routes";

// import logo from '../Images/logo.svg';
import './App.css';

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

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

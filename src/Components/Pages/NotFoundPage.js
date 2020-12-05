import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../Routes";

// import logo from '../../Images/logo.svg';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container not-found-container">
        {/* <img className="littler-square" alt="logo" src={Logo} /> */}
        <h1>Oops!</h1>
        <h2>We can't find the page you're looking for.</h2>
        <p>
          <Link to={HOME}>
            <button className="btn btn-secondary">Go to Home Kid</button>
          </Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;

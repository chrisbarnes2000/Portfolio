import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../Routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SocailAccountsPage extends Component {
  render() {
    return (
      <div className="container social-accounts-container">
        <div>
          <a
            className="nav-item nav-link"
            id="nav-linkedin-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-linkedin"
            aria-selected="false"
            href="https://www.linkedin.com/in/chrisbarnes2000/"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} color="#0e76a8" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a
            className="nav-item nav-link"
            id="nav-github-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-github"
            aria-selected="false"
            href="https://github.com/ChrisBarnes7404"
          >
            <FontAwesomeIcon icon={["fab", "github"]} color="#211F1F" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a
            className="nav-item nav-link"
            id="nav-instagram-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-instagram"
            aria-selected="false"
            href="https://instagram.com/dragon_dominant"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} color="#bc2a8d" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
        </div>
        <div>
          <a
            className="nav-item nav-link"
            id="nav-twitter-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-twitter"
            aria-selected="false"
            href="https://twitter.com/dragon_dominant"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} color="#00acee" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a
            className="nav-item nav-link"
            id="nav-facebook-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-facebook"
            aria-selected="false"
            href="https://facebook.com/chrisb7404"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} color="#3b5998" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a
            className="nav-item nav-link"
            id="nav-youtube-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-youtube"
            aria-selected="false"
            href="https://youtube.com/channel/UCZ13zqecjflTKbwEfT9qiIg"
          >
            <FontAwesomeIcon icon={["fab", "youtube"]} color="#c4302b" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
        </div>
      </div>
    );
  }
}

export default SocailAccountsPage;

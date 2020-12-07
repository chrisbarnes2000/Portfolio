import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SocailAccountsPage extends Component {
  render() {
    return (
      <div className="container social-accounts-container">
        <div className="page-inner">
          <a href="https://www.linkedin.com/in/chrisbarnes2000/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} color="#0e76a8" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a href="https://github.com/ChrisBarnes7404">
            <FontAwesomeIcon icon={["fab", "github"]} color="#211F1F" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a href="https://instagram.com/dragon_dominant">
            <FontAwesomeIcon icon={["fab", "instagram"]} color="#bc2a8d" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a href="https://twitter.com/dragon_dominant">
            <FontAwesomeIcon icon={["fab", "twitter"]} color="#00acee" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a href="https://facebook.com/chrisb7404">
            <FontAwesomeIcon icon={["fab", "facebook"]} color="#3b5998" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
          <a href="https://youtube.com/channel/UCZ13zqecjflTKbwEfT9qiIg">
            <FontAwesomeIcon icon={["fab", "youtube"]} color="#c4302b" size="2x" />
            {/* <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> */}
          </a>
        </div>
      </div>
    );
  }
}

export default SocailAccountsPage;

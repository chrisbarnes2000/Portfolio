import React from 'react';
import { Link } from 'react-router-dom';

// import { AuthUserContext } from './Session';
import * as ROUTES from './Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navigation = () => (
  // <AuthUserContext.Consumer>
  //   {(authUser) => !!authUser && (
  <nav defaultactivekey="/home">
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <Link
        className="nav-item nav-link"
        id="nav-home-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-home"
        aria-selected="false"
        to={ROUTES.HOME}
      >
        <FontAwesomeIcon icon={["fas", "home"]} />
      </Link>
      <Link
        className="nav-item nav-link"
        id="nav-account-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-account"
        aria-selected="false"
        to={ROUTES.ROBIN_WILLIAMS}
      >
        Robin Williams
      </Link>
      <Link
        className="nav-item nav-link"
        id="nav-social-accounts-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-social-accounts"
        aria-selected="false"
        to={ROUTES.SOCIAL_ACCOUNTS}
      >
        Vist My Accounts
      </Link>
      <a
        className="nav-item nav-link"
        id="nav-ms-portfolio-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="nav-ms-protfolio"
        aria-selected="false"
        href="http://make.sc/portfolio/Christopher-Barnes"
        target="_blank"
        rel="noreferrer"
      >
        MS Protfolio <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
      </a>

      {/* {!!authUser.roles.ADMIN && (
        <Link
          className="nav-item nav-link"
          id="nav-admin-tab"
          data-toggle="tab"
          role="tab"
          aria-controls="nav-admin"
          aria-selected="false"
          to={ROUTES.ADMIN}
        >
          Admin
        </Link>
      )} */}
    </div>
  </nav>
  // <div className="tab-wrapper">
  //   <div className="container">
  //     <div className="row">

  //     </div>
  //   </div>
  // </div>
  //   )}
  // </AuthUserContext.Consumer>
);

export default Navigation;

import React from "react";
import { Switch, Route } from "react-router-dom";

import * as ROUTES from "../../Routes";
import RobinWilliamsPage from "./RobinWilliamsPage";
import PBS_VideosPage from "./PBS_VideosPage";
import WorkCitedPage from "./WorkCitedPage";


const RobinWilliamsIndex = () => (
  <div className="container robin-williams-container">
    <div className="jumbotron paral paralsec">
      <h1 className="display-8 text-center mb-3">Robin Williams</h1>
    </div>
    <Switch>
      <Route exact path={ROUTES.ROBIN_WILLIAMS} component={RobinWilliamsPage} />
      <Route exact path={ROUTES.PBS_VIDEOS} component={PBS_VideosPage} />
      <Route exact path={ROUTES.WORK_CITED} component={WorkCitedPage} />
    </Switch>
  </div>
);

export default RobinWilliamsIndex;
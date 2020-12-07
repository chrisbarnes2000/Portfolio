import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Link } from "react-router-dom";
// import { PROJECTS } from "../../routes";

class AboutPage extends Component {
  render() {
    return (
      <div className="container about-container">
        <h1>
          About Christopher <br />
          (Chris) Barnes
        </h1>

        <p>
          He is the middle of 5 siblings and has traveled to 34 of the 50 states. (Interactive Map Comming Soon)
          <br />
          <br />
          Around 2008-2010 members of his family started developing symptoms of Dementia or Alzheimers.
          <br />
          <br />
          In 2014, Disney Released Big Hero 6, in which Baymax: A personal health care companion appeared.
          <br />
          <br />
          In High School: 2015-19, He was dual enrolled at Pierce College: 2017-19 in order to obtain his AS-T Degree
          with his Diploma.
          <br />
          <br />
          His High Scool's Robotic team &nbsp;
          <a href="https://frc-events.firstinspires.org/team/2927">2927 PiRhoTechs</a> competed in &nbsp;
          <a href="https://www.firstinspires.org/robotics/frc">First Robotics Competitions (FRC)</a>.
        </p>

        {/* <Link to={PROJECTS}>
          <button>Check out some of my recent projects</button>
        </Link> */}
      </div>
    );
  }
}

export default AboutPage;

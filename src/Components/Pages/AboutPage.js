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

        <ul>
          <a href="https://www.linkedin.com/in/chrisbarnes2000/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} color="#0e76a8" size="2x" />
          </a>
          &nbsp;
          <a href="https://github.com/ChrisBarnes7404">
            <FontAwesomeIcon icon={["fab", "github"]} color="#211F1F" size="2x" />
          </a>
          &nbsp;
          <a href="https://twitter.com/dragon_dominant">
            <FontAwesomeIcon icon={["fab", "twitter"]} color="#00acee" size="2x" />
          </a>
          &nbsp;
          <a href="https://facebook.com/chrisb7404">
            <FontAwesomeIcon icon={["fab", "facebook"]} color="#3b5998" size="2x" />
          </a>
          &nbsp;
          <a href="https://youtube.com/channel/UCZ13zqecjflTKbwEfT9qiIg">
            <FontAwesomeIcon icon={["fab", "youtube"]} color="#c4302b" size="2x" />
          </a>
          &nbsp;
          <a href="https://instagram.com/dragon_dominant">
            <FontAwesomeIcon icon={["fab", "instagram"]} color="#bc2a8d" size="2x" />
          </a>
        </ul>

        {/* <Link to={PROJECTS}>
          <button>Check out some of my recent projects</button>
        </Link> */}
      </div>
    );
  }
}

export default AboutPage;

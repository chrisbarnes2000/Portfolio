import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { PROJECTS } from "../../routes";

class AboutPage extends Component {
  render() {
    return (
      <div id="content-wrap" className="AboutPage">
        <h1>About Christopher (Chris) Barnes</h1>
        <p>
          He is the middle of 5 siblings and has traveled to 34 of the 50 states. (Interactive Map Comming Soon)
          <br />
          Around 2008-2010 members of his family started developing symptoms of Dementia or Alzheimers.
          <br />
          In 2014, Disney Released Big Hero 6, in which Baymax: A personal health care companion appeared.
          <br />
          In High School:2015-19, He was dual enrolled at Pierce College:2017-19 in order to obtain his AS-T Degree with
          his Diploma.
          <br />
          His HS competed in
          <a href="https://www.firstinspires.org/robotics/frc">[First Robotics Competitions (FRC)]</a>
          as team
          <a href="https://frc-events.firstinspires.org/team/2927">[2927]</a>.
        </p>

        <ul className="socials">
          <a href="https://www.linkedin.com/in/chrisbarnes2000/">
            <img src="https://i.stack.imgur.com/gVE0j.png" alt="Linkedin" />
          </a>
          {/* Linkedin */}
          <a href="https://github.com/ChrisBarnes7404">
            <img src="https://i.stack.imgur.com/tskMh.png" alt="GitHub" />
          </a>
          {/* GitHub */}
          <a href="https://twitter.com/dragon_dominant">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/chrisb7404">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://youtube.com/channel/UCZ13zqecjflTKbwEfT9qiIg">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com/dragon_dominant">
            <i className="fab fa-instagram"></i>
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

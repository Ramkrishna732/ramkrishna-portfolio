import React from "react";

import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        <span className="info-name green">Hello There 👋, I'm</span> <br />
          <span className="info-name blue">Ramkrishna Maurya.</span><br /> <span className="info-name red">Developer</span><br/><span className="info-name yellow"> I love experimenting with the web.</span>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
      
    </div>
  );
}

export default About;

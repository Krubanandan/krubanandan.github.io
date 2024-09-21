import React from "react";
import "./About.css";
import krubaImg from "../../assets/IMG_3507.png";

const About = () => {
  return (
    <>
      <h1 className="about-kruba">
        <span>About</span> Me
      </h1>
      <div className="about-content">
        <img src={krubaImg} className="about-Img"></img>
        <p className="about-bio">
          <div className="about-para">
            Hi, I'm a Front-end Developer, Graphic Designer, and Motion
            Designer. <br></br>
            Over the past few years, I've been deeply passionate about both
            designing and development.
            <p className="paraTwo">
              I'm skilled in React JS, Adobe Photoshop, Adobe After Effects and
              Figma. <br></br>
              My work always aims to convey meaningful ideas and deliver
              top-notch services.
              <br></br>I'm always excited to push the boundaries of what I can
              create and develop.
            </p>
          </div>

          <div className="about-skills">
            <button className="about-button">Github</button>
            <button className="about-button">LinkedIn</button>
            <button className="about-button">Leetcode</button>
            <button className="about-button">Behance</button>
          </div>
        </p>
      </div>
    </>
  );
};

export default About;

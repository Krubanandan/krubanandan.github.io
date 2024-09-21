import React from "react";
import c from "../../assets/c.png";
import py from "../../assets/python.png";
import java from "../../assets/java.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js1 from "../../assets/js1.png";
import ps from "../../assets/ps.png";
import pr from "../../assets/pr.png";
import ae from "../../assets/ae.png";


import "./Skills.css";

const dev = ["css.png", "html.png", "react.png", "js1.png", "js.png"];

const program = ["python.png", "c.png", "java.png"];

const des = ["fig.png", "ps1.png", "pr.png", "ae.png", "ps.png"];

const Skills = () => {
  return (
    <>
      <h1 className="Tech-head"><span className="spanTech">Technical</span> Skills</h1>
      <div className="skill-set">
        <div className="dev">
          <div className="Heading">PROGRAMMING</div>
          <div className="image-logo">
            <img src={c} className="img-skills" width={"55px"} />
            <img src={py} className="img-skills" width={"55px"}/>
            <img src={java} className="img-skills" width={"55px"}/>
          </div>
        </div>
        <div className="program">
          <div className="Heading">FRONT-END</div>
          <div className="image-logo">
            <img src={html} className="img-skills" width={"65px"} />
            <img src={css} className="img-skills" width={"70px"}/>
            <img src={js1} className="img-skills" width={"65px"}/>
          </div>
        </div>
        <div className="design">
          <div className="Heading">VISUAL DESIGN</div>
          <div className="image-logo">
            <img src={ps} className="img-skills"  width={"55px"}/>
            <img src={pr} className="img-skills" width={"60px"} />
            <img src={ae} className="img-skills" width={"60px"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

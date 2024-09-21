import React from "react";
import c from '../../assets/c.png'
import py from '../../assets/python.png'
import java from '../../assets/java.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js1 from '../../assets/html.png'
import './Skills.css'



const dev = ["css.png", "html.png", "react.png", "js1.png", "js.png"];

const program = ["python.png", "c.png", "java.png"];

const des = ["fig.png", "ps1.png", "pr.png", "ae.png", "ps.png"];

const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <div className="skill-set">
        <div className="dev">
            <img src={c}  className="img-skills" width={'200px'}/>
            <img src={py}  className="img-skills"/>
            <img src={java} className="img-skills" />
        </div>
        <div className="program"></div>
        <div className="design"></div>
      </div>
    </>
  );
};

export default Skills;

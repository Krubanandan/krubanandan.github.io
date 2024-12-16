import React from "react";
import git from "../../assets/git.png";
import link from "../../assets/linked.png";
import be from "../../assets/be.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
        <p>Krubanadan</p>
      </div>
      <div className="links">
        <a href="https://github.com/Krubanandan">
          <img alt="" className="linkKruba" src={git} />
        </a>
        <a href="https://www.linkedin.com/in/krubanandan/">
          <img alt="" className="linkKruba2" src={link} />
        </a>
        <a href="">
          <img alt="" className="linkKruba3" src={be} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

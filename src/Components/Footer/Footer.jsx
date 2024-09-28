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
        <img alt="" className="linkKruba" src={git}/>
        <img alt="" className="linkKruba2" src={link} />
        <img alt="" className="linkKruba3" src={be}/>
      </div>
    </div>
  );
};

export default Footer;

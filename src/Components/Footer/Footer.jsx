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
        <img alt="" className="linkKruba" src={git} width={"50px"}/>
        <img alt="" className="linkKruba" src={link} width={"45px"} />
        <img alt="" className="linkKruba" src={be} width={"50px"}/>
      </div>
    </div>
  );
};

export default Footer;

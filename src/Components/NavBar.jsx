import React, { useRef, useState } from "react";
import "../Styles/NavBar.css";
import menuClose from "../assets/menu_close.svg";
import menuOpen from "../assets/menu_open.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';


export const NavBar = () => {

  const [active,setActive]=useState("Home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-500px";
  };

  return (
    <div className="nav-bar">
      <div className="nav-name">Krubanandan</div>
      <img src={menuOpen} onClick={openMenu} alt="" className="nav-open" />
      <ul ref={menuRef} className="nav-elements">
        <img src={menuClose} onClick={closeMenu} alt="" className="nav-close" />
        <li className={active==="Home"?"active":""} onClick={()=>setActive("Home")}><AnchorLink className="anchor-link" offset={50} href="#home">Home</AnchorLink></li>
        <li className={active==="About"?"active":""} onClick={()=>setActive("About")}><AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink></li>
        <li className={active==="Skill"?"active":""} onClick={()=>setActive("Skill")}><AnchorLink className="anchor-link" offset={50} href="#skills">Skills</AnchorLink></li>
        <li className={active==="Service"?"active":""} onClick={()=>setActive("Service")}><AnchorLink className="anchor-link" offset={50} href="#service">Services</AnchorLink></li>
        <li className={active==="Work"?"active":""} onClick={()=>setActive("Work")}><AnchorLink className="anchor-link" offset={50} href="#work">Works</AnchorLink></li>
        <li className={active==="Contact"?"active":""} onClick={()=>setActive("Contact")}><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></li>
      </ul>
      <a href="https://drive.google.com/file/d/1RS33OrlIFAdmrpljtd6aG9KkkJfKY2EB/view?usp=sharing" className="resume-link">
        <div className="nav-resume">My Resume</div>
      </a>
    </div>
  );
};

export default NavBar;

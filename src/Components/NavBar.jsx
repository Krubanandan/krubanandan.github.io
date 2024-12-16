import React, { useRef } from "react";
import "../Styles/NavBar.css";
import menuClose from "../assets/menu_close.svg";
import menuOpen from "../assets/menu_open.svg";

export const NavBar = () => {
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
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
      <a href="https://drive.google.com/file/d/1mb8hIqAcK-xMVRf-_PqRSHR2fnI6D_AR/view?usp=sharing" className="resume-link">
        <div className="nav-resume">My Resume</div>
      </a>
    </div>
  );
};

export default NavBar;

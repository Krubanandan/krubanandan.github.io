import React, { useRef } from 'react';
import '../Styles/NavBar.css';
import menuClose from '../assets/menu_close.svg'
import menuOpen from '../assets/menu_open.svg'

export const NavBar = () => {
  const menuRef=useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-500px";
  }

  return (
    <div className='nav-bar'>
        <div className='nav-name'>Krubanandan</div>
        <img src={menuOpen} onClick={openMenu} alt="" className='nav-open'/>
        <ul ref={menuRef} className='nav-elememts'>
            <img src={menuClose} onClick={closeMenu} alt="" className='nav-close'/>
            <li>Home</li> 
            <li>About Me</li>
            <li>Skills</li>
            <li>Works</li>
            <li>Contact</li>
        </ul>
        <div className='nav-resume'>My Resume</div>
    </div>
  )
}

export default NavBar
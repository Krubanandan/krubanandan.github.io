import React from 'react';
import '../Styles/NavBar.css';

export const NavBar = () => {
  return (
    <div className='nav-bar'>
        <div className='nav-name'>Krubanandan</div>
        <ul className='nav-elememts'>
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
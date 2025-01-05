import React from 'react'
import '../Hero/Hero.css'
import MyImage from '../../assets/fotor-20240919232643.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='Hero'>
        <img src={MyImage} className='img-logo'></img>
        <h1 className='Hero-name'>I'm <span className='Kruba-Name'>Krubanandan</span>, Front-end Developer</h1>
        <p>I am a creative thinker, designer and developer</p>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><button>Connect With Me</button></AnchorLink>

    </div>
  )
}

export default Hero
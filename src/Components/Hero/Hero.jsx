import React from 'react'
import '../Hero/Hero.css'
import MyImage from '../../assets/fotor-20240919232643.png'

const Hero = () => {
  return (
    <div className='Hero'>
        <img src={MyImage} className='img-logo'></img>
        <h1 className='Hero-name'>I'm <span className='Kruba-Name'>Krubanandan</span>, Front-end Developer</h1>
        <p>I am a creative thinker, designer and developer</p>
        <button>Connect With Me</button>

    </div>
  )
}

export default Hero
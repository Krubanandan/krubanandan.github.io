import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Skills />
      <Services/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

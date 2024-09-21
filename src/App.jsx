import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Skills />
    </>
  )
}

export default App

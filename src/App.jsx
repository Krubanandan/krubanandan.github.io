import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
    </>
  )
}

export default App

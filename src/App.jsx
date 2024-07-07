import { useState } from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {

  return (

    <>
      <Navbar />
      <Intro />
      <About />
      <Stack />
      <Projects />
      <Footer/>
    </>
  )
}

export default App

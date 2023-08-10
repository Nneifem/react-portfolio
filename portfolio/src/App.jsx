import { useState } from 'react'
import './App.css'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  return (
    <>
      <About />
      <Resume />
      <Contact />
      <Project />
      <Footer />
    </>
  )
}

export default App

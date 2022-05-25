import React from 'react'

import Navbar from './components/Navbar/Navbar'
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Skills from "./components/Skills/Skills";
import Projects from './container/Projects/Projects';
import './App.css'


const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </div>
  )
}

export default App
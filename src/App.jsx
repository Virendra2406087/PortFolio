import React,{ useState } from 'react'
import './App.css'
import About from './components/Section/About';
import Home from './components/Section/Home';
import Education from './components/Section/Education';
import Skills from './components/Section/Skills';
import Projects from './components/Section/Projects';
import Leetcode from './components/Section/Leetcode';
import Connect from './components/Section/Connect';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Leetcode/>
      <Connect/>
      <Footer/>
    </>
  )
}

export default App

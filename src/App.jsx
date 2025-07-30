import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Studies from './components/Studies';
import Contact from './components/Contact';
import './App.css'

function App() {

  return (
    <>
    <title>Home</title>
    <BrowserRouter>
    <div className='App'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/mystudies" element={<Studies />} />
          <Route path="/myprojects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
    
  )
}

export default App;

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Studies from './components/Studies';
import CV from './components/CV'; // Assuming CV is the component for the CV section
import './App.css'

function App() {

  return (
    <>
    <title>Home</title>
    <BrowserRouter basename='/Portfolio'>
    <div className='App'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/mystudies" element={<Studies />} />
          <Route path="/myprojects" element={<Projects />} />
          <Route path="/CV" element={<CV />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
    
  )
}

export default App;

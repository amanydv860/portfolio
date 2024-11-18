import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import TechTool from './components/TechTool';


export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Scrollable Sections */}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home" className="section min-h-screen flex items-center justify-center bg-Fgrey">
                  <Home />
                </div>
                <div id="about" className="section min-h-screen flex items-center justify-center bg-Fwhite">
                  <About />
                </div>
                <div  className="section min-h-screen flex items-center justify-center bg-Fgrey">
                  <TechTool />
                </div>
                <div id="projects" className="section min-h-screen flex items-center justify-center bg-Fwhite">
                  <Project />
                </div>
                <div id="sociallink" className="section min-h-screen flex items-center justify-center bg-Fgrey">
                  <SocialLinks/>
                </div>
                <div id="contact" className="section min-h-screen flex items-center justify-center bg-Fwhite">
                  <Contact />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

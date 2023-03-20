import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
// import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills'
import "./css/style.css"
// import Project from './components/pages/project';

function App() {
  return (
    <Router>
        <NavTabs />
        <Routes>
      {/* <Route path="/" element={<Home />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/projectGallery" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />}/>
        </Routes>
    </Router>
  );
}

export default App;


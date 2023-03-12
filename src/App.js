import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills'
import "./css/style.css"
// import Project from './components/pages/project';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projectGallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
          <Route path="skills" element={<Skills />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <div className='d-flex justify-content-center navvv navStick'>
    <nav className="navbar navbar-expand-lg  bg-light " style={{height: '80px'}}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item m-4">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item m-4">
            <NavLink
              to="projectGallery"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Project
            </NavLink>
          </li>
          <li className="nav-item m-4">
            <NavLink
              to="contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item m-4">
            <NavLink
              to="skills"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>

    
  );
}

export default NavTabs;

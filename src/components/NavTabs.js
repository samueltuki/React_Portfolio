import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (

    <div className='navvv'>

<ul className="nav p-9 navbar-nav navbar  navbar-toggler bg-light navstick ">
        <li className="nav-item m-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>

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
  );
}

export default NavTabs;

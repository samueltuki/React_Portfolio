import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  const mobileToggleRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Added an event listener to the window to check if the screen is small or not
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    // Simulate a click on the mobile toggle button to hide the menu
    mobileToggleRef.current.click();
  };

  return (
    <div className="d-flex justify-content-between navvv navStick nav-bar ">
      <nav
        className="navbar navbar-expand-md nav-fill fixed-top"
        style={{ height: "35px" }}
      >
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-aria-expanded="false"
          ref={mobileToggleRef} // Add a ref to the mobile toggle button
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* navbar links */}
        <div className="collapse navbar-collapse navBg" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item mt-4">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={isSmallScreen ? handleNavLinkClick : undefined} // Add onClick event listener only if the screen is small
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mt-4">
              <NavLink
                to="projectGallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={isSmallScreen ? handleNavLinkClick : undefined} // Add onClick event listener only if the screen is small
              >
                Project
              </NavLink>
            </li>
            <li className="nav-item mt-4">
              <NavLink
                to="contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={isSmallScreen ? handleNavLinkClick : undefined} // Add onClick event listener only if the screen is small
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item  mt-4">
              <NavLink
                to="skills"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={isSmallScreen ? handleNavLinkClick : undefined} // Add onClick event listener only if the screen is small
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

// import React from "react";
// import { NavLink } from "react-router-dom";

// function NavTabs() {
//   return (
//     <div className="d-flex justify-content-between navvv navStick nav-bar ">
//       <nav
//         className="navbar navbar-expand-md nav-fill fixed-top"
//         style={{ height: "35px" }}
//       >
//         <button
//           className="navbar-toggler collapsed"
//           type="button"
//           data-toggle="collapse"
//           data-target="#collapsibleNavbar"
//           aria-aria-expanded="false"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {/* navbar links */}
//         <div className="collapse navbar-collapse navBg" id="collapsibleNavbar">
//           <ul className="navbar-nav">
//             <li className="nav-item mt-4">
//               <NavLink
//                 to="about"
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item mt-4">
//               <NavLink
//                 to="projectGallery"
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Project
//               </NavLink>
//             </li>
//             <li className="nav-item mt-4">
//               <NavLink
//                 to="contact"
//                 end
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li className="nav-item  mt-4">
//               <NavLink
//                 to="skills"
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Skills
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavTabs;

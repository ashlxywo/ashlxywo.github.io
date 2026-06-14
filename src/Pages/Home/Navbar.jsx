import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const PROJECT_LIST = [
  { id: "project-airpressure", label: "Air Pressure Monitor" },
  { id: "project-microcontroller", label: "Microcontroller Car" },
  { id: "project-dormlight", label: "DormLight" },
  { id: "project-drawingbot", label: "ROS2 Drawing Robot" },
];

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => {
    setNavActive(false);
    setProjectsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) closeMenu();
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="boba">
        <img src="./images/boba.png" alt="boba" />
      </div>

      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link onClick={closeMenu} activeClass="navbar-active" spy={true} smooth={true} offset={-70} duration={500} to="homePage" className="navbarcontent">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navbar-active" spy={true} smooth={true} offset={-70} duration={500} to="aboutMe" className="navbarcontent">
              About Me
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navbar-active" spy={true} smooth={true} offset={-70} duration={500} to="timeline" className="navbarcontent">
              Experiences
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navbar-active" spy={true} smooth={true} offset={-70} duration={500} to="clubs" className="navbarcontent">
              Clubs
            </Link>
          </li>

          {/* Projects dropdown */}
          <li className="dropdown-wrapper" ref={dropdownRef}>
            <button
              className="navbarcontent dropdown-trigger"
              onClick={() => setProjectsOpen((prev) => !prev)}
              aria-expanded={projectsOpen}
              aria-haspopup="true"
            >
              Projects
              <span className={`dropdown-arrow ${projectsOpen ? "open" : ""}`}>⏷</span>
            </button>

            {projectsOpen && (
              <ul className="dropdown-menu">
                {/* "All Projects" scrolls to the main projects section */}
                <li>
                  <Link
                    onClick={() => { setProjectsOpen(false); closeMenu(); }}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="projects"
                    className="dropdown-item"
                  >
                    All Projects
                  </Link>
                </li>
                {PROJECT_LIST.map((project) => (
                  <li key={project.id}>
                    <Link
                      onClick={() => { setProjectsOpen(false); closeMenu(); }}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to={project.id}
                      className="dropdown-item"
                    >
                      {project.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <style>{`
        .dropdown-wrapper {
          position: relative;
        }
      .dropdown-trigger {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0;
        font: inherit;
        color: inherit;
        vertical-align: middle; 
        line-height: normal;     
      }

        .dropdown-arrow {
          display: inline-block;
          font-size: 1.4em;
          transition: transform 0.2s ease;
          line-height: 1;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          min-width: 160px;
          padding: 6px 0;
          list-style: none;
          z-index: 999;
          animation: fadeDown 0.15s ease;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-item {
          display: block;
          padding: 9px 18px;
          cursor: pointer;
          white-space: nowrap;
          font-size: 0.9rem;
          transition: background 0.15s;
        }

        .dropdown-item:hover {
          background: #f5f5f5;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="boba">
        <img src="./images/boba.png" alt="boba" />
      </div>

      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="homePage"
              className="navbarcontent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu} activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutMe"
              className="navbarcontent"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="timeline"
              className="navbarcontent"
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="clubs"
              className="navbarcontent"
            >
              Clubs
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects"
              className="navbarcontent"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

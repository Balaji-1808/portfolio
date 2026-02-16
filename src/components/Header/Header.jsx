import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          <span>Dev</span>eloper
        </h1>
      </div>
      <div className="header__right">
        <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
          <h4>About me</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMobileMenu}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>
          <h4>Projects</h4>
        </Link>
        <Link to="experience" smooth={true} duration={500} onClick={closeMobileMenu}>
          <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
          <h4>Contact</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4 className="header__rightButton">
            Join with me
          </h4>
        </Link>
      </div>
      <div className="navbar-menu-toggle" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
            <h4>About me</h4>
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={closeMobileMenu}>
            <h4>Skills</h4>
          </Link>
          <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>
            <h4>Projects</h4>
          </Link>
          <Link to="experience" smooth={true} duration={500} onClick={closeMobileMenu}>
            <h4>Experience</h4>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
            <h4>Contact</h4>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
            <h4 className="mobile-menu__joinButton">
              Join with me
            </h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

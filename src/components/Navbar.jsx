import { useState } from "react";
import MobileMenu from "./MobileMenu";
import "../styles/navigation.css";
import logo from "../assets/images/thazhal-innovations-logo1.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a
            className="navbar-logo"
            href="#home"
            aria-label="Thazhal Innovations home"
          >
            <img
              src={logo}
              alt="Thazhal Innovations"
            />
          </a>

          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#intro">Who We Are</a>
            <a href="#work">Work</a>
            <a href="#services">What We Do</a>
            <a href="#process">How We Work</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          
          </div>

          <div className="navbar-actions">
            <a className="navbar-cta" href="#contact">
              <span>Start a Project</span>
              <span className="navbar-cta-arrow">↗</span>
            </a>

            <button
              className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default Navbar;
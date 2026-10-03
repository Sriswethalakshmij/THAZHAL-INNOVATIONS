function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
      <button
        className="mobile-menu-close"
        type="button"
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>

      <nav className="mobile-menu-links" aria-label="Mobile navigation">
        <a href="#work" onClick={onClose}>
          Work
        </a>

        <a href="#services" onClick={onClose}>
          What We Do
        </a>

        <a href="#process" onClick={onClose}>
          How We Work
        </a>

        <a href="#about" onClick={onClose}>
          About
        </a>

        <a href="#contact" onClick={onClose}>
          Start a Project ↗
        </a>
      </nav>
    </div>
  );
}

export default MobileMenu;
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
        <a href="#home" onClick={onClose}>
          Home
        </a>

        <a href="#intro" onClick={onClose}>
          Who We Are
        </a>

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

        <a href="#pricing" onClick={onClose}>
          Pricing
        </a>

        <a href="#faq" onClick={onClose}>
          FAQ
        </a>

        <a href="#contact" onClick={onClose}>
          Contact
        </a>

        <a href="#contact" onClick={onClose}>
          Start a Project ↗
        </a>
      </nav>
    </div>
  );
}

export default MobileMenu;
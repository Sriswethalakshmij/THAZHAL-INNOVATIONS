import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/footer.css";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-cta-content > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 80%",
        },
      });

      gsap.from(".footer-column", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-main",
          start: "top 85%",
        },
      });

      gsap.to(".footer-orbit-symbol", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-section"
      id="footer"
    >

      {/* ==========================================
          FINAL CTA
      ========================================== */}


      {/* ==========================================
          FOOTER MAIN
      ========================================== */}

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand footer-column">

          <div className="footer-brand-mark">

            <div className="footer-orbit-symbol">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          <div className="footer-brand-name">
            <span>THAZHAL</span>
            <strong>.innovations</strong>
          </div>

          <p className="footer-brand-description">
            Digital experiences built with intention,
            creativity and purpose.
          </p>

        </div>


        {/* EXPLORE */}

       <div className="footer-column">
        <h3 className="footer-column-title">
          EXPLORE
        </h3>

          <nav
            className="footer-links"
            aria-label="Footer navigation"
          >

            <a href="#home">Home</a>

            <a href="#intro">Who We Are</a>

            <a href="#work">Work</a>

            <a href="#services">What We Do</a>

            <a href="#process">How We Work</a>

            <a href="#about">About</a>

            <a href="#pricing">Pricing</a>

            <a href="#faq">FAQ</a>

            <a href="#contact">Contact</a>

          </nav>

        </div>


        {/* SERVICES */}

        <div className="footer-column">
          <h3 className="footer-column-title">
            SERVICES
          </h3>

          <nav className="footer-links">

            <a href="#services">
              Web Development
            </a>

            <a href="#services">
              App Development
            </a>

            <a href="#services">
              UI / UX Design
            </a>

            <a href="#services">
              Web &amp; App Redesign
            </a>

            <a href="#services">
              Resume Design
            </a>

            <a href="#services">
              Portfolio Development
            </a>

            <a href="#services">
              Exam Notes &amp; Study Materials
            </a>

          </nav>

        </div>


        {/* CONTACT */}

       <div className="footer-column">
          <h3 className="footer-column-title">
            CONTACT
          </h3>

          <div className="footer-contact">

            <a href="tel:+917603996031">
              <span>PHONE</span>
              <strong>+91 76039 96031</strong>
            </a>

            <a href="tel:+917695949669">
              <span>PHONE</span>
              <strong>+91 76959 49669</strong>
            </a>

            <a href="mailto:thazhalinnovations@gmail.com">
              <span>EMAIL</span>
              <strong>
                thazhalinnovations@gmail.com
              </strong>
            </a>

          </div>

        </div>

      </div>


      {/* ==========================================
          SOCIAL MEDIA
      ========================================== */}

      <div className="footer-social-section">

        <div className="footer-social-heading">
          <span>CONNECT</span>
          <span className="footer-social-line"></span>
        </div>

        <div className="footer-socials">

          {/* INSTAGRAM */}

          <a
            href="#"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
              />
            </svg>

            <span>Instagram</span>

            <span>↗</span>
          </a>


          {/* LINKEDIN */}

          <a
            href="#"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M8 10v6"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="8"
                cy="7.5"
                r="1"
                fill="currentColor"
              />
              <path
                d="M12 16v-3.2c0-1.5.8-2.5 2.1-2.5s1.9.9 1.9 2.5V16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M12 10v6"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>

            <span>LinkedIn</span>

            <span>↗</span>
          </a>


          {/* GITHUB */}

          <a
            href="#"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 3.5a8.5 8.5 0 0 0-2.7 16.56c.43.08.59-.19.59-.42v-1.48c-2.4.52-2.9-1.02-2.9-1.02-.39-.99-.95-1.25-.95-1.25-.78-.54.06-.53.06-.53.86.06 1.31.88 1.31.88.77 1.31 2.02.93 2.51.71.08-.56.3-.93.55-1.14-1.92-.22-3.94-.96-3.94-4.27 0-.94.34-1.71.89-2.31-.09-.22-.39-1.09.08-2.28 0 0 .72-.23 2.35.88A8.2 8.2 0 0 1 12 7.55c.73 0 1.47.1 2.15.29 1.63-1.11 2.35-.88 2.35-.88.47 1.19.17 2.06.08 2.28.55.6.89 1.37.89 2.31 0 3.32-2.02 4.05-3.95 4.27.31.27.59.8.59 1.61v2.39c0 .23.16.5.6.42A8.5 8.5 0 0 0 12 3.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>

            <span>GitHub</span>

            <span>↗</span>
          </a>


          {/* FACEBOOK */}

          <a
            href="#"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M13 18v-5h1.8l.3-2H13V9.8c0-.58.2-.98 1.05-.98h1.12V7.05c-.2-.03-.88-.08-1.67-.08-1.65 0-2.78 1-2.78 2.84V11H9v2h1.72v5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>

            <span>Facebook</span>

            <span>↗</span>
          </a>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/917603996031"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M20 11.7a8 8 0 0 1-11.8 7.05L4 20l1.28-4.05A8 8 0 1 1 20 11.7Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M9 8.5c.2-.3.4-.3.7-.3h.5c.2 0 .4.1.5.4l.7 1.5c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.5.7c.2.1.4.3.4.5v.5c0 .3-.1.5-.3.7-.3.3-.8.4-1.2.3-1-.2-2.3-1-3.5-2.1-1.1-1.1-1.9-2.4-2.1-3.5-.1-.4 0-.9.3-1.2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>

            <span>WhatsApp</span>

            <span>↗</span>
          </a>

        </div>

      </div>


      {/* ==========================================
          BOTTOM BAR
      ========================================== */}

      <div className="footer-bottom">

        <span>
          © 2026 THAZHAL.innovations
        </span>

        <span>
          ALL RIGHTS RESERVED
        </span>

        <a href="#home">
          BACK TO TOP ↑
        </a>

        <span className="footer-built">
          BUILT WITH INTENTION.
        </span>

      </div>

    </footer>
  );
}

export default Footer;
import React, { useEffect, useRef } from "react";
import "../styles/about.css";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* ==========================================
          ABOUT INTRO
      ========================================== */}

      <div className="about-top about-reveal">
        <div className="about-label">
          <span className="about-label-number">05</span>
          <span className="about-label-line"></span>
          <span>ABOUT US</span>
        </div>

        <span className="about-top-meta">
          THAZHAL.INNOVATIONS
        </span>
      </div>

      {/* ==========================================
          MAIN ABOUT CONTENT
      ========================================== */}

      <div className="about-main">
        <div className="about-heading-wrap about-reveal">
          <h2 className="about-heading">
            We create
            <br />
            <span className="about-heading-accent">
              digital
            </span>{" "}
            experiences
            <br />
            that matter.
          </h2>
        </div>

        {/* ======================================
            ANIMATED VISUAL
        ====================================== */}

        <div className="about-visual about-reveal">
          <div className="about-orbit">
            <span className="about-orbit-ring about-ring-one"></span>
            <span className="about-orbit-ring about-ring-two"></span>
            <span className="about-orbit-ring about-ring-three"></span>

            <span className="about-orbit-dot about-dot-one"></span>
            <span className="about-orbit-dot about-dot-two"></span>

            <div className="about-orbit-center">
              <span>THAZHAL</span>
              <strong>INNOVATIONS</strong>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          DESCRIPTION
      ========================================== */}

      <div className="about-description-row">
        <div className="about-description about-reveal">
          <p>
            Thazhal Innovations is a digital innovation studio
            focused on creating thoughtful websites, digital
            products and experiences for ambitious businesses.
          </p>
        </div>

        <div className="about-description-secondary about-reveal">
          <p>
            We combine design, technology and practical thinking
            to turn ideas into useful digital solutions.
          </p>
        </div>
      </div>

      {/* ==========================================
          WHAT WE BRING
      ========================================== */}

      <div className="about-capabilities about-reveal">
        <div className="about-capabilities-heading">
          <h3>WHAT WE BRING</h3>
          <span>04 / ABOUT</span>
        </div>

        <div className="about-capability-list">
          <div className="about-capability">
            <span className="capability-number">01</span>
            <span className="capability-name">
              Web Development
            </span>
            <span className="capability-arrow">↗</span>
          </div>

          <div className="about-capability">
            <span className="capability-number">02</span>
            <span className="capability-name">
              App Development
            </span>
            <span className="capability-arrow">↗</span>
          </div>

          <div className="about-capability">
            <span className="capability-number">03</span>
            <span className="capability-name">
              UI / UX Design
            </span>
            <span className="capability-arrow">↗</span>
          </div>

          <div className="about-capability">
            <span className="capability-number">04</span>
            <span className="capability-name">
              Web & App Redesign
            </span>
            <span className="capability-arrow">↗</span>
          </div>

          <div className="about-capability">
            <span className="capability-number">05</span>
            <span className="capability-name">
              Resume & Portfolio
            </span>
            <span className="capability-arrow">↗</span>
          </div>

          <div className="about-capability">
            <span className="capability-number">06</span>
            <span className="capability-name">
              Exam Notes & Study Materials
            </span>
            <span className="capability-arrow">↗</span>
          </div>
        </div>
      </div>

      {/* ==========================================
          BOTTOM STATEMENT
      ========================================== */}

      <div className="about-bottom about-reveal">
        <div className="about-bottom-line"></div>

        <div className="about-bottom-content">
          <span>THAZHAL / 04</span>

          <p>
            From a first idea to a finished experience,
            <span> we build with purpose.</span>
          </p>

          <span>EST. / DIGITAL STUDIO</span>
        </div>
      </div>
    </section>
  );
}

export default About;
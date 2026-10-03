import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import "../styles/hero.css";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-title-line",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".hero-orb",
          {
            scale: 0.7,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.9"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero section"
      id="home"
    >
      <div className="hero-grid container">

        {/* ==========================================
            HERO CONTENT
        ========================================== */}

        <div className="hero-content">

          <p className="hero-eyebrow eyebrow">
            Digital Innovation Studio
          </p>

          <h1 className="hero-title">

            <span className="hero-title-line">
              Ideas
            </span>

            <span className="hero-title-line">
              deserve to become
            </span>

            <span className="hero-title-line hero-title-accent">
              real.
            </span>

          </h1>

          <p className="hero-description">
            We design and build thoughtful digital experiences,
            websites, and products that turn ambitious ideas into
            something real.
          </p>

          <div className="hero-actions">

            <a
              className="hero-primary-button"
              href="#contact"
            >
              <span>Start a Project</span>
              <span>↗</span>
            </a>

            <a
              className="hero-secondary-button"
              href="#work"
            >
              See Our Work
            </a>

          </div>

        </div>


        {/* ==========================================
            HERO VISUAL
        ========================================== */}

        <div
          className="hero-visual"
          aria-hidden="true"
        >

          <div className="hero-orb">
            <div className="hero-orb-inner" />
          </div>

          <div className="hero-visual-label">

            <span>THAZHAL</span>

            <span>
              01 / INTRO
            </span>

          </div>

        </div>

      </div>


      {/* ==========================================
          SCROLL TO WHO WE ARE
      ========================================== */}

      <a
        className="hero-scroll"
        href="#about-intro"
      >
        <span>Scroll to explore</span>

        <span className="hero-scroll-line" />
      </a>

    </section>
  );
}

export default Hero;
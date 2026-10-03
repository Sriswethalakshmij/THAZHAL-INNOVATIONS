import React, { useEffect, useRef } from "react";
import "../styles/services.css";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "WEB DEVELOPMENT",
    highlight: "Websites",
    description:
      "Modern, responsive and business-focused websites built to turn ideas into useful digital experiences.",
    tags: ["Landing Pages", "Business Websites", "Web Applications"],
  },
  {
    number: "02",
    icon: "◉",
    title: "APP DEVELOPMENT",
    highlight: "Applications",
    description:
      "Functional mobile and digital applications designed around real business requirements and user needs.",
    tags: ["Mobile Apps", "Business Apps", "Custom Solutions"],
  },
  {
    number: "03",
    icon: "↗",
    title: "WEB & APP REDESIGN",
    highlight: "Redesign",
    description:
      "We redesign outdated digital products with cleaner interfaces, better usability and modern experiences.",
    tags: ["UI Improvement", "Modernization", "UX Upgrade"],
  },
  {
    number: "04",
    icon: "✦",
    title: "UI / UX DESIGN",
    highlight: "Interfaces",
    description:
      "Thoughtful interfaces and user experiences that make websites and applications simple, clear and engaging.",
    tags: ["Wireframes", "UI Design", "User Experience"],
  },
  {
    number: "05",
    icon: "▤",
    title: "RESUME DESIGN",
    highlight: "Resumes",
    description:
      "Professional, ATS-friendly resumes designed to present skills, experience and projects with clarity.",
    tags: ["ATS Resume", "Career Profile", "Professional CV"],
  },
  {
    number: "06",
    icon: "◎",
    title: "PORTFOLIO DEVELOPMENT",
    highlight: "Portfolios",
    description:
      "Personal portfolios that showcase projects, skills and achievements through a strong digital presence.",
    tags: ["Student Portfolio", "Developer Portfolio", "Personal Brand"],
  },
  {
    number: "07",
    icon: "✎",
    title: "EXAM NOTES & STUDY MATERIALS",
    highlight: "Study Notes",
    description:
      "Well-structured examination notes and study materials prepared for competitive and academic examinations.",
    tags: ["Arrear Exams", "Exam Notes", "Study Materials"],
  },
];

function Services() {
  const trackRef = useRef(null);
  const autoScrollRef = useRef(null);
  const isHoveringRef = useRef(false);

  /*
    --------------------------------------------------
    AUTO SCROLL
    --------------------------------------------------
    Moves the cards gently from right to left.
  */
useEffect(() => {
  const track = trackRef.current;

  if (!track) return;

  let animationFrame;

  const move = () => {
    if (
      !isHoveringRef.current &&
      track.scrollWidth > track.clientWidth
    ) {
      track.scrollLeft += 0.45;

      // Because the services are duplicated,
      // reset exactly after the first complete set.
      const singleSetWidth = track.scrollWidth / 2;

      if (track.scrollLeft >= singleSetWidth) {
        track.scrollLeft -= singleSetWidth;
      }
    }

    animationFrame = requestAnimationFrame(move);
  };

  animationFrame = requestAnimationFrame(move);

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}, []);

  /*
    --------------------------------------------------
    MANUAL ARROW SCROLL
    --------------------------------------------------
  */
  const scrollCards = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    const amount = Math.min(track.clientWidth * 0.72, 520);

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  /*
    --------------------------------------------------
    MOUSE WHEEL
    --------------------------------------------------
    Converts small horizontal wheel movements into
    horizontal movement without locking the page.
  */
  const handleWheel = (event) => {
  const track = trackRef.current;

  if (!track) return;

  const hasHorizontalOverflow =
    track.scrollWidth > track.clientWidth;

  if (!hasHorizontalOverflow) return;

  // Convert mouse-wheel movement into gentle
  // horizontal carousel movement.
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    track.scrollLeft += event.deltaY * 0.5;

    // Keep the duplicated carousel seamless.
    const singleSetWidth = track.scrollWidth / 2;

    if (track.scrollLeft >= singleSetWidth) {
      track.scrollLeft -= singleSetWidth;
    }

    if (track.scrollLeft < 0) {
      track.scrollLeft += singleSetWidth;
    }
  }
};

  return (
    <section className="services-section" id="services">

      {/* ==========================================
          SECTION HEADER
      ========================================== */}

      <div className="services-header">

        <div className="services-header-left">

          <div className="services-label">
            <span className="services-label-number">03</span>
            <span className="services-label-line"></span>
            <span>WHAT WE DO</span>
          </div>

          <h2 className="services-heading">
            We build
            <br />
            <span className="services-heading-accent">
              what moves
            </span>
            <br />
            ideas forward.
          </h2>

        </div>

        <div className="services-header-right">

          <div className="services-orbit-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>
            From websites and applications to thoughtful
            interfaces, resumes, portfolios and examination
            study materials, we create useful digital
            solutions around real needs.
          </p>

          <div className="services-header-meta">
            <span>THAZHAL.INNOVATIONS</span>
            <span>03 / SERVICES</span>
          </div>

        </div>

      </div>


      {/* ==========================================
          SERVICES CAROUSEL
      ========================================== */}

      <div
        className="services-carousel-area"
        onMouseEnter={() => {
          isHoveringRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveringRef.current = false;
        }}
      >

        <div className="services-carousel-top">

          <span className="services-carousel-title">
            SERVICES / 07
          </span>

          <div className="services-controls">

            <button
              type="button"
              className="services-arrow"
              onClick={() => scrollCards("prev")}
              aria-label="Previous service"
            >
              ←
            </button>

            <button
              type="button"
              className="services-arrow"
              onClick={() => scrollCards("next")}
              aria-label="Next service"
            >
              →
            </button>

          </div>

        </div>


        <div
          className="services-track"
          ref={trackRef}
          onWheel={handleWheel}
        >

          {[...services, ...services].map((service, index) => (
            <article
              className="service-card"
              key={`${service.number}-${index}`}
            >

              <div className="service-card-top">

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-icon">
                  {service.icon}
                </span>

              </div>


              <div className="service-card-content">

                <h3>
                  {service.title}
                </h3>

                <p className="service-highlight">
                  {service.highlight}
                </p>

                <p className="service-description">
                  {service.description}
                </p>

              </div>


              <div className="service-tags">

                {service.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>


              <div className="service-card-footer">

                <span>
                  THAZHAL / {service.number}
                </span>

                <span className="service-card-arrow">
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>


        <div className="services-scroll-indicator">

          <span className="services-scroll-text">
            SCROLL TO EXPLORE
          </span>

          <span className="services-scroll-line">
            <span></span>
          </span>

          <span className="services-scroll-arrow">
            →
          </span>

        </div>

      </div>

    </section>
  );
}

export default Services;
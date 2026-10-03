import React, { useEffect, useRef, useState } from "react";
import "../styles/process.css";

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    accent: "Understand",
    description:
      "We start by understanding your idea, goals, audience, requirements and the problem your digital solution needs to solve.",
    tags: ["Research", "Requirements", "Goals"],
    symbol: "✦",
  },
  {
    number: "02",
    title: "PLAN",
    accent: "Structure",
    description:
      "We turn the idea into a clear project direction by planning the features, content, technology and overall user journey.",
    tags: ["Strategy", "Structure", "Technology"],
    symbol: "⌁",
  },
  {
    number: "03",
    title: "DESIGN",
    accent: "Visualize",
    description:
      "We create thoughtful interfaces and experiences that balance visual identity, usability and the needs of your users.",
    tags: ["UI Design", "UX Flow", "Prototype"],
    symbol: "◌",
  },
  {
    number: "04",
    title: "DEVELOP",
    accent: "Build",
    description:
      "We transform the approved design into a responsive, functional and reliable digital product using the right technologies.",
    tags: ["Frontend", "Backend", "Integration"],
    symbol: "⌘",
  },
  {
    number: "05",
    title: "TEST",
    accent: "Refine",
    description:
      "We test the experience across devices and interactions, identify issues and refine the product before launch.",
    tags: ["Testing", "Performance", "Refinement"],
    symbol: "◎",
  },
  {
    number: "06",
    title: "LAUNCH",
    accent: "Deliver",
    description:
      "We prepare the final product for launch and continue supporting improvements as your digital presence grows.",
    tags: ["Launch", "Support", "Growth"],
    symbol: "↗",
  },
];

function Process() {
  const trackRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  /* ------------------------------------------
     ACTIVE STEP WHILE SCROLLING
  ------------------------------------------ */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll(".process-card")
    );

    const updateActiveStep = () => {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    };

    track.addEventListener("scroll", updateActiveStep, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveStep);

    updateActiveStep();

    return () => {
      track.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  /* ------------------------------------------
     ARROW NAVIGATION
  ------------------------------------------ */
  const moveProcess = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    const card = track.querySelector(".process-card");

    if (!card) return;

    const gap = 24;
    const amount = card.offsetWidth + gap;

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  /* ------------------------------------------
     CLICK TIMELINE STEP
  ------------------------------------------ */
  const goToStep = (index) => {
    const track = trackRef.current;

    if (!track) return;

    const cards = track.querySelectorAll(".process-card");
    const target = cards[index];

    if (!target) return;

    setActiveStep(index);

    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section className="process-section" id="process">

      {/* ==========================================
          SECTION HEADER
      ========================================== */}

      <div className="process-header">

        <div className="process-header-left">

          <div className="process-label">
            <span className="process-label-number">04</span>
            <span className="process-label-line"></span>
            <span>HOW WE WORK</span>
          </div>

          <h2 className="process-heading">
            From idea
            <br />
            <span>to reality.</span>
          </h2>

        </div>

        <div className="process-header-right">

          <div className="process-orbit">

            <div className="process-orbit-ring"></div>

            <div className="process-orbit-dot process-dot-one"></div>
            <div className="process-orbit-dot process-dot-two"></div>
            <div className="process-orbit-dot process-dot-three"></div>

            <span>THAZHAL</span>

          </div>

          <p>
            A thoughtful process keeps every project focused,
            purposeful and moving in the right direction.
          </p>

          <div className="process-meta">
            <span>THAZHAL.INNOVATIONS</span>
            <span>04 / PROCESS</span>
          </div>

        </div>

      </div>


      {/* ==========================================
          PROCESS TIMELINE
      ========================================== */}

      <div className="process-timeline">

        <div className="process-timeline-top">

          <span>OUR PROCESS / 06</span>

        </div>


        {/* ==========================================
            STEP INDICATOR
        ========================================== */}

        <div className="process-progress">

          <div className="process-progress-line"></div>

          <div
            className="process-progress-active"
            style={{
              width: `${((activeStep + 1) / processSteps.length) * 100}%`,
            }}
          ></div>

          {processSteps.map((step, index) => (
            <button
              type="button"
              key={step.number}
              className={`process-progress-step ${
                activeStep === index ? "active" : ""
              }`}
              onClick={() => goToStep(index)}
              aria-label={`Go to ${step.title}`}
            >
              <span>{step.number}</span>
            </button>
          ))}

        </div>


        {/* ==========================================
            HORIZONTAL CARDS
        ========================================== */}

        <div
          className="process-track"
          ref={trackRef}
        >

          {processSteps.map((step, index) => (

            <article
              className={`process-card ${
                activeStep === index ? "active" : ""
              }`}
              key={step.number}
            >

              <div className="process-card-top">

                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-symbol">
                  {step.symbol}
                </div>

              </div>


              <div className="process-card-content">

                <p className="process-card-accent">
                  {step.accent}
                </p>

                <h3>
                  {step.title}
                </h3>

                <p className="process-description">
                  {step.description}
                </p>

              </div>


              <div className="process-tags">

                {step.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>


              <div className="process-card-footer">

                <span>
                  THAZHAL / {step.number}
                </span>

                <span className="process-card-arrow">
                  ↗
                </span>

              </div>

            </article>

          ))}

        </div>


        <div className="process-scroll-indicator">

          <span>
            SCROLL TO EXPLORE
          </span>

          <span className="process-scroll-line">
            <span></span>
          </span>

          <span>
            →
          </span>

        </div>

      </div>

    </section>
  );
}

export default Process;
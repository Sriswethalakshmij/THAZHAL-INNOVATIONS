import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/intro.css";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const elements =
        sectionRef.current.querySelectorAll(".intro-reveal");

      gsap.fromTo(
        elements,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="intro-section"
      id="intro"
    >
      <div className="container intro-container">

        {/* SECTION LABEL */}
        <div className="intro-meta intro-reveal">
          <span className="intro-number">01</span>

          <span className="intro-line"></span>

          <span className="intro-label">
            WHO WE ARE
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="intro-content">

          {/* HEADING */}
          <div className="intro-heading-wrap">
            <h2 className="intro-heading intro-reveal">
              <span>We build digital</span>
              <span>experiences that</span>
              <span className="intro-accent">
                move ideas forward.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="intro-side intro-reveal">

            <p>
              Thazhal Innovations is a digital innovation studio
              focused on creating thoughtful websites, digital
              products, and experiences for ambitious businesses.
            </p>

            <div className="intro-brand">
              <span>THAZHAL</span>
              <span>INNOVATIONS</span>
            </div>

          </div>

        </div>

        {/* BOTTOM INFORMATION */}
        <div className="intro-footer intro-reveal">

          <span>THAZHAL INNOVATIONS</span>

          <span>01 / INTRO</span>

        </div>

      </div>
    </section>
  );
};

export default Intro;
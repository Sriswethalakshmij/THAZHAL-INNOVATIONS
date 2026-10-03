import React, { useEffect, useRef, useState } from "react";
import "../styles/portfolio.css";

const projects = [
  {
    number: "01",
    title: "POS LANDING PAGE",
    name: "Enterprise POS & Retail Management Website",
    technologies: "HTML · CSS · JavaScript · PHP · MySQL",
    description:
      "A modern POS product landing page designed to present digital billing, sales analytics, inventory management, multi-store operations, customer management, employee tracking, and business automation features.",
    image: "/projects/pos-landing-page.png",
    link: "https://dev-pos.gomsu.in/",
  },
  {
    number: "02",
    title: "DIGITAL MARKETING LANDING PAGE",
    name: "Business Growth & Digital Marketing Website",
    technologies: "HTML · CSS · JavaScript · PHP · MySQL",
    description:
      "A modern, responsive digital marketing website designed to showcase SEO, Google Ads, social media marketing, lead generation, analytics, and other business growth services.",
    image: "/projects/digital-marketing.png",
    link: "https://dev-dm.gomsu.in/",
  },
  {
    number: "03",
    title: "INVENTORY MANAGEMENT SYSTEM",
    name: "Enterprise Inventory Management Web Application",
    technologies: "PHP · MySQL · SQL · JavaScript",
    description:
      "A role-based inventory management system designed to manage products, suppliers, categories, inward and outward stock operations, Excel imports, validation, stock reconciliation, and business reports.",
    image: "/projects/inventory-management.png",
    link: "https://dev-ims.gomsu.in/",
  },
];

function SelectedWork() {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  /*
   * CLICK ORBIT NUMBER → SCROLL TO PROJECT
   */
  const goToProject = (index) => {
    setActiveProject(index);

    const target = projectRefs.current[index];

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /*
   * UPDATE ACTIVE ORBIT NUMBER WHILE SCROLLING
   */
  useEffect(() => {
    const observers = [];

    projectRefs.current.forEach((project, index) => {
      if (!project) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveProject(index);
          }
        },
        {
          threshold: 0.45,
        }
      );

      observer.observe(project);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="selected-work" id="work">

      {/* ==========================================
          SECTION INTRO
      ========================================== */}

      <div className="work-intro">

        <div className="work-intro-left">

          <div className="section-label">
            <span className="section-label-number">02</span>
            <span className="section-label-line"></span>
            <span>SELECTED WORK</span>
          </div>

          <h2 className="work-heading">
            Three projects.
            <br />
            <span>One vision.</span>
          </h2>

          <p className="work-description">
            A selection of digital experiences and web applications designed
            and developed to solve real business needs.
          </p>

        </div>

        {/* ==========================================
            ORBIT NAVIGATION
        ========================================== */}

        <div className="project-orbit-wrapper">

          <div className="project-orbit">

            {/* Outer orbit */}
            <div className="orbit-ring orbit-ring-outer"></div>

            {/* Middle orbit */}
            <div className="orbit-ring orbit-ring-middle"></div>

            {/* Inner orbit */}
            <div className="orbit-ring orbit-ring-inner"></div>

            {/* ======================================
                COMPANY NAME
            ====================================== */}

            <div className="orbit-center">
              <span className="orbit-brand-small">
                THAZHAL
              </span>

              <span className="orbit-brand-main">
                INNOVATIONS
              </span>
            </div>

            {/* ======================================
                PROJECT 01
            ====================================== */}

            <button
              type="button"
              className={`orbit-project orbit-project-1 ${
                activeProject === 0 ? "active" : ""
              }`}
              onClick={() => goToProject(0)}
              aria-label="Go to project 1"
            >
              <span>01</span>
            </button>

            {/* ======================================
                PROJECT 02
            ====================================== */}

            <button
              type="button"
              className={`orbit-project orbit-project-2 ${
                activeProject === 1 ? "active" : ""
              }`}
              onClick={() => goToProject(1)}
              aria-label="Go to project 2"
            >
              <span>02</span>
            </button>

            {/* ======================================
                PROJECT 03
            ====================================== */}

            <button
              type="button"
              className={`orbit-project orbit-project-3 ${
                activeProject === 2 ? "active" : ""
              }`}
              onClick={() => goToProject(2)}
              aria-label="Go to project 3"
            >
              <span>03</span>
            </button>

          </div>

          <div className="orbit-caption">
            <span>EXPLORE</span>
            <span className="orbit-caption-line"></span>
          </div>

        </div>
      </div>

      {/* ==========================================
          PROJECTS LIST
      ========================================== */}

      <div className="projects-list">

        {projects.map((project, index) => (

          <article
            className={`project-showcase ${
              activeProject === index ? "project-active" : ""
            }`}
            key={project.number}
            ref={(element) => {
              projectRefs.current[index] = element;
            }}
          >

            {/* ======================================
                PROJECT IMAGE
            ====================================== */}

            <div className="project-image-wrapper">

              <div className="project-image-number">
                {project.number}
              </div>

              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />

              <div className="project-image-overlay"></div>

            </div>

            {/* ======================================
                PROJECT INFORMATION
            ====================================== */}

            <div className="project-content">

              <div className="project-top-line">
                <span>{project.number}</span>
                <span>THAZHAL / PROJECT</span>
              </div>

              <h3 className="project-title">
                {project.name}
              </h3>

              <div className="project-name">
                {project.title}
              </div>
              <div className="project-tech">
                {project.technologies}
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>VIEW PROJECT</span>
                <span className="project-link-arrow">↗</span>
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default SelectedWork;
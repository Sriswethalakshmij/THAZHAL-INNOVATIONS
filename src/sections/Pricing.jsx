import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/pricing.css";

const plans = [
  {
    number: "01",
    name: "STARTER",
    price: "₹2,000",
    description: "A clean starting point for individuals and small projects.",
    features: [
      "Single-page website",
      "Responsive design",
      "Basic UI design",
      "Contact section",
      "Basic animations",
    ],
  },
  {
    number: "02",
    name: "GROWTH",
    price: "₹6,000",
    description: "A professional website built to help your business grow.",
    features: [
      "Business website",
      "Responsive design",
      "Modern UI / UX",
      "Multiple sections",
      "Basic SEO structure",
      "Interactive elements",
    ],
  },
  {
    number: "03",
    name: "PROFESSIONAL",
    price: "₹10,000",
    description: "Advanced digital experiences for growing businesses.",
    popular: true,
    features: [
      "Advanced website",
      "Custom UI / UX",
      "Web application features",
      "Database integration",
      "Advanced animations",
      "Performance optimization",
    ],
  },
  {
    number: "04",
    name: "PREMIUM",
    price: "₹15,000+",
    description: "A complete custom digital solution designed around your needs.",
    features: [
      "Custom digital solution",
      "Advanced web application",
      "Custom functionality",
      "API / database integration",
      "Premium UI / UX",
      "Ongoing improvements",
    ],
  },
];

function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pricing-section"
      id="pricing"
    >
      <div className="pricing-container">

        <div className="pricing-header">

          <div className="pricing-header-left">
            <div className="pricing-label">
              <span className="pricing-label-number">07</span>
              <span className="pricing-label-line"></span>
              <span>PRICING</span>
            </div>

            <h2 className="pricing-heading">
              Simple pricing.
              <br />
              <span>Real value.</span>
            </h2>
          </div>

          <div className="pricing-header-right">
            <p>
              Choose a starting point that fits your idea.
              Every project can be customized according to
              your requirements.
            </p>

            <span className="pricing-meta">
              THAZHAL.INNOVATIONS / PRICING
            </span>
          </div>

        </div>

        <div className="pricing-grid">

          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
              key={plan.number}
            >

              {plan.popular && (
                <div className="pricing-popular">
                  MOST POPULAR
                </div>
              )}

              <div className="pricing-card-top">
                <span className="pricing-number">
                  {plan.number}
                </span>

                <span className="pricing-arrow">
                  ↗
                </span>
              </div>

              <div className="pricing-card-main">

                <h3>{plan.name}</h3>

                <div className="pricing-price">
                  {plan.price}
                </div>

                <p className="pricing-description">
                  {plan.description}
                </p>

                <div className="pricing-divider"></div>

                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>

              <a
                href="#contact"
                className="pricing-button"
              >
                <span>START THIS PROJECT</span>
                <span>↗</span>
              </a>

            </article>
          ))}

                  </div>

          {/* ==========================================
              CUSTOM INQUIRY
          ========================================== */}

          <div className="pricing-inquiry">

            <div className="pricing-inquiry-header">

              <h3>
                Need something
                <br />
                <span>more specific?</span>
              </h3>

              <p>
                Looking for a resume, portfolio, notes, redesign,
                application or something completely different?
                Tell us what you need and we'll get back to you.
              </p>

            </div>

            <form
              className="pricing-inquiry-form"
              onSubmit={(event) => {
                event.preventDefault();

                const form = event.currentTarget;

                if (!form.checkValidity()) {
                  form.reportValidity();
                  return;
                }

                const name = form.name.value.trim();
                const phone = form.phone.value.trim();
                const email = form.email.value.trim();

                const selectedServices = Array.from(
                  form.querySelectorAll(
                    'input[name="services"]:checked'
                  )
                ).map((input) => input.value);

                if (selectedServices.length === 0) {
                  alert("Please select at least one service.");
                  return;
                }

                const message = [
                  "Hello THAZHAL Innovations,",
                  "",
                  "I would like to make an inquiry.",
                  "",
                  `Name: ${name}`,
                  `Phone: ${phone}`,
                  `Email: ${email}`,
                  "",
                  "I'm interested in:",
                  ...selectedServices.map(
                    (service) => `• ${service}`
                  ),
                  "",
                  "Thank you."
                ].join("\n");

                const whatsappURL =
                  `https://wa.me/917603996031?text=${encodeURIComponent(message)}`;

                window.open(whatsappURL, "_blank");
              }}
            >

              {/* NAME */}

              <div className="pricing-form-field">
                <label htmlFor="inquiry-name">
                  01 / NAME
                </label>

                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  pattern="[A-Za-z ]{2,}"
                  title="Please enter a valid name using letters only."
                  required
                />
              </div>


              {/* PHONE */}

              <div className="pricing-form-field">
                <label htmlFor="inquiry-phone">
                  02 / PHONE NUMBER
                </label>

                <input
                  id="inquiry-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  title="Please enter a valid 10-digit phone number."
                  required
                />
              </div>


              {/* EMAIL */}

              <div className="pricing-form-field">
                <label htmlFor="inquiry-email">
                  03 / EMAIL
                </label>

                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>


              {/* SERVICES */}

              <div className="pricing-form-field pricing-service-field">

                <label>
                  04 / WHAT DO YOU NEED?
                </label>

                <div className="pricing-service-options">

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="Website Development"
                    />
                    <span>Website Development</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="App Development"
                    />
                    <span>App Development</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="Website Redesign"
                    />
                    <span>Website Redesign</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="App Redesign"
                    />
                    <span>App Redesign</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="UI / UX Design"
                    />
                    <span>UI / UX Design</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="Resume Design"
                    />
                    <span>Resume Design</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="Portfolio Development"
                    />
                    <span>Portfolio Development</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="Exam Notes & Study Materials"
                    />
                    <span>Exam Notes & Study Materials</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="Arrears Exam Notes"
                    />
                    <span>Arrears Exam Notes</span>
                  </label>

                  <label className="pricing-service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value="Other"
                    />
                    <span>Other</span>
                  </label>

                </div>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="pricing-inquiry-submit"
              >
                <span>SEND INQUIRY ON WHATSAPP</span>
                <span>↗</span>
              </button>

            </form>

          </div>

        </div>
      </section>
  );
}

export default Pricing;
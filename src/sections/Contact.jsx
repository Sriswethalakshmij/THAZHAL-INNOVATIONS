import React, { useState } from "react";
import "../styles/contact.css";

const services = [
  "Website Development",
  "App Development",
  "UI / UX Design",
  "Website / App Redesign",
  "Resume",
  "Portfolio",
  "Exam Notes & Study Materials",
  "Other",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(service);

      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((item) => item !== service)
          : [...prev.services, service],
      };
    });

    setErrors((prev) => ({
      ...prev,
      services: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name should contain letters only.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us briefly about your requirement.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const whatsappNumber = "917603996031";

    const whatsappMessage = `
Hello THAZHAL.innovations,

I would like to discuss a project.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Service Required:
${formData.services.map((service) => `• ${service}`).join("\n")}

Project Details:
${formData.message}

Looking forward to discussing this with you.
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* =========================================
            CONTACT HEADER
        ========================================= */}

        <div className="contact-header">

          <div className="contact-label">
            <span className="contact-label-number">09</span>
            <span className="contact-label-line"></span>
            <span>CONTACT</span>
          </div>

          <div className="contact-header-grid">

            <div className="contact-heading-wrap">
              <h2 className="contact-heading">
                Your idea.
                <br />
                <span>Our expertise.</span>
                <br />
                Let&apos;s build it.
              </h2>
            </div>

            <div className="contact-intro">
              <p>
                Have a project in mind, a business problem to solve,
                or simply an idea you want to explore?
              </p>

              <p>
                Tell us what you need and let&apos;s start the conversation.
              </p>

              <div className="contact-meta">
                <span>THAZHAL.INNOVATIONS / CONTACT</span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================
            CONTACT CONTENT
        ========================================= */}

        <div className="contact-main">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <div className="contact-info-block">
              <span className="contact-info-label">
                HAVE A PROJECT?
              </span>

              <h3>
                Let&apos;s talk
                <br />
                about it.
              </h3>

              <p>
                Whether you need a website, application, redesign,
                portfolio, resume, or another digital solution,
                we&apos;re ready to hear from you.
              </p>
            </div>

<div className="contact-details">

  {/* EMAIL */}
  <a
    href="mailto:thazhalinnovations@gmail.com"
    className="contact-detail"
  >
    <span>EMAIL</span>
    <strong>thazhalinnovations@gmail.com</strong>
    <span className="contact-detail-arrow">↗</span>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/917603996031"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-detail"
  >
    <span>WHATSAPP</span>
    <strong>+91 76039 96031</strong>
    <span className="contact-detail-arrow">↗</span>
  </a>

  {/* RESPONSE */}
  <div className="contact-detail">
    <span>RESPONSE</span>
    <strong>We'll get back to you soon.</strong>
  </div>

</div>

          </div>

          {/* RIGHT SIDE FORM */}

          <div className="contact-form-wrap">

            <div className="contact-form-heading">
              <h3>START A CONVERSATION</h3>
              <span>01 / INQUIRY</span>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* NAME */}

              <div className="contact-field">
                <label htmlFor="contact-name">
                  YOUR NAME
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                />

                {errors.name && (
                  <span className="contact-error">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* PHONE */}

              <div className="contact-field">
                <label htmlFor="contact-phone">
                  PHONE NUMBER
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit phone number"
                  maxLength="10"
                  inputMode="numeric"
                  autoComplete="tel"
                />

                {errors.phone && (
                  <span className="contact-error">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* EMAIL */}

              <div className="contact-field">
                <label htmlFor="contact-email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />

                {errors.email && (
                  <span className="contact-error">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* SERVICES */}

              <div className="contact-field">
                <label>
                  WHAT DO YOU NEED?
                </label>

                <div className="contact-services">

                  {services.map((service) => (
                    <button
                      type="button"
                      key={service}
                      className={`contact-service ${
                        formData.services.includes(service)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleServiceChange(service)}
                    >
                      <span>
                        {formData.services.includes(service)
                          ? "✓"
                          : "+"}
                      </span>

                      {service}
                    </button>
                  ))}

                </div>

                {errors.services && (
                  <span className="contact-error">
                    {errors.services}
                  </span>
                )}
              </div>

              {/* MESSAGE */}

              <div className="contact-field">
                <label htmlFor="contact-message">
                  TELL US ABOUT IT
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly tell us about your requirement..."
                  rows="5"
                />

                {errors.message && (
                  <span className="contact-error">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
              >
                <span>SEND INQUIRY</span>
                <span>↗</span>
              </button>

              <p className="contact-form-note">
                Your inquiry will continue through WhatsApp.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
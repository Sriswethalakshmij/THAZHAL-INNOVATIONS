import React, { useState } from "react";
import "../styles/faq.css";

const faqs = [
  {
    number: "01",
    question: "What kind of website or digital solution can you build for me?",
    answer:
      "We design and develop business websites, landing pages, web applications, portfolios, and other custom digital solutions based on your goals, audience, and requirements.",
  },
  {
    number: "02",
    question: "How much does it cost to build a website?",
    answer:
      "Our starting packages are designed for different project sizes, but the final price depends on the pages, features, design requirements, integrations, and overall complexity of the project.",
  },
  {
    number: "03",
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the type and scope of the project. A simple website can be completed faster, while custom web applications and larger projects require more planning, development, testing, and refinement.",
  },
  {
    number: "04",
    question: "Can you redesign my existing website or application?",
    answer:
      "Yes. We can redesign existing websites and applications with a modern interface, improved user experience, responsive layouts, better structure, and updated visual design.",
  },
  {
    number: "05",
    question: "Can I request a resume or portfolio instead of a website?",
    answer:
      "Yes. We also create professional resumes and personal portfolios for students, job seekers, developers, and professionals who want a stronger digital or career presence.",
  },
  {
    number: "06",
    question: "Can I request exam notes or study materials?",
    answer:
      "Yes. We prepare structured examination notes and study materials based on the subject, examination, and requirements you provide.",
  },
  {
    number: "07",
    question: "How do I start a project with Thazhal Innovations?",
    answer:
      "Simply contact us through the Start a Project button and tell us what you need. We will understand your requirements, discuss the project, and guide you through the next steps.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* ==========================================
            FAQ HEADER
        ========================================== */}

        <div className="faq-header">

          <div className="faq-header-left">

            <div className="faq-label">
              <span className="faq-label-number">08</span>
              <span className="faq-label-line"></span>
              <span>FAQ</span>
            </div>

            <h2 className="faq-heading">
              Frequently asked
              <br />
              <span>questions.</span>
            </h2>

          </div>

          <div className="faq-header-right">

            <p>
              A few answers to the questions people usually have
              before starting a project with us.
            </p>

            <span className="faq-meta">
              THAZHAL.INNOVATIONS / FAQ
            </span>

          </div>

        </div>


        {/* ==========================================
            FAQ QUESTIONS
        ========================================== */}

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openIndex === index ? "faq-item-open" : ""
              }`}
              key={faq.number}
            >

              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >

                <span className="faq-number">
                  {faq.number}
                </span>

                <span className="faq-question-text">
                  {faq.question}
                </span>

                <span className="faq-toggle">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>


              <div
                className="faq-answer-wrapper"
                id={`faq-answer-${index}`}
              >

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;
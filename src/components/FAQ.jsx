import { useState } from 'react';
import { faqItems } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-block faq-section" id="faq">
      <div className="container faq-container">
        <SectionHeader centered kicker="FAQ" title="Common questions for new teams." />

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <strong aria-hidden="true">{isOpen ? '−' : '+'}</strong>
                </button>
                <div className="faq-answer" hidden={!isOpen}>
                  {item.answer}
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq-note">
          <strong>Reminder:</strong> The platform is only a template now, but its structure is ready for real content, APIs, dashboards, and LMS integration.
        </div>
      </div>
    </section>
  );
}

export default FAQ;

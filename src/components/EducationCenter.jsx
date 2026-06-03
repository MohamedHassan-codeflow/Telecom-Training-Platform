function EducationCenter() {
  const items = [
    {
      icon: '👨‍🏫',
      title: 'Instructor-Led Training',
      text: 'Structured sessions for network, support, field, commercial, and operations teams.',
    },
    {
      icon: '🎓',
      title: 'Learner Progress Paths',
      text: 'Clear journeys from beginner telecom basics to advanced operations and leadership.',
    },
    {
      icon: '📱',
      title: 'Mobile-Friendly Knowledge',
      text: 'Reference guides and training content designed for desktop, tablet, and mobile teams.',
    },
  ];

  return (
    <section className="section-block education-section" id="education-center">
      <div className="container education-grid">
        <div className="education-gallery" aria-label="Training center visual cards">
          {/* CSS gradients are used instead of external images so the project remains self-contained. */}
          <div className="gallery-card gallery-card--large">
            <span>Academy</span>
            <strong>Guided learning</strong>
            <em>Build the basics. Then build speed.</em>
          </div>
          <div className="gallery-card">
            <span>Workshop</span>
            <strong>Hands-on practice</strong>
            <em>Practice today. Perform tomorrow.</em>
          </div>
          <div className="gallery-card gallery-card--accent">
            <span>Mobile</span>
            <strong>Study anywhere</strong>
            <em>One lesson can change a shift.</em>
          </div>
        </div>

        <div className="education-copy">
          <span className="section-kicker">Education Center</span>
          <h2>Learn with instructors, mentors, and real telecom scenarios.</h2>
          <p>
            Build a complete learning center where new joiners can understand telecom concepts,
            practice troubleshooting, follow instructor-led sessions, and review field operation procedures.
          </p>

          <div className="education-list">
            {items.map((item) => (
              <article className="education-item" key={item.title}>
                <span className="education-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section-motivation">
            <strong>Knowledge grows faster when it is organized.</strong>
            <p>Give every learner a clear place to start, a clear path to improve, and a clear reason to keep going.</p>
          </div>

          <a className="btn btn-primary-soft" href="#learning">
            View all courses
          </a>
        </div>
      </div>
    </section>
  );
}

export default EducationCenter;

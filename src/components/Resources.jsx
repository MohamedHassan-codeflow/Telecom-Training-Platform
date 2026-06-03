import { resources } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';

function Resources() {
  return (
    <section className="section-block resources-section" id="resources">
      <div className="container">
        <SectionHeader
          kicker="Knowledge Base"
          title="Organized resources for quick reference."
          description="Create cards for every topic your teams need during daily work, assessments, escalations, and field visits."
        />

        <div className="resources-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.title}>
              <span aria-hidden="true">{resource.icon}</span>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
            </article>
          ))}
        </div>

        <div className="resource-banner">
          <span>📌</span>
          <div>
            <strong>The best troubleshooting starts before the ticket arrives.</strong>
            <p>Keep SOPs, diagrams, and escalation rules close so teams can solve faster and communicate better.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;

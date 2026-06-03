import { workflowSteps } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';

function Workflow() {
  return (
    <section className="section-block process-section" id="process">
      <div className="container">
        <SectionHeader
          centered
          kicker="Workflow"
          title="Standard onboarding process for every new telecom team."
          description="Turn scattered knowledge into a guided workflow from orientation to advanced operational readiness."
        />

        <div className="timeline-grid">
          {workflowSteps.map((step) => (
            <article className="timeline-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="process-note">
          <strong>Step by step is still progress.</strong>
          <p>When the path is clear, new learners stop guessing and start growing with confidence.</p>
        </div>
      </div>
    </section>
  );
}

export default Workflow;

import { dashboardKpis, levelSummary, progressItems, upcomingTasks } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';

function Dashboard() {
  return (
    <section className="section-block dashboard-section" id="dashboard">
      <div className="container">
        <SectionHeader
          centered
          kicker="Main Dashboard"
          title="A quick training overview before users start learning."
          description="The dashboard gives managers and learners a motivational snapshot of progress, readiness, and next actions."
        />

        <div className="kpi-grid" aria-label="Training dashboard numbers">
          {dashboardKpis.map((item) => (
            <article className="kpi-card" key={item.label}>
              <span aria-hidden="true">{item.icon}</span>
              <div>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
                <small>{item.trend}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="dashboard-grid dashboard-grid--wide">
          <article className="dashboard-card">
            <div className="dashboard-card__header">
              <div>
                <span className="section-kicker">Progress</span>
                <h3>Learning Path Completion</h3>
              </div>
              <strong>82%</strong>
            </div>

            {progressItems.map((item) => (
              <div className="progress-row" key={item.label}>
                <div className="progress-info">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="progress" role="progressbar" aria-valuenow={item.value} aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </article>

          <article className="dashboard-card level-distribution-card">
            <span className="section-kicker">Level Split</span>
            <h3>Clear growth from basics to expert readiness.</h3>
            <div className="level-distribution-list">
              {levelSummary.map((level) => (
                <div className="level-distribution-item" key={level.level}>
                  <div>
                    <strong>{level.level}</strong>
                    <p>{level.text}</p>
                  </div>
                  <span>{level.value}%</span>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card dashboard-card--highlight">
            <span className="section-kicker">Motivation</span>
            <h3>Great telecom teams are built before the outage happens.</h3>
            <p>Train early, practice often, document clearly, and every shift becomes more confident.</p>
            <ul className="next-steps">
              <li>Complete the beginner path first</li>
              <li>Practice real role-based scenarios</li>
              <li>Use dashboards to spot skill gaps</li>
              <li>Graduate into advanced simulations</li>
            </ul>
          </article>
        </div>

        <div className="dashboard-bottom-panel">
          <div>
            <span className="section-kicker">Upcoming focus</span>
            <h3>Next actions for this training cycle</h3>
          </div>
          <div className="task-list">
            {upcomingTasks.map((task) => (
              <article key={task.title}>
                <strong>{task.title}</strong>
                <span>{task.date} · {task.owner}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

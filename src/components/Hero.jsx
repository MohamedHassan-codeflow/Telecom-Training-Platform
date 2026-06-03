import { stats } from '../data/siteData.js';

function Hero() {
  return (
    <section className="hero-section" id="start">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">📡 Telecom Internal Knowledge Platform</span>
          <h1>
            Train new teams on your <span>telecom operations</span> faster.
          </h1>
          <p className="hero-lead">
            A professional reference website for onboarding, network concepts, field operations,
            service workflows, troubleshooting guides, and team learning resources.
          </p>

          <div className="hero-actions">
            <a href="#learning" className="btn btn-primary-soft">
              Explore Learning Paths
            </a>
            <a href="#resources" className="btn btn-outline-soft">
              View Resources
            </a>
          </div>

          <div className="stats-grid" aria-label="Platform highlights">
            {stats.map((item) => (
              <article className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Network overview dashboard concept">
          <div className="network-card">
            <div className="network-card__top">
              <div>
                <p>Live dashboard concept</p>
                <h3>Network Overview</h3>
              </div>
              <div className="signal-bars" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Decorative network map that gives the hero a professional telecom identity. */}
            <div className="network-map">
              <span className="map-line map-line--one"></span>
              <span className="map-line map-line--two"></span>
              <span className="map-line map-line--three"></span>
              <span className="map-node map-node--one"></span>
              <span className="map-node map-node--two"></span>
              <span className="map-node map-node--three"></span>
              <span className="map-node map-node--four"></span>
              <span className="map-node map-node--five"></span>
            </div>

            <div className="mini-dashboard">
              <article>
                <span>Coverage</span>
                <strong>98.7%</strong>
              </article>
              <article>
                <span>Open Tickets</span>
                <strong>14</strong>
              </article>
              <article>
                <span>Readiness</span>
                <strong>86%</strong>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

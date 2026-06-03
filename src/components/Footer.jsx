import { navLinks } from '../data/siteData.js';

function Footer() {
  const teamLinks = ['Network', 'Field Operations', 'Customer Support', 'Security'];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand-lockup footer-brand" href="#start">
            <span className="brand-mark" aria-hidden="true">
              T
            </span>
            <span>
              <strong>Telecom</strong>
              <small>Education Center</small>
            </span>
          </a>
          <p>
            A professional React frontend reference website for telecom team onboarding and knowledge sharing.
          </p>
        </div>

        <div>
          <h3>Platform</h3>
          {navLinks.slice(0, 4).map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h3>Teams</h3>
          {teamLinks.map((link) => (
            <a href="#learning" key={link}>
              {link}
            </a>
          ))}
        </div>

        <div>
          <h3>Contact</h3>
          <p>training@company.com</p>
          <p>Internal Knowledge Team</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2026 Telecom Education Center. All rights reserved.</span>
        <a href="#start">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;

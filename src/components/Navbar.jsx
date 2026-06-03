import { useState } from 'react';
import { navLinks } from '../data/siteData.js';

function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  // Closing the mobile menu after navigation prevents the menu panel from covering content.
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg container" aria-label="Main navigation">
        <a className="brand-lockup" href="#start" onClick={handleLinkClick}>
          <span className="brand-mark" aria-hidden="true">
            T
          </span>
          <span>
            <strong>Telecom</strong>
            <small>Education Center</small>
          </span>
        </a>

        <div className="nav-actions order-lg-3">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
          </button>

          <button
            className={`navbar-toggler custom-toggler ${isOpen ? 'is-open' : ''}`}
            type="button"
            aria-controls="mainMenu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((currentState) => !currentState)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`main-menu navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="mainMenu">
          <ul className="navbar-nav align-items-lg-center gap-lg-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <a className="nav-link nav-cta" href="#learning" onClick={handleLinkClick}>
                Start Learning
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

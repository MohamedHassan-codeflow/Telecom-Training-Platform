import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Dashboard from './components/Dashboard.jsx';
import CourseExplorer from './components/CourseExplorer.jsx';
import CourseDetail from './components/CourseDetail.jsx';
import EducationCenter from './components/EducationCenter.jsx';
import Workflow from './components/Workflow.jsx';
import Resources from './components/Resources.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Theme state is stored locally so the user keeps the same preference after refresh.
  const [theme, setTheme] = useState(() => localStorage.getItem('telecom-theme') || 'light');
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#start');

  const isDark = useMemo(() => theme === 'dark', [theme]);
  const courseSlug = currentHash.startsWith('#/course/') ? currentHash.replace('#/course/', '') : null;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('telecom-theme', theme);
  }, [theme]);

  useEffect(() => {
    const syncHashRoute = () => setCurrentHash(window.location.hash || '#start');
    window.addEventListener('hashchange', syncHashRoute);

    return () => window.removeEventListener('hashchange', syncHashRoute);
  }, []);

  useEffect(() => {
    if (courseSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [courseSlug]);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app-shell">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      {courseSlug ? (
        <CourseDetail slug={courseSlug} />
      ) : (
        <main>
          <Hero />
          <Dashboard />
          <CourseExplorer />
          <EducationCenter />
          <Workflow />
          <Resources />
          <FAQ />
          <section className="cta-section container" aria-labelledby="cta-title">
            <div>
              <span className="section-kicker">Start now</span>
              <h2 id="cta-title">Small daily learning creates world-class operations.</h2>
              <p>
                Replace the sample content with your real telecom topics, diagrams, procedures, tools,
                assessments, and team training materials.
              </p>
            </div>
            <a className="btn btn-glass" href="#learning">
              Browse courses
            </a>
          </section>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;

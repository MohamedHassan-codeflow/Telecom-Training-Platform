import { useMemo, useState } from 'react';
import { courseCategories, courseLevels, courses } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';
import { getCourseHash } from '../utils/courseHelpers.js';

const ITEMS_PER_PAGE = 6;
const levelToneClass = {
  Beginner: 'level-badge--beginner',
  Intermediate: 'level-badge--intermediate',
  Advanced: 'level-badge--advanced',
};

function CourseExplorer() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // The filtered list recalculates only when category, level, or search value changes.
  const filteredCourses = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
      const matchesLevel = activeLevel === 'all' || course.level === activeLevel;
      const searchableText = `${course.title} ${course.description} ${course.level} ${course.category} ${course.tags.join(' ')}`.toLowerCase();
      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [activeCategory, activeLevel, searchTerm]);

  const levelCounts = useMemo(() => {
    return courseLevels
      .filter((level) => level.value !== 'all')
      .map((level) => ({
        ...level,
        count: courses.filter((course) => course.level === level.value).length,
      }));
  }, []);

  const totalPages = Math.max(Math.ceil(filteredCourses.length / ITEMS_PER_PAGE), 1);
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageStart = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const visibleCourses = filteredCourses.slice(pageStart, pageStart + ITEMS_PER_PAGE);

  const resetPage = () => setCurrentPage(1);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    resetPage();
  };

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    resetPage();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    resetPage();
  };

  return (
    <section className="section-block learning-section" id="learning">
      <div className="container">
        <SectionHeader
          centered
          kicker="Course Library"
          title="Courses divided into Beginner, Intermediate, and Advanced levels."
          description="Search, filter by category, filter by level, and paginate the training catalog in one clean React-powered experience."
        />

        <div className="level-overview" aria-label="Course level summary">
          {levelCounts.map((level) => (
            <article className="level-overview-card" key={level.value}>
              <span>{level.label}</span>
              <strong>{level.count} courses</strong>
              <p>{level.value === 'Beginner' ? 'Start strong.' : level.value === 'Intermediate' ? 'Practice daily operations.' : 'Lead with confidence.'}</p>
            </article>
          ))}
        </div>

        <div className="learning-shell">
          <aside className="learning-sidebar" aria-label="Course filters">
            <label className="form-label fw-bold" htmlFor="moduleSearch">
              Search courses
            </label>
            <input
              id="moduleSearch"
              type="search"
              className="form-control search-input"
              placeholder="Try: RAN, security, field..."
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <div className="filter-group">
              <span className="filter-title">Level</span>
              <div className="level-filter-row" role="list" aria-label="Course levels">
                {courseLevels.map((level) => (
                  <button
                    type="button"
                    className={`level-filter ${activeLevel === level.value ? 'active' : ''}`}
                    key={level.value}
                    onClick={() => handleLevelChange(level.value)}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-title">Category</span>
              <div className="category-stack" role="list" aria-label="Course categories">
                {courseCategories.map((category) => (
                  <button
                    type="button"
                    className={`category-pill ${activeCategory === category.value ? 'active' : ''}`}
                    key={category.value}
                    onClick={() => handleCategoryChange(category.value)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="motivation-card">
              <strong>Keep moving.</strong>
              <p>Every completed course turns confusion into confidence and confidence into better service.</p>
            </div>
          </aside>

          <div className="learning-content">
            <div className="result-bar">
              <span>
                Showing <strong>{visibleCourses.length}</strong> of <strong>{filteredCourses.length}</strong> courses
              </span>
              <span>
                Page {safeCurrentPage} / {totalPages}
              </span>
            </div>

            {visibleCourses.length > 0 ? (
              <div className="course-grid">
                {visibleCourses.map((course) => (
                  <article className="course-card" key={course.title}>
                    <div className="course-card__meta">
                      <span className="course-icon" aria-hidden="true">
                        {course.icon}
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    <span className={`level-badge ${levelToneClass[course.level]}`}>{course.level}</span>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="tag-row">
                      {course.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="course-detail-link" href={getCourseHash(course.title)}>
                      View course page
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state" role="status">
                <span aria-hidden="true">🔍</span>
                <h3>No courses found</h3>
                <p>Try another keyword, level, or category.</p>
              </div>
            )}

            <nav className="pagination-wrap" aria-label="Course pagination">
              <ul className="pagination justify-content-center mb-0">
                <li className={`page-item ${safeCurrentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}>
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <li className={`page-item ${safeCurrentPage === page ? 'active' : ''}`} key={page}>
                    <button className="page-link" onClick={() => setCurrentPage(page)} aria-current={safeCurrentPage === page ? 'page' : undefined}>
                      {page}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${safeCurrentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseExplorer;

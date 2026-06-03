import { courseCategories, courses } from '../data/siteData.js';
import { buildCourseSummary, getCourseBySlug, getCourseHash } from '../utils/courseHelpers.js';

const levelToneClass = {
  Beginner: 'level-badge--beginner',
  Intermediate: 'level-badge--intermediate',
  Advanced: 'level-badge--advanced',
};

const levelPlan = {
  Beginner: ['Core terms and concepts', 'Simple examples and everyday use cases', 'Quick readiness check'],
  Intermediate: ['Operational workflow practice', 'Team handoff and escalation examples', 'Scenario-based assessment'],
  Advanced: ['Complex troubleshooting scenarios', 'Decision-making and leadership drills', 'Post-action improvement plan'],
};

function getCategoryLabel(categoryValue) {
  return courseCategories.find((category) => category.value === categoryValue)?.label || categoryValue;
}

function CourseDetail({ slug }) {
  const course = getCourseBySlug(courses, slug);

  if (!course) {
    return (
      <main className="course-page section-block">
        <div className="container course-page__not-found">
          <span className="section-kicker">Course not found</span>
          <h1>We could not find this course.</h1>
          <p>The course may have been renamed or removed from the catalog.</p>
          <a className="btn btn-primary-soft" href="#learning">
            Back to Course Library
          </a>
        </div>
      </main>
    );
  }

  const categoryLabel = getCategoryLabel(course.category);
  const relatedCourses = courses
    .filter((item) => item.title !== course.title && (item.level === course.level || item.category === course.category))
    .slice(0, 3);

  return (
    <main className="course-page section-block" id="course-detail">
      <div className="container">
        <a className="course-back-link" href="#learning">
          ← Back to all courses
        </a>

        <section className="course-detail-hero" aria-labelledby="course-detail-title">
          <div className="course-detail-hero__content">
            <span className={`level-badge ${levelToneClass[course.level]}`}>{course.level}</span>
            <h1 id="course-detail-title">{course.title}</h1>
            <p>{buildCourseSummary(course)}</p>

            <div className="course-detail-meta" aria-label="Course information">
              <article>
                <span>Duration</span>
                <strong>{course.duration}</strong>
              </article>
              <article>
                <span>Category</span>
                <strong>{categoryLabel}</strong>
              </article>
              <article>
                <span>Focus tags</span>
                <strong>{course.tags.join(' · ')}</strong>
              </article>
            </div>
          </div>

          <div className="course-detail-hero__visual" aria-hidden="true">
            <span>{course.icon}</span>
            <strong>{course.level}</strong>
            <p>Learn clearly. Practice smartly. Improve service quality.</p>
          </div>
        </section>

        <section className="course-detail-grid" aria-label="Course details">
          <article className="course-detail-card course-detail-card--summary">
            <span className="section-kicker">Brief summary</span>
            <h2>What this course explains</h2>
            <p>{course.description}</p>
            <p>
              The lesson is designed to be short, practical, and easy to adapt with your own diagrams,
              screenshots, SOPs, quizzes, and company-specific examples.
            </p>
          </article>

          <article className="course-detail-card">
            <span className="section-kicker">Course outcomes</span>
            <h2>After finishing this course, learners can:</h2>
            <ul className="course-outcome-list">
              <li>Explain the main purpose of {course.title.toLowerCase()}.</li>
              <li>Apply {categoryLabel.toLowerCase()} best practices in daily telecom work.</li>
              <li>Use the right terms, evidence, and escalation notes when communicating with teams.</li>
              <li>Complete a short assessment before moving to the next learning level.</li>
            </ul>
          </article>

          <article className="course-detail-card course-detail-card--plan">
            <span className="section-kicker">Suggested lesson flow</span>
            <h2>Simple structure for the course page</h2>
            <div className="lesson-flow">
              {levelPlan[course.level].map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        {relatedCourses.length > 0 ? (
          <section className="related-courses" aria-labelledby="related-courses-title">
            <div className="section-header section-header--center">
              <span className="section-kicker">Continue learning</span>
              <h2 id="related-courses-title">Recommended next courses</h2>
              <p>These courses share the same level or category, so learners can keep moving naturally.</p>
            </div>

            <div className="related-course-grid">
              {relatedCourses.map((item) => (
                <article className="course-card course-card--compact" key={item.title}>
                  <span className="course-icon" aria-hidden="true">{item.icon}</span>
                  <span className={`level-badge ${levelToneClass[item.level]}`}>{item.level}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a className="course-detail-link" href={getCourseHash(item.title)}>
                    Open course page
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

export default CourseDetail;

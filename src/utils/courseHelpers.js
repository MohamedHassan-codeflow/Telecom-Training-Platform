// Course URL helpers keep the course cards and course detail pages in sync.
export const getCourseSlug = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getCourseHash = (title) => `#/course/${getCourseSlug(title)}`;

export const getCourseBySlug = (courses, slug) =>
  courses.find((course) => getCourseSlug(course.title) === slug);

export const buildCourseSummary = (course) => {
  const levelPurpose = {
    Beginner: 'builds the foundation learners need before moving into operational practice',
    Intermediate: 'turns basic knowledge into repeatable operational workflows and better decision-making',
    Advanced: 'helps experienced learners analyze complex scenarios, lead actions, and improve service reliability',
  };

  return `${course.title} is a ${course.level.toLowerCase()} course that ${levelPurpose[course.level]}. It focuses on ${course.description.toLowerCase()} By the end, learners should understand the key concepts, apply them in realistic telecom situations, and communicate their work clearly.`;
};

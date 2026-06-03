# Telecom Education Center - React Version

A refined React.js rebuild of the original static HTML/CSS telecom education website.

## Latest requested enhancements

- Enhanced section backgrounds with layered gradients, soft telecom-style light effects, and cleaner card contrast.
- Added motivational sentences in suitable empty areas across the dashboard, courses, education, workflow, resources, FAQ, and CTA sections.
- Expanded the course catalog to 24 courses.
- Divided every course into one of three clear levels: Beginner, Intermediate, and Advanced.
- Added level filtering and category filtering in the course section.
- Kept search and pagination for the course library.
- Moved and expanded the dashboard so it appears as a main-page section directly after the hero.
- Added KPI cards, level distribution, progress bars, upcoming training actions, and motivational dashboard content.
- Improved the mobile navigation button so the small-screen menu shows real links instead of a blank/white panel.
- Rechecked responsive breakpoints for desktop, tablet, and small mobile layouts.


## Minor enhancement update v3

- Centered text inside buttons, pills, pagination controls, course cards, resource cards, and bordered content blocks across responsive breakpoints.
- Added a dedicated hash-based course page for every course using links like `#/course/network-basics-101`.
- Added brief course summaries, outcomes, suggested lesson flow, metadata, and related-course recommendations on course pages.
- Fixed light-theme contrast issues where white text could appear on white/light backgrounds, especially section kicker badges inside highlighted panels.
- Rebuilt successfully with `npm run build`.

## Original improvements

- Rebuilt with React + Vite.
- Added Bootstrap for layout helpers and accessible UI patterns.
- Added Tailwind CSS setup for utility-first styling.
- Added a professional light/dark theme toggle.
- Split the website into reusable, commented React components.
- Improved accessibility with labels, ARIA attributes, and semantic structure.

## How to run

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Main folders

```text
src/components  Reusable UI sections and course detail page
src/data        Central website content and configuration
src/utils       Course slug and summary helpers
src/styles.css  Tailwind imports + custom professional theme
```

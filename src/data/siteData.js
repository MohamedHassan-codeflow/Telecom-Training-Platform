// Centralized content makes the site easier to maintain and scale later with an API or CMS.
export const navLinks = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Courses', href: '#learning' },
  { label: 'Education Center', href: '#education-center' },
  { label: 'Workflow', href: '#process' },
  { label: 'Resources', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { value: '24+', label: 'Practical Courses' },
  { value: '3', label: 'Learning Levels' },
  { value: '100%', label: 'Responsive UI' },
];

export const dashboardKpis = [
  { label: 'Active learners', value: '186', trend: '+18 this month', icon: '👥' },
  { label: 'Avg. readiness', value: '82%', trend: '+7% improvement', icon: '📈' },
  { label: 'Courses live', value: '24', trend: '8 per level', icon: '🎓' },
  { label: 'Open skill gaps', value: '12', trend: 'Prioritized weekly', icon: '🎯' },
];

export const levelSummary = [
  {
    level: 'Beginner',
    value: 38,
    text: 'Foundations for new joiners, support staff, and non-technical teams.',
  },
  {
    level: 'Intermediate',
    value: 44,
    text: 'Operational workflows, ticket handling, field processes, and service quality.',
  },
  {
    level: 'Advanced',
    value: 18,
    text: 'Expert troubleshooting, optimization, security, leadership, and incident response.',
  },
];

export const upcomingTasks = [
  { title: 'Run RAN scenario workshop', date: 'Week 1', owner: 'Network Team' },
  { title: 'Review SLA escalation cases', date: 'Week 2', owner: 'Support Team' },
  { title: 'Complete advanced incident drill', date: 'Week 3', owner: 'NOC + Security' },
];

export const courseCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'network', label: 'Network' },
  { value: 'field', label: 'Field Operations' },
  { value: 'support', label: 'Customer Support' },
  { value: 'security', label: 'Security' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'leadership', label: 'Leadership' },
];

export const courseLevels = [
  { value: 'all', label: 'All Levels' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
];

export const courses = [
  {
    title: 'Telecom Industry Orientation',
    category: 'commercial',
    level: 'Beginner',
    duration: '1h 10m',
    icon: '🧭',
    description: 'Understand telecom business lines, service types, customers, departments, and daily operating language.',
    tags: ['Orientation', 'Basics'],
  },
  {
    title: 'Network Basics 101',
    category: 'network',
    level: 'Beginner',
    duration: '2h',
    icon: '📡',
    description: 'Learn sites, cells, radio coverage, switching, transport, internet routing, and service availability basics.',
    tags: ['Network', 'Foundations'],
  },
  {
    title: 'RAN Fundamentals',
    category: 'network',
    level: 'Beginner',
    duration: '2h 15m',
    icon: '📶',
    description: 'Learn antennas, base stations, handover, signal quality, coverage, capacity, and simple radio KPIs.',
    tags: ['Radio', 'Coverage'],
  },
  {
    title: 'Customer Experience Basics',
    category: 'support',
    level: 'Beginner',
    duration: '1h 45m',
    icon: '💬',
    description: 'Improve customer communication, empathy, complaint handling, SLA awareness, and first-call resolution behavior.',
    tags: ['CX', 'SLA'],
  },
  {
    title: 'Service Products 101',
    category: 'commercial',
    level: 'Beginner',
    duration: '1h 30m',
    icon: '📦',
    description: 'Understand mobile, fixed, enterprise, value-added services, bundles, and common product terminology.',
    tags: ['Products', 'Sales'],
  },
  {
    title: 'Field Safety Starter Kit',
    category: 'field',
    level: 'Beginner',
    duration: '1h 35m',
    icon: '🦺',
    description: 'Introduce site safety, personal protective equipment, access rules, reporting, and basic risk awareness.',
    tags: ['Safety', 'Site'],
  },
  {
    title: 'Ticketing System Essentials',
    category: 'support',
    level: 'Beginner',
    duration: '1h 20m',
    icon: '🎫',
    description: 'Create clean tickets, classify issues, attach evidence, choose priority, and document customer history.',
    tags: ['Tickets', 'Process'],
  },
  {
    title: 'Telecom Security Awareness',
    category: 'security',
    level: 'Beginner',
    duration: '1h 50m',
    icon: '🔐',
    description: 'Introduce secure access, phishing awareness, password hygiene, customer data protection, and reporting rules.',
    tags: ['Security', 'Awareness'],
  },
  {
    title: 'Core Network Overview',
    category: 'network',
    level: 'Intermediate',
    duration: '3h',
    icon: '🧠',
    description: 'Understand packet core, subscriber management, authentication, routing, charging, and service delivery.',
    tags: ['Architecture', 'Routing'],
  },
  {
    title: 'Transmission & Transport',
    category: 'network',
    level: 'Intermediate',
    duration: '2h 40m',
    icon: '🌐',
    description: 'Explain fiber, microwave, IP transport, backhaul, redundancy, capacity, and service availability.',
    tags: ['Fiber', 'Backhaul'],
  },
  {
    title: 'NOC Monitoring Basics',
    category: 'network',
    level: 'Intermediate',
    duration: '2h 10m',
    icon: '📊',
    description: 'Read alarms, dashboards, KPIs, health indicators, reports, and network monitoring priorities.',
    tags: ['NOC', 'KPI'],
  },
  {
    title: 'Field Installation Playbook',
    category: 'field',
    level: 'Intermediate',
    duration: '4h',
    icon: '🛠️',
    description: 'Apply standard procedures for site visits, installation, handover, evidence capture, and escalation.',
    tags: ['SOP', 'Install'],
  },
  {
    title: 'Site Maintenance Checklist',
    category: 'field',
    level: 'Intermediate',
    duration: '3h 20m',
    icon: '🧰',
    description: 'Use routine inspection checklists, preventive maintenance, fault documentation, and field reporting.',
    tags: ['Maintenance', 'Checklist'],
  },
  {
    title: 'Support Troubleshooting Flow',
    category: 'support',
    level: 'Intermediate',
    duration: '2h 30m',
    icon: '🎧',
    description: 'Guide agents through diagnostics, common failures, ticket classification, resolution paths, and handoffs.',
    tags: ['Diagnostics', 'Support'],
  },
  {
    title: 'Escalation Matrix Practice',
    category: 'support',
    level: 'Intermediate',
    duration: '1h 55m',
    icon: '☎️',
    description: 'Learn when to escalate, what information to include, and how to reduce repeated handoffs.',
    tags: ['Escalation', 'SLA'],
  },
  {
    title: 'Sales-to-Operations Handover',
    category: 'commercial',
    level: 'Intermediate',
    duration: '2h 05m',
    icon: '🤝',
    description: 'Connect commercial promises with technical delivery, service feasibility, installation timelines, and risk notes.',
    tags: ['Handover', 'Delivery'],
  },
  {
    title: 'Advanced RAN Optimization',
    category: 'network',
    level: 'Advanced',
    duration: '4h 30m',
    icon: '🚀',
    description: 'Analyze coverage gaps, interference, capacity pressure, neighbor relations, and KPI-driven optimization actions.',
    tags: ['Optimization', 'KPI'],
  },
  {
    title: 'Incident Response Command',
    category: 'security',
    level: 'Advanced',
    duration: '2h 50m',
    icon: '🚨',
    description: 'Define incident severity, communication rhythm, containment, customer impact updates, and post-incident review.',
    tags: ['Risk', 'Response'],
  },
  {
    title: 'Major Outage War Room',
    category: 'leadership',
    level: 'Advanced',
    duration: '3h 45m',
    icon: '🏁',
    description: 'Coordinate cross-functional teams during major outages using clear roles, timelines, updates, and decisions.',
    tags: ['Leadership', 'Crisis'],
  },
  {
    title: 'Capacity Planning & Forecasting',
    category: 'network',
    level: 'Advanced',
    duration: '3h 35m',
    icon: '📈',
    description: 'Forecast demand, review utilization trends, plan upgrades, prioritize investments, and protect customer experience.',
    tags: ['Planning', 'Forecast'],
  },
  {
    title: 'Security Compliance Audit',
    category: 'security',
    level: 'Advanced',
    duration: '3h 10m',
    icon: '🛡️',
    description: 'Prepare evidence, review access controls, validate procedures, document gaps, and drive corrective actions.',
    tags: ['Audit', 'Compliance'],
  },
  {
    title: 'Enterprise Service Design',
    category: 'commercial',
    level: 'Advanced',
    duration: '3h 25m',
    icon: '🏢',
    description: 'Design enterprise connectivity solutions, align requirements, assess feasibility, and define service assurance needs.',
    tags: ['Enterprise', 'Design'],
  },
  {
    title: 'Root Cause Analysis Lab',
    category: 'support',
    level: 'Advanced',
    duration: '2h 55m',
    icon: '🔎',
    description: 'Move beyond symptoms with evidence trees, timeline analysis, recurring fault patterns, and corrective actions.',
    tags: ['RCA', 'Quality'],
  },
  {
    title: 'Field Leadership & QA',
    category: 'field',
    level: 'Advanced',
    duration: '3h',
    icon: '✅',
    description: 'Lead field teams with quality audits, coaching routines, safety compliance, and performance feedback loops.',
    tags: ['QA', 'Leadership'],
  },
];

export const workflowSteps = [
  {
    number: '01',
    title: 'Orientation',
    text: 'Introduce company structure, telecom services, internal systems, and team responsibilities.',
  },
  {
    number: '02',
    title: 'Foundation Courses',
    text: 'Start with beginner content so every learner understands core language and service context.',
  },
  {
    number: '03',
    title: 'Role-Based Practice',
    text: 'Move learners into intermediate workflows for network, support, field, security, and commercial teams.',
  },
  {
    number: '04',
    title: 'Advanced Readiness',
    text: 'Validate operational readiness using simulations, incident drills, supervisor reviews, and final assessment.',
  },
];

export const resources = [
  { title: 'SOP Library', text: 'Standard operating procedures and team instructions.', icon: '📚' },
  { title: 'Network Diagrams', text: 'Architecture diagrams, traffic flows, and topology maps.', icon: '🗺️' },
  { title: 'Troubleshooting Guides', text: 'Step-by-step fixes for common service issues.', icon: '🔎' },
  { title: 'Escalation Matrix', text: 'Who to contact, when to escalate, and required details.', icon: '☎️' },
  { title: 'Assessment Bank', text: 'Quizzes, scenarios, and readiness checkpoints.', icon: '✅' },
  { title: 'Team Templates', text: 'Reusable forms, reports, and handover documents.', icon: '🧾' },
];

export const progressItems = [
  { label: 'Beginner Path', value: 94 },
  { label: 'Intermediate Path', value: 76 },
  { label: 'Advanced Path', value: 52 },
  { label: 'Final Assessment', value: 68 },
];

export const faqItems = [
  {
    question: 'What is the purpose of this website?',
    answer: 'It acts as a central reference platform for onboarding, telecom learning, procedures, and daily team support.',
  },
  {
    question: 'Can this be connected to real data later?',
    answer: 'Yes. You can later connect it with APIs, a CMS, internal documentation systems, authentication, or a learning management system.',
  },
  {
    question: 'Are the courses separated by levels?',
    answer: 'Yes. Courses are now divided into Beginner, Intermediate, and Advanced levels with dedicated filters in the course section.',
  },
  {
    question: 'Is the mobile menu fixed?',
    answer: 'Yes. The mobile navigation now uses a controlled React menu with clear links, readable colors, and responsive spacing.',
  },
  {
    question: 'Can I add more modules?',
    answer: 'Yes. Add new records to src/data/siteData.js and the UI will render them automatically with filtering and pagination.',
  },
];

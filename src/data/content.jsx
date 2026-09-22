export const profile = {
  name: ['LEWIS', 'ROBINSON'],
  dateline: ['NEWCASTLE UPON TYNE', 'MSc COMPUTER SCIENCE, DISTINCTION', 'AVAILABLE NOW'],
  email: 'lewisrobinson.cs@gmail.com',
  phone: '07923 529451',
  phoneHref: 'tel:07923529451',
  github: 'https://github.com/lewisr23',
  linkedin: 'https://linkedin.com/in/lewisr23',
  handle: 'lewisr23',
};

export const contactStrip = [
  { label: 'EMAIL', value: 'lewisrobinson.cs', href: `mailto:${profile.email}` },
  { label: 'GITHUB', value: profile.handle, href: profile.github },
  { label: 'LINKEDIN', value: profile.handle, href: profile.linkedin },
];

export const factFile = [
  ['Based', 'Newcastle upon Tyne'],
  ['Studied', 'MSc Computer Science, Distinction'],
  ['Before that', 'BA (Hons) Contemporary Music'],
  ['Weapon of choice', 'Java & Spring Boot'],
  ['Certified', 'AWS Developer Associate'],
  ['Shipped & live', 'restrum.uk, staticgrind.com'],
];

export const schemaDiagram = `┌──────────┐        ┌──────────────┐
│   USER   │───1:N─▶│   LISTING    │
└────┬─────┘        └──────┬───────┘
     │ 1:N                 │ 1:N
     ▼                     ▼
┌──────────┐        ┌──────────────┐
│ MESSAGE  │        │ LISTINGMEDIA │
└────┬─────┘        └──────────────┘
     │ N:1
     ▼
┌──────────────┐    ┌──────────────┐
│ CONVERSATION │    │   PASSPORT   │◀── provenance
└──────────────┘    └──────────────┘`;

export const mandateDiagram = `STANDING ORDER REFERENCE
┌──────┬─────────┬──────┐
│  IF  │  M0142  │ GOLD │
└──┬───┴────┬────┴───┬──┘
   │        │        │
   │        │        └─ plan tier
   │        └─ member number
   └─ club code

CSV / PDF ─▶ parsed client-side
          ─▶ matched to a member`;

export const receiptEndpoints = [
  ['POST', '/auth/register'],
  ['POST', '/auth/login'],
  ['GET', '/customers/me'],
  ['PUT', '/customers/{id}'],
  ['POST', '/orders'],
];

export const commissions = [
  {
    id: 'infinity-fitness',
    letter: 'IF',
    tint: 'c',
    title: 'Infinity Fitness',
    sub: 'Gym and sports medicine clinic · paid client work',
    prose: (
      <>
        A responsive site for a family-run gym, taken from requirements through to launch with the
        owner. The interesting part is the money: members sign themselves up, and the site issues
        each one a unique standing order reference, so the gym can match a bank payment to a person
        and a plan without paying a fee on every transaction.
      </>
    ),
    checks: [
      'Built and shipped solo, working directly with the owner from requirements to launch',
      'Self-service join flow that generates a unique standing order reference per member',
      'Browser-based tool that parses CSV and PDF bank statements client-side with pdf.js',
      'Flags lapsed standing orders and outdated prices, with no member data leaving the device',
    ],
    link: null,
    specimen: [
      { k: 'CLIENT', v: 'Infinity Fitness Gym & Sports Medicine Clinic' },
      { k: 'ROLE', v: 'Sole developer, direct client work' },
      { k: 'DATE', v: 'July 2026 to present' },
      { k: 'STATUS', v: 'SHIPPED, ONGOING', chip: true },
    ],
    visual: 'mandate',
  },
];

export const exhibits = [
  {
    id: 'restrum',
    letter: 'A',
    tint: 'a',
    title: 'Restrum',
    sub: 'Online instrument marketplace · live at restrum.uk',
    prose: (
      <>
        A marketplace for buying and selling instruments, built around a relational schema of
        ten-plus entities covering listings, media, conversations, saved items, follows and
        endorsements. Each instrument carries a provenance <em>“passport”</em> that follows its
        history between owners.
      </>
    ),
    checks: [
      'RESTful API and service layer in Spring Boot over PostgreSQL',
      'JWT authentication, account and session management',
      'React front end consuming the API',
      'Deployed to AWS, EC2 with PostgreSQL via Neon',
    ],
    link: { href: 'https://restrum.uk', label: 'OPEN THE LIVE SITE ↗' },
    specimen: [
      { k: 'STACK', v: 'Spring Boot · PostgreSQL · React' },
      { k: 'ROLE', v: 'Sole engineer' },
      { k: 'DATE', v: 'May to Aug 2026' },
      { k: 'STATUS', v: 'LIVE', chip: true, chipVariant: 'live' },
    ],
    visual: 'schema',
  },
  {
    id: 'staticgrind',
    letter: 'B',
    tint: 'b',
    title: 'StaticGrind',
    sub: 'Real-time browser graphics tool · 200+ users',
    prose: (
      <>
        A real-time image and video effects tool that runs entirely in the browser. Hybrid WebGL and
        Canvas 2D pipeline processing images, video and webcam input, with video export done
        client-side so nothing ever leaves the machine.
      </>
    ),
    checks: [
      'Built and shipped solo with React and Vite',
      "Real-time effects pipeline: WebGL where it pays, Canvas 2D where it doesn't",
      'Client-side video export, no server round trip',
      'Used by over 200 people',
    ],
    link: { href: 'https://staticgrind.com', label: 'OPEN THE LIVE SITE ↗' },
    specimen: [
      { k: 'STACK', v: 'React · Vite · WebGL · Canvas 2D' },
      { k: 'ROLE', v: 'Sole engineer' },
      { k: 'DATE', v: 'May to Aug 2026' },
      { k: 'STATUS', v: 'LIVE', chip: true, chipVariant: 'live' },
    ],
    visual: 'glitch',
  },
  {
    id: 'whistlestop',
    letter: 'C',
    tint: 'c',
    title: 'WhistleStop Coffee Hut',
    sub: 'Mobile ordering platform · five-person Agile team',
    prose: (
      <>
        A mobile-optimised ordering platform built by a team of five. I owned the backend side of it,
        the authentication and customer management, and wired it up to a UI the team prototyped in
        Figma.
      </>
    ),
    checks: [
      'Java, Spring Boot and MySQL behind the ordering flow',
      'Registration, login and JWT session handling',
      'Git-based collaboration, sprints, and integration against a Figma prototype',
    ],
    link: null,
    specimen: [
      { k: 'STACK', v: 'Java · Spring Boot · MySQL' },
      { k: 'ROLE', v: 'Backend developer, team of 5' },
      { k: 'DATE', v: 'Feb to May 2026' },
      { k: 'STATUS', v: 'DELIVERED', chip: true },
    ],
    visual: 'receipt',
  },
];

export const skills = [
  ['Backend', 'Java, Spring Boot, Spring Security, JPA / Hibernate, RESTful API design, service-layer architecture'],
  ['Databases', 'PostgreSQL, MySQL, relational schema design'],
  ['Frontend', 'React, JavaScript, HTML / CSS'],
  ['Languages', 'Java, Python, JavaScript, SQL, HTML / CSS'],
  ['Tools', 'Git, Maven, Vite, pdf.js, Google Cloud Platform, AWS'],
  ['Concepts', 'OOP, MVC, Agile, authentication & session management, concurrency'],
];

export const ledger = [
  {
    year: '2025/26',
    entry: 'MSc Computer Science',
    place: 'Newcastle University',
    note: 'Grade Distinction · Advanced Programming · Database Systems · Software Engineering & Team Project · Web Technologies · Computer Networks · Cybersecurity · AI Fundamentals · HCI',
  },
  {
    year: '2021/24',
    entry: 'BA (Hons) Contemporary Music',
    place: 'Newcastle University',
    note: 'Completed',
  },
  {
    year: '2026',
    entry: 'AWS Certified Developer Associate',
    place: 'Amazon Web Services · DVA-C02',
    note: 'CERTIFIED',
    chip: 'live',
  },
  {
    year: '2025',
    entry: 'CS50P: Introduction to Programming with Python',
    place: 'Harvard University · edX',
    note: 'Completed',
  },
];

export const tickerA = [
  'JAVA', 'SPRING BOOT', 'POSTGRESQL', 'SPRING SECURITY', 'REACT', 'JPA / HIBERNATE',
  'MYSQL', 'REST', 'JWT', 'GIT', 'MAVEN', 'AWS',
];

export const tickerB = [
  'SCHEMA DESIGN', 'SERVICE LAYERS', 'AUTH & SESSIONS', 'CONCURRENCY', 'OOP', 'MVC', 'AGILE',
];

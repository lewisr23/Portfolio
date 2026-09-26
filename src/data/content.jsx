export const profile = {
  name: ['LEWIS', 'ROBINSON'],
  dateline: ['NEWCASTLE UPON TYNE', 'MSc COMPUTER SCIENCE, DISTINCTION'],
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
  ['Stack', 'Laravel & Spring Boot'],
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

export const pipelineDiagram = `CLAIM ─▶ LOCK ROW ─▶ COMMIT

┌─────────┬─────────┬─────────┐
│  MAIL   │ NOTIFY  │  INDEX  │
└─────────┴─────────┴─────────┘
      REDIS QUEUE · OWN CONTAINER

SYNC   stock never oversold
ASYNC  everything else`;

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
      'Laravel / PHP REST API with Sanctum auth and real-time buyer-seller messaging over Reverb (WebSockets)',
      'Stripe Connect for split marketplace payments between buyers and sellers',
      'Elasticsearch-backed search with custom analyzers for prefixes, slang and model numbers, roughly 3x faster than the SQL path it replaced',
      'React 19 / TypeScript front end, deployed via Docker Compose to a VPS behind Cloudflare',
    ],
    link: { href: 'https://restrum.uk', label: 'OPEN THE LIVE SITE ↗' },
    specimen: [
      { k: 'STACK', v: 'Laravel · PHP · MySQL · Elasticsearch' },
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
    id: 'seedle',
    letter: 'C',
    tint: 'c',
    title: 'Seedle',
    sub: 'Gardening swap and planning platform · Laravel, MySQL, Elasticsearch',
    prose: (
      <>
        A gardening community and planning tool: pass on spare seeds, cuttings and tools to other
        growers, lay out a plot to scale with companion-planting conflicts flagged as you drag plants
        around, and log a harvest against the bed that grew it. Nothing is bought or sold, everything
        is swapped or given away.
      </>
    ),
    checks: [
      'Laravel 13 / PHP 8.4 REST API with Sanctum auth and service classes for search, checkout and garden logic',
      'Elasticsearch-backed faceted search with a plain-MySQL fallback, exercised directly by the test suite',
      'Claiming splits a row-locked DB transaction from an async pipeline of Redis-queued listeners (confirmation, notification, search reindex), with the queue worker scaling independently of the web tier',
      '129 PHPUnit tests, GitHub Actions CI running PHPUnit and Pint, Docker Compose across 8 services',
    ],
    link: { href: 'https://github.com/lewisr23/Seedle', label: 'VIEW THE REPO ↗' },
    specimen: [
      { k: 'STACK', v: 'Laravel · PHP · MySQL · Elasticsearch · Redis' },
      { k: 'ROLE', v: 'Sole engineer' },
      { k: 'DATE', v: 'Sept 2026' },
      { k: 'STATUS', v: 'BUILT', chip: true },
    ],
    visual: 'pipeline',
  },
];

export const skills = [
  ['Backend', 'Laravel, Spring Boot, Spring Security, Java, JPA / Hibernate, RESTful API design, service-layer architecture'],
  ['Databases', 'MySQL, PostgreSQL, Elasticsearch, Redis, relational schema design'],
  ['Frontend', 'React, JavaScript, HTML / CSS, SCSS'],
  ['Languages', 'PHP, Java, Python, JavaScript, SQL, HTML / CSS'],
  ['Tools', 'Docker, Composer, Git, GitHub Actions (CI), PHPUnit, Maven, Vite, pdf.js, Google Cloud Platform, AWS'],
  ['Concepts', 'OOP, MVC, Agile, authentication & session management, concurrency, distributed systems'],
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
  'LARAVEL', 'PHP', 'JAVA', 'SPRING BOOT', 'MYSQL', 'POSTGRESQL', 'ELASTICSEARCH', 'SPRING SECURITY',
  'REACT', 'JPA / HIBERNATE', 'REST', 'SANCTUM', 'GIT', 'DOCKER', 'MAVEN', 'AWS',
];

export const tickerB = [
  'SCHEMA DESIGN', 'SERVICE LAYERS', 'AUTH & SESSIONS', 'CONCURRENCY', 'DISTRIBUTED SYSTEMS', 'OOP', 'MVC', 'AGILE',
];

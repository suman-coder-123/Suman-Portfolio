/**
 * ---------------------------------------------------------------------------
 * PORTFOLIO CONTENT CONFIGURATION
 * ---------------------------------------------------------------------------
 * Everything visitors read lives in this file. You should not need to edit
 * components to update your portfolio.
 *
 * BEFORE DEPLOYING, update the items marked TODO:
 *   1. siteConfig.email          → your real email address
 *   2. siteConfig.whatsapp       → your real WhatsApp number (country code, digits only)
 *   3. siteConfig.url            → your live domain (used for canonical + SEO)
 *   4. projects[].demoUrl        → add a live demo URL, or leave empty
 *   5. projects[].githubUrl      → add a repository URL, or leave empty
 *   6. projects[].image          → optional real screenshot (see README)
 *   7. siteConfig.formEndpoint   → optional Formspree/endpoint for email delivery
 * ---------------------------------------------------------------------------
 */

export const siteConfig = {
  name: 'Suman Patidar',
  firstName: 'Suman',
  initials: 'SP',
  title: 'Full Stack Developer | Technical Trainer | Freelance Digital Partner',
  role: 'Full Stack Developer & Technical Trainer',
  availability: 'Available for Projects & Training',
  location: 'India',
  organization: 'EpixxAi Institute of Intelligence, Jaipur',
  experience: '2+ Years',

  // TODO: replace with your live domain (no trailing slash).
  url: 'https://sumanpatidar.com',

  // TODO: replace with your real email address.
  email: 'Suman920112@gamil.com',

  // TODO: replace with your real WhatsApp number in international format,
  // digits only. Example for India: 919876543210
  whatsapp: {
    number: '919201124005',
    display: '+91 9201124005',
  },

  socials: {
    linkedin: 'https://linkedin.com/in/suman-patidar-415b03348/',
    github: 'https://github.com/suman-coder-123',
  },

  /**
   * Optional email delivery for the contact form.
   * Leave empty ('') to use the built-in WhatsApp submission flow.
   * To enable email delivery, create a free form at https://formspree.io
   * and paste the endpoint here, e.g. 'https://formspree.io/f/xxxxxxxx'.
   */
  formEndpoint: '',

  seo: {
    title: 'Suman Patidar | Full Stack Developer, Java Trainer & Freelance Web Developer',
    description:
      "Explore Suman Patidar's portfolio — Full Stack Developer, Technical Trainer, and Freelance Digital Partner offering website development, Java Full Stack training, MERN Stack development, and e-commerce services.",
    keywords: [
      'Suman Patidar',
      'Full Stack Developer',
      'Java Full Stack Trainer',
      'MERN Stack Developer',
      'Freelance Web Developer India',
      'Technical Trainer',
      'React Developer',
      'Website Development',
      'E-commerce Services',
      'Programming Training',
    ],
    ogImage: '/og-image.png',
    twitterHandle: '',
    // Paste the verification token from Google Search Console (HTML tag method).
    googleSiteVerification: '',
  },
}

/** Pre-filled WhatsApp messages, kept here so every CTA stays consistent. */
export const whatsappMessages = {
  general:
    'Hello Suman, I visited your portfolio and would like to discuss your services.',
  website:
    "Hello Suman, I visited your portfolio. I'm interested in website / web application development. Could we discuss my project?",
  training:
    'Hello Suman, I want to learn programming and full-stack development. Please share the training details.',
  javaTraining:
    "Hello Suman, I'm interested in the Complete Java Full Stack Development training. Please share the course details, duration and fees.",
  ecommerce:
    "Hello Suman, I'm looking for help with my online store / e-commerce business. Could you share the details of your e-commerce services?",
  freelance:
    "Hello Suman, I'd like to hire you for a freelance development project. Here's what I have in mind:",
}
  
export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Full Stack Developer · Technical Trainer',
  headline: ['Build Your Skills.', 'Build Your Business.', 'Build Your Future.'],
  description:
    "I'm Suman Patidar — a Full Stack Developer, Technical Trainer, and Freelance Digital Partner helping businesses build powerful digital experiences and helping students become confident developers.",
  primaryCta: { label: 'Explore My Work', href: '#projects' },
  secondaryCta: { label: "Let's Connect", href: '#contact' },
  stats: [
    { value: '100+', label: 'Students trained' },
    { value: '2+', label: 'Years of experience' },
    { value: '4', label: 'Featured builds' },
  ],
  code: {
    filename: 'suman.config.js',
    lines: [
      { indent: 0, tokens: [{ t: 'const', c: 'kw' }, { t: ' suman ', c: 'var' }, { t: '= {', c: 'plain' }] },
      { indent: 1, tokens: [{ t: 'role', c: 'key' }, { t: ': ', c: 'plain' }, { t: "'Full Stack Developer'", c: 'str' }, { t: ',', c: 'plain' }] },
      { indent: 1, tokens: [{ t: 'teaches', c: 'key' }, { t: ': [', c: 'plain' }, { t: "'Java'", c: 'str' }, { t: ', ', c: 'plain' }, { t: "'MERN'", c: 'str' }, { t: ', ', c: 'plain' }, { t: "'C++'", c: 'str' }, { t: '],', c: 'plain' }] },
      { indent: 1, tokens: [{ t: 'builds', c: 'key' }, { t: ': ', c: 'plain' }, { t: "'digital products'", c: 'str' }, { t: ',', c: 'plain' }] },
      { indent: 1, tokens: [{ t: 'students', c: 'key' }, { t: ': ', c: 'plain' }, { t: '50', c: 'num' }, { t: '+', c: 'plain' }, { t: ',', c: 'plain' }] },
      { indent: 1, tokens: [{ t: 'available', c: 'key' }, { t: ': ', c: 'plain' }, { t: 'true', c: 'kw' }, { t: ',', c: 'plain' }] },
      { indent: 0, tokens: [{ t: '}', c: 'plain' }] },
    ],
  },
}

export const about = {
  eyebrow: 'About Me',
  title: 'Practical development, meaningful teaching.',
  paragraphs: [
    "I'm a developer and technical trainer passionate about building useful digital products and helping others understand technology.",
    'My work combines practical software development with hands-on programming education. I use modern web technologies to create websites, web applications, and business-focused digital solutions.',
    'Alongside development, I enjoy mentoring students, explaining complex concepts in simple language, and helping aspiring developers build real-world projects.',
    'My vision is to build a trusted personal brand that connects software development, education, and digital business services.',
  ],
  facts: [
    { label: 'Name', value: 'Suman Patidar' },
    { label: 'Role', value: 'Full Stack Developer & Technical Trainer' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Students Trained', value: '100+' },
    { label: 'Current Organization', value: 'EpixxAi Institute of Intelligence, Jaipur' },
    { label: 'Location', value: 'India' },
  ],
  cta: { label: 'Know More About My Work', href: '#services' },
}

export const services = [
  {
    id: 'web-development',
    number: '01',
    icon: 'globe',
    title: 'Website & Web Application Development',
    description:
      'I design and develop modern, responsive, and business-focused websites and web applications.',
    items: [
      'Business websites',
      'Portfolio websites',
      'Landing pages',
      'React applications',
      'Full-stack MERN applications',
      'Admin dashboards',
      'CRUD applications',
      'Website redesign',
      'Website deployment',
      'Website maintenance',
    ],
    cta: { label: 'Discuss Your Website', message: 'website' },
  },
  {
    id: 'technical-training',
    number: '02',
    icon: 'graduation',
    title: 'Programming & Technical Training',
    description:
      'Practical programming education designed to help students build strong fundamentals and real-world development skills.',
    items: [
      'Complete Java Full Stack Development',
      'MERN Stack Development',
      'React.js',
      'Next.js',
      'JavaScript',
      'Node.js',
      'Core Java',
      'Advanced Java',
      'C and C++',
      'Frontend Development',
      'Backend Development',
      'Project-based learning',
      'Interview preparation',
    ],
    cta: { label: 'Start Learning', message: 'training' },
  },
  {
    id: 'ecommerce',
    number: '03',
    icon: 'store',
    title: 'E-commerce & Marketplace Services',
    description:
      'I help businesses establish and improve their online selling presence.',
    items: [
      'E-commerce website development',
      'Online store setup',
      'Marketplace seller account assistance',
      'Amazon seller setup assistance',
      'Flipkart seller setup assistance',
      'Meesho seller setup assistance',
      'Product listing assistance',
      'Product catalog organization',
      'E-commerce website improvements',
      'Digital business consultation',
    ],
    cta: { label: 'Grow Your Online Business', message: 'ecommerce' },
  },
  {
    id: 'freelance',
    number: '04',
    icon: 'sparkles',
    title: 'Freelance Digital Services',
    description:
      'Flexible development and digital services for startups, entrepreneurs, and businesses.',
    items: [
      'Frontend development',
      'React development',
      'Website maintenance',
      'UI implementation',
      'Business website improvements',
      'Technical consultation',
      'Small business digital solutions',
      'Website optimization',
    ],
    cta: { label: 'Hire Me for a Project', message: 'freelance' },
  },
]

/**
 * Project links: no URLs are invented. Leave demoUrl / githubUrl empty and the
 * UI will hide them and offer a WhatsApp enquiry instead.
 * To use a real screenshot, import it in the project or place it in
 * src/assets/projects/ and set `image` to the imported path.
 */
export const projects = [
  {
    id: 'prewise-ai',
    title: 'PreWise AI',
    badge: 'AI Career Platform',
    category: 'AI-Powered Career & Interview Preparation Platform',
    description:
      'PreWise AI is an intelligent career preparation platform designed to help job seekers analyze their resumes, identify skill gaps, and prepare confidently for interviews.',
    features: [
      'Resume PDF upload',
      'Resume analysis',
      'ATS-oriented resume scoring',
      'Resume strengths and weaknesses',
      'Missing skills identification',
      'Interview preparation',
      'AI-generated interview questions',
      'Career preparation dashboard',
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Gemini AI',
      'PDF Processing',
    ],
    demoUrl: '',
    githubUrl: '',
    image: '',
    preview: 'ai',
  },
  {
    id: 'luxury-hotel',
    title: 'Luxury Hotel Website',
    badge: 'Hospitality Website',
    category: 'Hospitality & Website Development',
    description:
      'A premium hotel website designed to deliver an elegant digital experience for hospitality businesses and showcase rooms, amenities, and booking information.',
    features: [
      'Luxury hotel landing page',
      'Room and suite presentation',
      'Hotel amenities',
      'Image gallery',
      'Booking inquiry section',
      'Contact and reservation experience',
      'Responsive design',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
    demoUrl: '',
    githubUrl: '',
    image: '',
    preview: 'hotel',
  },
  {
    id: 'bus-agency',
    title: 'Bus Agency Website',
    badge: 'Travel & Booking',
    category: 'Travel & Business Website',
    description:
      'A professional travel and bus agency website created to help customers explore tour packages and connect directly with the business for bookings.',
    features: [
      'Tour package listings',
      'Religious tour packages',
      'Package information',
      'WhatsApp booking integration',
      'Customer inquiries',
      'Admin dashboard',
      'Responsive design',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'WhatsApp Integration',
    ],
    demoUrl: '',
    githubUrl: '',
    image: '',
    preview: 'travel',
  },
  {
    id: 'freshcart',
    title: 'FreshCart',
    badge: 'E-commerce Application',
    category: 'E-commerce & Quick Commerce',
    description:
      'FreshCart is a modern grocery shopping application inspired by quick-commerce platforms, designed to provide a smooth and user-friendly online shopping experience.',
    features: [
      'Product catalog',
      'Category-based browsing',
      'Product details',
      'Shopping cart',
      'Product discovery',
      'Responsive shopping interface',
      'Modern e-commerce design',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    demoUrl: '',
    githubUrl: '',
    image: '',
    preview: 'cart',
  },
]

export const skills = [
  {
    category: 'Frontend Development',
    icon: 'layout',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'React.js',
      'React Hooks',
      'React Router',
      'Next.js',
      'Tailwind CSS',
      'Responsive Web Design',
    ],
  },
  {
    category: 'Backend Development',
    icon: 'server',
    items: [
      'Node.js',
      'Express.js',
      'REST API Development',
      'Authentication',
      'JWT',
      'Middleware',
      'CRUD Operations',
      'Backend Integration',
    ],
  },
  {
    category: 'Java Development',
    icon: 'coffee',
    items: [
      'Core Java',
      'Advanced Java',
      'Object-Oriented Programming',
      'JDBC',
      'Servlets',
      'JSP',
      'Spring Framework',
      'Spring Boot',
      'Hibernate',
      'Spring Data JPA',
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'SQL', 'Database Design'],
  },
  {
    category: 'Programming Languages',
    icon: 'code',
    items: ['C', 'C++', 'Java', 'JavaScript'],
  },
  {
    category: 'Development Tools',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
  },
]

export const training = {
  eyebrow: 'Teaching & Training',
  title: 'Learn. Build. Become a Developer.',
  description:
    'I teach programming and full-stack development through practical explanations, real-world projects, and hands-on coding. My goal is to help students build strong fundamentals and become confident developers.',
  highlights: [
    { icon: 'briefcase', label: 'Technical Trainer at EpixxAi · Jaipur' },
    { icon: 'calendar', label: 'Training since 2024' },
    { icon: 'users', label: '50+ students trained' },
    { icon: 'code', label: 'Programming fundamentals' },
    { icon: 'layers', label: 'Full-stack development' },
    { icon: 'rocket', label: 'Practical project development' },
    { icon: 'heart', label: 'Student mentoring' },
    { icon: 'target', label: 'Interview preparation' },
  ],
  primaryProgram: {
    title: 'Complete Java Full Stack Development',
    description:
      'A structured, project-based path from programming fundamentals to deployable full-stack applications with Java and Spring.',
    format: ['Project-based learning', 'Hands-on coding', 'Interview preparation'],
    cta: { label: 'Enquire About Java Full Stack Training' },
    modules: [
      {
        title: 'Programming Fundamentals',
        items: [
          'Programming logic',
          'Variables and data types',
          'Operators',
          'Conditional statements',
          'Loops',
          'Arrays',
          'Functions and methods',
        ],
      },
      {
        title: 'Core Java',
        items: [
          'Classes and objects',
          'Object-Oriented Programming',
          'Inheritance',
          'Polymorphism',
          'Abstraction',
          'Encapsulation',
          'Exception handling',
          'Collections Framework',
          'Generics',
          'Multithreading',
          'File handling',
          'Java 8+ features',
        ],
      },
      {
        title: 'Advanced Java',
        items: [
          'JDBC',
          'Servlets',
          'JSP',
          'Web application fundamentals',
          'Session management',
          'MVC architecture',
          'Database connectivity',
        ],
      },
      {
        title: 'Database',
        items: [
          'SQL',
          'MySQL',
          'Joins',
          'Subqueries',
          'CRUD operations',
          'Database design',
        ],
      },
      {
        title: 'Frontend Development',
        items: [
          'HTML',
          'CSS',
          'JavaScript',
          'React.js',
          'Responsive design',
          'API integration',
        ],
      },
      {
        title: 'Backend Development',
        items: [
          'Spring Framework',
          'Spring Boot',
          'REST APIs',
          'Spring MVC',
          'Spring Data JPA',
          'Hibernate',
          'Authentication and authorization',
        ],
      },
      {
        title: 'Tools & Deployment',
        items: [
          'Git and GitHub',
          'Maven',
          'Postman',
          'Application deployment',
          'Real-world project development',
        ],
      },
    ],
  },
  programs: [
    { title: 'MERN Stack Development', icon: 'layers', description: 'MongoDB, Express, React and Node.js, end to end.' },
    { title: 'React.js Development', icon: 'layout', description: 'Components, hooks, routing and modern UI patterns.' },
    { title: 'Next.js Development', icon: 'rocket', description: 'Routing, rendering strategies and production builds.' },
    { title: 'JavaScript Programming', icon: 'code', description: 'ES6+, async patterns and clean, modern syntax.' },
    { title: 'Core Java', icon: 'coffee', description: 'OOP, collections, exceptions and strong fundamentals.' },
    { title: 'Advanced Java', icon: 'server', description: 'JDBC, Servlets, JSP and web application basics.' },
    { title: 'C and C++ Programming', icon: 'terminal', description: 'Logic building, memory basics and structured programming.' },
    { title: 'HTML, CSS & Frontend', icon: 'palette', description: 'Semantic markup, layout and responsive design.' },
    { title: 'Backend Fundamentals', icon: 'database', description: 'APIs, databases, authentication and deployment.' },
  ],
  studentCta: {
    title: 'Want to Learn These Skills?',
    description:
      'Start with the fundamentals, build real projects, and prepare for interviews with a practical, mentor-led approach.',
    button: 'Start Your Learning Journey',
  },
}

export const roadmap = {
  eyebrow: 'Learning Roadmap',
  title: 'Skills I Teach. Skills You Can Master.',
  description:
    'A clear, practical path from your first line of code to a portfolio that gets noticed.',
  steps: [
    { title: 'Programming Fundamentals', description: 'Logic, syntax and problem-solving habits.' },
    { title: 'Frontend Development', description: 'HTML, CSS, JavaScript and React interfaces.' },
    { title: 'Backend Development', description: 'APIs, authentication and server-side logic.' },
    { title: 'Database Management', description: 'Model, query and connect real data.' },
    { title: 'Full Stack Development', description: 'Bring frontend and backend together.' },
    { title: 'Real-World Projects', description: 'Build applications you can confidently explain.' },
    { title: 'Deployment & Portfolio', description: 'Ship your work and present it professionally.' },
    { title: 'Interview Preparation', description: 'Concepts, projects and confident communication.' },
  ],
  cta: { label: 'Start Your Learning Journey' },
}

export const experience = [
  {
    role: 'Technical Trainer',
    organization: 'EpixxAi Institute of Intelligence',
    initials: 'EI',
    location: 'Jaipur, India',
    period: 'Sep 2026 – Present',
    description:
      'Teaching programming and full-stack development across the same practical curriculum — programming fundamentals, Java Full Stack, MERN Stack, and project-based development — with a focus on real-world skills and confident student outcomes.',
    responsibilities: [
      'Teaching programming concepts',
      'Training students in web development',
      'Conducting practical coding sessions',
      'Explaining project architecture',
      'Mentoring students',
      'Supporting project development',
    ],
    tags: ['Java Full Stack', 'MERN Stack', 'React.js', 'Core Java', 'Project Mentoring'],
  },
  {
    role: 'Technical Trainer',
    organization: 'Groot Software',
    initials: 'GS',
    location: '',
    period: '2024 – Aug 2026',
    description:
      'Taught programming and full-stack development with a focus on practical learning, real-world projects, and helping students develop strong technical foundations.',
    responsibilities: [
      'Teaching programming concepts',
      'Training students in web development',
      'Conducting practical coding sessions',
      'Explaining project architecture',
      'Mentoring students',
      'Supporting project development',
    ],
    tags: ['Java Full Stack', 'MERN Stack', 'React.js', 'Core Java', 'Project Mentoring'],
  },
]

export const process = {
  eyebrow: 'My Work Process',
  title: 'How I Work',
  description:
    'A simple, transparent process that keeps your project clear from the first conversation to launch.',
  steps: [
    { number: '01', title: 'Discover', description: 'Understand the requirements, goals, and challenges.' },
    { number: '02', title: 'Plan', description: 'Define the solution, project scope, and development approach.' },
    { number: '03', title: 'Build', description: 'Develop, test, and refine the digital product.' },
    { number: '04', title: 'Deliver', description: 'Launch the project and provide appropriate support.' },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: "Have an Idea? Let's Build Something Great.",
  description:
    "Whether you need a website, technical training, e-commerce assistance, or a digital solution for your business, I'd love to hear about your project.",
  serviceOptions: [
    'Website / Web App Development',
    'Java Full Stack Training',
    'MERN Stack Training',
    'React.js / Next.js Training',
    'E-commerce / Marketplace Help',
    'Freelance Development Project',
    'Something Else',
  ],
}

export const footer = {
  text: 'Building digital experiences and helping people grow through technology.',
  roles: ['Full Stack Developer', 'Technical Trainer', 'Freelance Digital Partner'],
}

/** Bump this when your canonical domain changes — it is used by SEO + structured data. */
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: ['Full Stack Developer', 'Technical Trainer', 'Freelance Digital Partner'],
      description:
        'Full Stack Developer and Technical Trainer specializing in MERN Stack, Java Full Stack development, React.js and practical programming education. Technical Trainer at EpixxAi Institute of Intelligence, Jaipur, previously at Groot Software.',
      worksFor: {
        '@type': 'Organization',
        name: 'EpixxAi Institute of Intelligence',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
      knowsAbout: [
        'MERN Stack Development',
        'React.js',
        'Next.js',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Core Java',
        'Advanced Java',
        'Spring Boot',
        'C',
        'C++',
        'Technical Training',
        'E-commerce Services',
      ],
      sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.url}/#service`,
      name: 'Suman Patidar — Development & Training',
      url: siteConfig.url,
      description:
        'Website and web application development, Java Full Stack and MERN Stack training, e-commerce assistance and freelance digital services.',
      provider: { '@id': `${siteConfig.url}/#person` },
      areaServed: 'India',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} — Portfolio`,
      description: siteConfig.seo.description,
      publisher: { '@id': `${siteConfig.url}/#person` },
      inLanguage: 'en',
    },
  ],
}

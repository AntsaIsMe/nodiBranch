export const NAV_STRUCTURE = [
  {
    title: 'Home',
    path: '/',
    isExternal: false,
  },
  {
    group: 'Documentation',
    chapters: [
      {
        name: 'Introduction',
        path: '/introduction',
        pages: [
          { name: 'Presentation', path: '/introduction/presentation' },
          { name: 'Installation', path: '/introduction/installation' },
          { name: 'Quick Start', path: '/introduction/quick-start' },
        ],
      },
      {
        name: 'Usage Guide',
        path: '/usage',
        pages: [
          { name: 'Project Init', path: '/usage/project-init' },
          { name: 'Route Generation', path: '/usage/route-generation' },
          { name: 'Controller Generation', path: '/usage/controller-generation' },
          { name: 'Interactive Mode', path: '/usage/interactive-mode' },
          { name: 'Method Filtering', path: '/usage/method-filtering' },
          { name: 'CLI Reference', path: '/usage/cli-reference' },
        ],
      },
      {
        name: 'Core Concepts',
        path: '/core-concepts',
        pages: [
          { name: 'Project Structure', path: '/core-concepts/project-structure' },
          { name: 'Route Autoloading', path: '/core-concepts/route-autoloading' },
          { name: 'CRUD Standard', path: '/core-concepts/crud-standard' },
        ],
      },
      {
        name: 'Contributing',
        path: '/contributing',
        pages: [
          { name: 'Contributing', path: '/contributing/contributing' },
          { name: 'Extending CLI', path: '/contributing/extending-cli' },
          { name: 'Internal Architecture', path: '/contributing/internal-architecture' },
          { name: 'Model Templates', path: '/contributing/model-templates' },
        ],
      },
    ],
  },
];

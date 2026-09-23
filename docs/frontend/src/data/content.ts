import { ContentMap } from '../types/docs';

export const CONTENT_MAP: ContentMap = {
  // --- Introduction ---
  'presentation': {
    title: 'Presentation',
    sections: [
      {
        title: 'What is Nodibranch?',
        content: 'Nodibranch is a lightweight CLI tool designed to eliminate the repetitive setup work associated with starting new Express.js projects. Most developers face "setup fatigue": creating the same folders, configuring environment files, and writing the same basic CRUD functions for every new resource. Nodibranch shifts the focus from setup to feature development by automating the project skeleton.',
        examples: [
          {
            type: 'raw',
            code: 'Value Propositions:\\n- Instant Infrastructure: Zero to structured project in one command.\\n- Consistent Architecture: Professional folder structure that scales.\\n- CRUD on Autopilot: Pre-wired routes and controllers.\\n- Guided Experience: Interactive menu or raw CLI speed.',
            explanation: 'Core advantages of using Nodibranch'
          }
        ]
      }
    ]
  },
  'installation': {
    title: 'Installation',
    sections: [
      {
        title: 'Installation Options',
        content: 'Nodibranch can be installed globally for use across all projects, locally for a specific project, or executed on-the-fly without installation.',
        examples: [
          { type: 'cli', code: 'npm install -g nodibranch', explanation: 'Global installation for system-wide access' },
          { type: 'cli', code: 'nb -h', explanation: 'Testing the installation with the help flag' },
          { type: 'cli', code: 'npm install nodibranch', explanation: 'Local installation as a project dependency' },
          { type: 'cli', code: 'npx nodibranch -h', explanation: 'Running a local installation via npx' },
          { type: 'cli', code: 'npx nodibranch init', explanation: 'On-the-fly execution without installation' }
        ]
      }
    ]
  },
  'quick-start': {
    title: 'Quick Start',
    sections: [
      {
        title: 'Your First API',
        content: 'The `init` command bootstraps your entire environment. It doesn\'t just create folders; it handles the configuration, environment setup, and dependency installation in one shot.',
        examples: [
          { type: 'cli', code: 'nb init', explanation: 'Initializes the project using the global alias' },
          { type: 'cli', code: 'node bin/cli.mjs init', explanation: 'Initializes the project via the direct entry point' }
        ]
      },
      {
        title: 'The Process',
        content: 'The initialization follows a four-step flow: 1. Launch `nb init`. 2. Configure prompts (Port, DB Name, Customizations). 3. Automated setup (Templates copied, .env created, `npm install` executed). 4. Launch server via `npm start`.',
        examples: []
      }
    ]
  },
  // --- Usage Guide (Placeholders for future content) ---
  'project-init': { title: 'Project Init', sections: [{ title: 'Coming Soon', content: 'Content for project initialization will be added here.', examples: [] }] },
  'route-generation': { title: 'Route Generation', sections: [{ title: 'Coming Soon', content: 'Content for route generation will be added here.', examples: [] }] },
  'controller-generation': { title: 'Controller Generation', sections: [{ title: 'Coming Soon', content: 'Content for controller generation will be added here.', examples: [] }] },
  'interactive-mode': { title: 'Interactive Mode', sections: [{ title: 'Coming Soon', content: 'Content for interactive mode will be added here.', examples: [] }] },
  'method-filtering': { title: 'Method Filtering', sections: [{ title: 'Coming Soon', content: 'Content for method filtering will be added here.', examples: [] }] },
  'cli-reference': { title: 'CLI Reference', sections: [{ title: 'Coming Soon', content: 'Content for CLI reference will be added here.', examples: [] }] },
  // --- Core Concepts (Placeholders) ---
  'project-structure': { title: 'Project Structure', sections: [{ title: 'Coming Soon', content: 'Content for project structure will be added here.', examples: [] }] },
  'route-autoloading': { title: 'Route Autoloading', sections: [{ title: 'Coming Soon', content: 'Content for route autoloading will be added here.', examples: [] }] },
  'crud-standard': { title: 'CRUD Standard', sections: [{ title: 'Coming Soon', content: 'Content for CRUD standard will be added here.', examples: [] }] },
  // --- Contributing (Placeholders) ---
  'contributing': { title: 'Contributing', sections: [{ title: 'Coming Soon', content: 'Content for contributing will be added here.', examples: [] }] },
  'extending-cli': { title: 'Extending CLI', sections: [{ title: 'Coming Soon', content: 'Content for extending CLI will be added here.', examples: [] }] },
  'internal-architecture': { title: 'Internal Architecture', sections: [{ title: 'Coming Soon', content: 'Content for internal architecture will be added here.', examples: [] }] },
  'model-templates': { title: 'Model Templates', sections: [{ title: 'Coming Soon', content: 'Content for model templates will be added here.', examples: [] }] },
};

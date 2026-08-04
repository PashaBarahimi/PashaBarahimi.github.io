// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  // User/organization page: https://PashaBarahimi.github.io is served from the
  // domain root, so no `base` subpath is needed (a project page would need
  // `base: '/<repo-name>'`).
  site: 'https://pashabarahimi.github.io',
  output: 'static',
  vite: {
    // Lets pages `import education from '../data/education.yaml'`.
    // Build-time only — nothing ships to the client.
    plugins: [yaml()],
  },
});

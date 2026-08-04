// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // User/organization page: https://PashaBarahimi.github.io is served from the
  // domain root, so no `base` subpath is needed (a project page would need
  // `base: '/<repo-name>'`).
  site: 'https://pashabarahimi.github.io',
  output: 'static',
});

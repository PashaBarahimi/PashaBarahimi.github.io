// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  // Custom domain, served from its root, so no `base` subpath is needed (a
  // project page would need `base: '/<repo-name>'`). This value only feeds the
  // absolute URLs — canonical, og:url, og:image — so it has to match the domain
  // visitors actually land on, otherwise link previews point at the old host.
  // The domain itself is configured by public/CNAME plus the repo's Pages
  // settings; https://pashabarahimi.github.io redirects here.
  site: 'https://pasha.barahimi.me',
  output: 'static',
  // Emits sitemap-index.xml + sitemap-0.xml at build, with URLs derived from
  // `site` above. Generated rather than hand-written so it can't drift as pages
  // are added. public/robots.txt points crawlers at it.
  // /cv only forwards to the CV release; not a page worth indexing.
  integrations: [sitemap({ filter: (page) => !page.endsWith('/cv/') })],
  vite: {
    // Lets pages `import education from '../data/education.yaml'`.
    // Build-time only — nothing ships to the client.
    plugins: [yaml()],
  },
});

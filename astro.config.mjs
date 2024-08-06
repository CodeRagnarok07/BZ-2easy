import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  site: 'https://CodeRagnarok07.github.io',
  output: "static",
  base: '/BZ-2easy/',
  // trailingSlash: "always"
});

import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  site: "https://coderagnarok07.github.io",
  // base: 'BZ-2easy',
});
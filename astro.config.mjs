import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import netlify from "@astrojs/netlify/functions";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), sitemap()],
  output: "server",
  adapter: netlify(),
});
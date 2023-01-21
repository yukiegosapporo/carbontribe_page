import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://yukiegosapporo.github.io',
  base: '/carbontribe_page',
  integrations: [react(), tailwind()]
});
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mauricioalvarezj.tech',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
    }),
  ],
});

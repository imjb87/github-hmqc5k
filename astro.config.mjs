import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'vloML1TVw22P9nZLVqEWvgtt',
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
  ],
});

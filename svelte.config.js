import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html',
      precompress: false,
      strict: true
    }),
    alias: {
      $components: 'src/lib/components',
      $data: 'src/lib/data'
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path === '/favicon.ico' || path.startsWith('/galleries/')) {
          console.warn(`Skipping missing asset: ${path} (from ${referrer})`);
          return;
        }
        throw new Error(message);
      },
      handleMissingId: 'warn'
    }
  }
};

export default config;

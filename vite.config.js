import { defineConfig } from 'vite';
import leaf from '@leafphp/vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    leaf({
      input: [
        '@/css/app.css',
        '@/css/auth.css',
        '@/js/src/app.js',
        '@/js/src/auth.js',
        '@/js/src/authentication.js',
        '@/js/src/gates.js',
        '@/js/src/tools.js',
        '@/js/lib/Generator.js',
      ],
      publicDirectory: 'public_html',
      refresh: true,
      minify: true,
      sourcemap: false,
    }),
  ],
  resolve: {
    alias: {
      '@': 'app/views',
    },
  },
  build: {
    minify: true,
    sourcemap: false,
  },
});

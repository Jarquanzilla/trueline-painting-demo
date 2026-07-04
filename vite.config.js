import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        serviceAreas: resolve(__dirname, 'service-areas.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});

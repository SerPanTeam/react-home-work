// vite.config.ts
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: 'named',
      },
    }),
    react(),
  ],
  base: "/react-home-work/hw5/dist/",
});

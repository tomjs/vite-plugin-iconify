import { defineConfig } from 'vite';
import iconify from '@tomjs/vite-plugin-iconify';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    iconify({
      resources: ['https://unpkg.com/@iconify/json/json'],
      rotate: 3000,
      local: ['ant-design', 'ep'],
    }),
  ],
});

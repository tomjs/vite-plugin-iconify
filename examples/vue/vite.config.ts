import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import iconify from '../../dist/index.mjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    iconify({
      resources: ['https://unpkg.com/@iconify/json/json'],
      rotate: 3000,
      local: ['ant-design', 'ep'],
    }),
  ],
});

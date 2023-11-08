import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import iconify from '../../dist/index.mjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), iconify({})],
});

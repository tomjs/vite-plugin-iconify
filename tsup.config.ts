import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    target: ['es2021', 'node16'],
    clean: true,
    dts: true,
    splitting: true,
  },
  {
    entry: ['src/cli.ts'],
    format: ['esm'],
    target: ['es2021', 'node16'],
    clean: true,
    dts: false,
    splitting: true,
  },
]);

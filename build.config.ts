import { defineBuildConfig } from 'unbuild';
import pkg from './package.json';

export default defineBuildConfig([
  {
    entries: ['src/index'],
    externals: Object.keys(pkg.dependencies).concat(['vite']),
    declaration: true,
    failOnWarn: false,
    rollup: {
      emitCJS: true,
      inlineDependencies: true,
    },
  },
  {
    entries: ['src/cli/index.ts'],
    externals: Object.keys(pkg.dependencies).concat(['vite']),
    failOnWarn: false,
    rollup: {
      emitCJS: true,
      inlineDependencies: true,
    },
  },
]);

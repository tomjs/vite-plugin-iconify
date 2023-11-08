import { defineBuildConfig } from 'unbuild';
import pkg from './package.json';

export default defineBuildConfig({
  entries: ['src/index'],
  externals: Object.keys(pkg.dependencies).concat(['vite']),
  clean: true,
  declaration: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});

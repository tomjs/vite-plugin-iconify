#!/usr/bin/env node

import { cac } from 'cac';
import { createIconDataFile, VERSION } from './util';

const cli = cac('ti');

cli
  .command('[...sets]', 'create icon collection data based on @iconify/json in the project')
  .option('--path <path>', `[string] output file path.`, { default: 'src' })
  .option(
    '--name <name>',
    `[string] output file name. if tsconfig is exists, default is 'iconify.ts', or is 'iconify.js'`,
  )
  .option('--type <type>', `["esm" | "cjs"] output file type.`, {
    default: 'esm',
  })
  .action(async (sets, options) => {
    createIconDataFile(sets, options);
  });

cli.help();
cli.version(VERSION);

cli.parse();

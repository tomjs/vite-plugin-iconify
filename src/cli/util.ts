import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import { mkdirpSync, readJsonSync, ROOT } from '../utils';
import Logger from './logger';

const { version } = readJsonSync(path.join(ROOT, 'package.json'));

export const NAME = 'ti';

export const VERSION = version as string;

export interface IconifyDataOptions {
  /**
   * output file path
   */
  path?: string;
  /**
   * output file name
   */
  name?: string;
  /**
   * output file type
   */
  type?: 'esm' | 'cjs';
}

const logger = new Logger(NAME);

/**
 * Generate icon set information
 */
export function createIconDataFile(sets: string[], options: IconifyDataOptions) {
  if (!Array.isArray(sets) || sets.length === 0) {
    logger.warn('no icon sets found');
    return;
  }

  const opts = Object.assign({}, options);

  opts.type = opts.type || 'esm';
  opts.path = opts.path || 'src';
  opts.name =
    opts.name || fs.existsSync(path.join(cwd(), 'tsconfig.json')) ? 'iconify.ts' : 'iconify.js';

  // Read files in the json directory in the @iconify/json package in the node_modules directory
  const npmDir = path.join(cwd(), 'node_modules', '@iconify', 'json');
  const jsonDir = path.join(npmDir, 'json');
  if (!fs.existsSync(jsonDir)) {
    logger.warn('@iconify/json not found, needs to be installed first');
    return;
  }

  const outDir = path.join(cwd(), opts.path);
  if (!fs.existsSync(outDir)) {
    mkdirpSync(outDir);
  }

  const list: any[] = [];
  sets.forEach(set => {
    const jsonFile = path.join(jsonDir, `${set}.json`);
    if (!fs.existsSync(jsonFile)) {
      logger.warn(`icon set ${set} not found, please check whether it is correct`);
      return;
    }

    const { prefix, info, icons } = readJsonSync(jsonFile);

    list.push({
      prefix,
      name: info.name,
      total: info.total,
      version: info.version,
      icons: Object.keys(icons),
    });
  });

  if (Array.isArray(list) && list.length > 0) {
    fs.writeFileSync(
      path.join(outDir, opts.name),
      opts.type === 'esm'
        ? `export default ${JSON.stringify(list, null, 2)};`
        : `module.exports = ${JSON.stringify(list, null, 2)};`,
    );
  }
}

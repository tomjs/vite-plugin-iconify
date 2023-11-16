import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * url concat
 */
export function urlConcat(...urls: string[]) {
  return urls
    .map(s => (s || '').trim())
    .filter(s => s)
    .join('/')
    .replace(/\/+/g, '/')
    .replace(/:\//, '://');
}

export const ROOT = path.join(fileURLToPath(import.meta.url), '../..');

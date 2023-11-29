import fs from 'node:fs';
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

/**
 * Synchronously creates a directory. like `mkdir -p`
 * @param path dir path
 */
export function mkdirpSync(path: string) {
  if (fs.existsSync(path)) {
    return;
  }

  return fs.mkdirSync(path, { recursive: true });
}

/**
 * Synchronously removes files and directories
 */
export function rmSync(path: string) {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
}

/**
 * read json file
 * @param path read file path
 */
export function readJsonSync(path: string) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

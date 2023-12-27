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

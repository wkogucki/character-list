export function urlOptimizer(url: string, format: string = 'webp') {
  if (!url) return '';

  return url + `?format=${format}`;
}

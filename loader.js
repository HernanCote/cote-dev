'use client';

export default function loader({ src, width, quality }) {
  if (src.startsWith('https'))
    return src;

  return `https://hernancote.com/${src}?w=${width}&q=${quality || 75}`;
}
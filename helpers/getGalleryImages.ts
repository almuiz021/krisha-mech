import 'server-only';

import fs from 'fs';
import path from 'path';

export type Slide = {
  image: string;
  title: string;
};

export function getGallerySlides(): Slide[] {
  const galleryDir = path.join(process.cwd(), 'public/gallery');

  const files = fs
    .readdirSync(galleryDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();

  return files.map(file => ({
    image: `/gallery/${file}`,
    title: file.replace(/\.[^/.]+$/, ''),
  }));
}

import 'server-only';

import fs from 'fs';
import path from 'path';

export type Slide = {
  image: string;
  title: string;
};

export function getPageSlides(page: string): Slide[] {
  const galleryDir = path.join(process.cwd(), `public/${page}`);

  const files = fs
    .readdirSync(galleryDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();

  return files.map(file => ({
    image: `/${page}/${file}`, // ✅ FIXED
    title: file.replace(/\.[^/.]+$/, ''),
  }));
}

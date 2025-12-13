import { getGallerySlides } from '@/helpers/getGalleryImages';
import GallerySlides from './GallerySlides';

export default function Gallery() {
  const slides = getGallerySlides();

  if (!slides.length) return null;
  return (
    <section className="w-full py-6 text-center bg-bg">
      <h2 className="text-4xl font-bold text-panel">Gallery</h2>

      {/* underline */}
      <div className="mt-3 mx-auto h-1 w-24 bg-panel rounded-full"></div>

      <GallerySlides slides={slides} />
    </section>
  );
}

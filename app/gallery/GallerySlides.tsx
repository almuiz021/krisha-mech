'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { ourProducts, techPartnersProducts } from '@/data/productsContent';

function GallerySlides() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Build slides from productsContent, dedupe by slug
  const slides = useMemo(() => {
    const map = new Map<string, { image: any; title: string }>();

    const addCategoryList = (list: typeof ourProducts) =>
      list.forEach(cat =>
        cat.products.forEach((p: any) => {
          const slug = String(p.slug ?? '').trim();
          if (!slug) return;
          if (!map.has(slug)) {
            map.set(slug, { image: p.img, title: p.name ?? slug });
          }
        }),
      );

    addCategoryList(ourProducts);
    addCategoryList(techPartnersProducts);

    return Array.from(map.values());
  }, []);

  if (!slides.length) return null;

  return (
    <div className="max-w-7xl mx-auto my-12 space-y-4">
      {/* MAIN SLIDER */}
      <Swiper
        modules={[Autoplay, Thumbs]}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[16/9] sm:aspect-[5/2] lg:aspect-[21/9] overflow-hidden rounded-xl shadow-card-sm bg-white">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain p-4"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAIL STRIP */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        freeMode
        spaceBetween={8}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <button
              type="button"
              className="relative w-full aspect-[4/3] overflow-hidden rounded-md border border-muted hover:border-muted transition"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GallerySlides;

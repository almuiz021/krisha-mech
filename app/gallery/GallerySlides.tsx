'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

type Slide = {
  image: string;
  title: string;
};

function GallerySlides({ slides }: { slides: Slide[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!slides.length) return null;

  return (
    <div className="max-w-7xl mx-auto my-12 space-y-4">
      {/* MAIN SLIDER */}
      <Swiper
        modules={[Autoplay, Thumbs]}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-video sm:aspect-5/2 lg:aspect-21/9 overflow-hidden rounded-xl shadow-card-sm bg-white">
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

      {/* THUMBNAILS */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        freeMode
        centeredSlides
        centeredSlidesBounds
        slideToClickedSlide
        spaceBetween={8}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="thumbs-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="transition-opacity"
          >
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-md border">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GallerySlides;

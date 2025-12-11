'use client';

import { useState } from 'react';
import Image from 'next/image';
import { aboutUsContent } from '@/data/aboutUsContent';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

function GallerySlides() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
        {aboutUsContent.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[16/9] sm:aspect-[5/2] lg:aspect-[21/9] overflow-hidden rounded-xl shadow bg-white">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain p-4"
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
        {aboutUsContent.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <button
              type="button"
              className="relative w-full aspect-[4/3] overflow-hidden rounded-md border border-gray-200 hover:border-gray-400 transition"
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

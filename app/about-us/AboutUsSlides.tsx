'use client';

import Image from 'next/image';
import { aboutUsContent } from '@/data/aboutUsContent';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function AboutUsSlides() {
  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        {aboutUsContent.slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"
          >
            {/* Uniform slide frame */}
            <div
              className="
                relative
                w-full
                max-w-[420px]          /* avoid extremely wide cards */
                h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96  /* responsive fixed heights */
                overflow-hidden
                rounded-xl
                shadow
                bg-white
                flex
                items-center
                justify-center
              "
              aria-hidden={false}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-contain p-4"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AboutUsSlides;

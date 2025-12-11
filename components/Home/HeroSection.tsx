'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { heroSlides } from '@/data/heroContent';

export default function HeroSection() {
  const uid = useId().replace(/:/g, '-');
  const prevClass = `hero-prev-${uid}`;
  const nextClass = `hero-next-${uid}`;
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = heroSlides;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: slides[activeIndex]?.imgSrc || '',
    name: slides[activeIndex]?.name || '',
    description: slides[activeIndex]?.keyPhrase || '',
  };

  return (
    <section
      id={`hero-${uid}`}
      aria-roledescription="carousel"
      role="region"
      className="relative w-full scroll-mt-20 h-[calc(100vh-5rem)]"
    >
      {/* Prev Button */}
      <div className="absolute inset-y-0 left-4 flex items-center z-30 md:left-8">
        <button
          aria-label="Previous slide"
          className={`${prevClass} inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-muted transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-panel"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute inset-y-0 right-4 flex items-center z-30 md:right-8">
        <button
          aria-label="Next slide"
          className={`${nextClass} inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-muted transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-panel"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
        loop
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        className="w-full h-full"
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className={`h-full ${slide.bgClass ?? 'bg-cream'}`}
          >
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 md:px-10 py-8 md:py-12">
              {/* TEXT */}
              <div className="flex-1 flex flex-col justify-center w-full md:pr-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-panel mb-3 text-center md:text-left">
                  {slide.name}
                </h1>

                {slide.keyPhrase && (
                  <p className="text-base md:text-lg text-text-main mb-5 text-center md:text-left max-w-2xl">
                    {slide.keyPhrase}
                  </p>
                )}

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Link
                    href={slide.href ?? '/#contactus'}
                    className="inline-flex items-center bg-brand hover:bg-brand-600 text-on-brand px-4 py-2 rounded-md transition"
                  >
                    Get Quote
                  </Link>

                  <Link
                    href={slide.href ? `${slide.href}#details` : '/#products'}
                    className="inline-flex items-center border border-muted text-panel px-4 py-2 rounded-md hover:bg-cream transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* IMAGE */}
              <div className="flex-1 relative w-full max-w-[720px] h-56 sm:h-72 md:h-96 lg:h-[520px] rounded-3xl overflow-hidden border border-muted bg-white">
                <Image
                  src={slide.imgSrc}
                  alt={slide.alt ?? slide.name}
                  fill
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Screen Reader Live Region */}
      <div
        className="sr-only"
        aria-live="polite"
      >
        Slide {activeIndex + 1} of {slides.length}: {slides[activeIndex]?.name}
      </div>

      {/* JSON-LD */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

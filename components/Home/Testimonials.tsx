'use client';

import { useId } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsHeader, testimonials } from '@/data/testimonialsContent';
import TestimonialCard from '../cards/TestimonialCard';

export default function Testimonials() {
  const uid = useId().replace(/:/g, '-');
  const prevClass = `testimonial-prev-${uid}`;
  const nextClass = `testimonial-next-${uid}`;

  return (
    <section
      id="testimonials"
      className="scroll-mt-36 py-16 px-4 sm:px-6 lg:px-12 bg-bg"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-brand">
          {testimonialsHeader.title}
        </h2>

        <p className="mt-4 text-panel text-base sm:text-lg max-w-2xl mx-auto">
          {testimonialsHeader.subtitle}
        </p>

        <div className="relative px-6 sm:px-10 py-10">
          {/* Prev Button */}
          <button
            className={`
              ${prevClass}
              absolute top-1/2 left-1
              -translate-y-1/2
              z-10 h-9 w-9
              rounded-full bg-white border border-muted
              flex items-center justify-center
              shadow-md hover:shadow-lg
              text-panel
              transition
            `}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            className={`
              ${nextClass}
              absolute top-1/2 right-1
              -translate-y-1/2
              z-10 h-9 w-9
              rounded-full bg-white border border-muted
              flex items-center justify-center
              shadow-md hover:shadow-lg
              text-panel
              transition
            `}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[FreeMode, Pagination, Navigation]}
            loop={true}
            freeMode={false}
            navigation={{
              prevEl: `.${prevClass}`,
              nextEl: `.${nextClass}`,
            }}
            pagination={{ clickable: true }}
            spaceBetween={18}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {testimonials.map(item => (
              <SwiperSlide
                key={item.id}
                className="my-3 transition duration-500"
              >
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

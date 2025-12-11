import Image from 'next/image';
import { aboutUsContent } from '@/data/aboutUsContent';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function AboutUsSlides() {
  return (
    <div className="max-w-7xl mx-auto my-12">
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
            className="h-72 flex items-center justify-center bg-white shadow rounded-xl"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              className="object-contain w-full h-full p-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default AboutUsSlides;

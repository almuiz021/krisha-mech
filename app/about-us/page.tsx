'use client';import Image from 'next/image';
import { aboutUsContent } from '@/data/aboutUsContent';
import AboutUsSlides from './AboutUsSlides';

export default function AboutUs() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row">
        {/* LEFT TEXT BLOCK */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-base font-semibold text-brand uppercase mb-3 tracking-wider">
              {aboutUsContent.sectionLabel}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-panel leading-snug mb-6">
              {aboutUsContent.title}
            </h1>
          </div>

          <div>
            {aboutUsContent.paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-text-main leading-relaxed mb-4 max-w-2xl"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE + STATS */}
        <div className="flex-1 flex flex-col gap-6">
          {/* IMAGE */}
          <div className="w-full rounded-xl overflow-hidden shadow-card-sm h-64 sm:h-72 md:h-80  bg-white border border-muted">
            <Image
              src={aboutUsContent.image}
              alt="About Us"
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            {aboutUsContent.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow-card-sm rounded-xl p-6 text-center border border-muted"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-text-main/80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutUsSlides />
    </section>
  );
}

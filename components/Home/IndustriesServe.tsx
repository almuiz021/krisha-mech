'use client';

import Link from 'next/link';
import IndustryCard from '../cards/IndustryCard';
import { industries, industriesHeader } from '@/data/indServeContent';

export default function IndustriesServe() {
  return (
    <section
      id="weserve"
      className="bg-bg py-16 px-4 sm:px-6 lg:px-12 scroll-mt-6"
    >
      <div
        className="
      max-w-7xl mx-auto
      grid
      grid-cols-1
      lg:grid-cols-[38%_62%]
      gap-8 lg:gap-12
      items-center
    "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand">
            {industriesHeader.heading}
          </h2>

          <p className="mt-4 text-panel text-base sm:text-lg max-w-md">
            {industriesHeader.sub}
          </p>

          <p className="mt-3 text-brand font-medium">
            {industriesHeader.contactPhrase}
          </p>

          <Link
            href={industriesHeader.ctaHref}
            className="
          mt-6 inline-flex items-center gap-2
          bg-linear-to-r from-brand-600 to-brand
          text-on-brand
          px-6 py-3
          rounded-xl
          shadow-md
          hover:shadow-xl hover:scale-[1.03]
          transition-all duration-300
        "
          >
            {industriesHeader.ctaLabel}
          </Link>
        </div>

        {/* RIGHT GRID */}
        <div className="w-full">
          <div
            className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          place-items-center
        "
          >
            {industries.slice(0, 5).map((item, idx) => (
              <IndustryCard
                key={idx}
                title={item.title}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

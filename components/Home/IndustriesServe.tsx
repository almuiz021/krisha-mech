'use client';

import Link from 'next/link';
import IndustryCard from '../cards/IndustryCard';
import { industries, industriesHeader } from '@/data/indServeContent';

export default function IndustriesServe() {
  return (
    <section
      id="weserve"
      className="bg-bg py-16 px-4 sm:px-6 lg:px-12 scroll-mt-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 relative">
        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col justify-center lg:pl-12 items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand">
            {industriesHeader.heading}
          </h2>

          <p className="mt-4 text-panel text-base sm:text-lg max-w-lg">
            {industriesHeader.sub}
          </p>

          <p className="mt-3 text-brand font-medium cursor-pointer">
            {industriesHeader.contactPhrase}
          </p>

          {/* CTA BUTTON */}
          <Link
            href={industriesHeader.ctaHref}
            className="
              cursor-pointer mt-6 
              inline-flex items-center gap-2
              bg-linear-to-r from-brand-600 to-brand
              text-on-brand px-6 py-3 rounded-xl shadow-md w-fit
              hover:opacity-95 hover:scale-[1.03] hover:shadow-xl
              transition-all duration-300 ease-in-out
            "
          >
            {industriesHeader.ctaLabel}
          </Link>
        </div>

        {/* LEFT GRID OF CARDS */}
        <div className="flex flex-col-reverse lg:flex-col mx-8 md:mx-0 justify-center items-center lg:items-start gap-6 mt-6 lg:mt-0 lg:w-1/2">
          {/* TOP ROW — first 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 3).map((item, idx) => (
              <IndustryCard
                key={item.id}
                idx={idx}
                iconName={item.iconName}
                title={item.title}
                info={item.info}
              />
            ))}
          </div>

          {/* BOTTOM ROW — last 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {industries.slice(3, 5).map((item, idx) => (
              <IndustryCard
                key={item.id}
                idx={idx + 3}
                iconName={item.iconName}
                title={item.title}
                info={item.info}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import WhyCard from '../cards/WhyUsCard';
import { whyUsHeader, whyUsItems } from '@/data/whyUsContent';

export default function WhyUsSection() {
  return (
    <section
      id="whyus"
      className="scroll-mt-16 py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand leading-tight">
          {whyUsHeader.title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-panel max-w-3xl mx-auto">
          {whyUsHeader.subtitle}
        </p>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyUsItems.map((item, idx) => (
            <WhyCard
              key={item.id}
              idx={idx}
              iconName={item.icon}
              title={item.title}
              info={item.info}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

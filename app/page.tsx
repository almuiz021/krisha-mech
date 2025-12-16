'use client';

import BrandSection from '@/components/Home/BrandSection';
import ContactUs from '@/components/Home/ContactUs';
import HeroSection from '@/components/Home/HeroSection';
import IndustriesServe from '@/components/Home/IndustriesServe';
import Testimonials from '@/components/Home/Testimonials';
import WhyUs from '@/components/Home/WhyUs';
import { useState } from 'react';

export default function HomePage() {
  const [mcName, setMCName] = useState<string | undefined>(undefined);

  return (
    <>
      <BrandSection />
      <HeroSection setMCName={setMCName} />
      <WhyUs />
      <IndustriesServe />
      <Testimonials />
      <ContactUs mcName={mcName} />
    </>
  );
}

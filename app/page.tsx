'use client';

import ContactUs from '@/components/Home/ContactUs';
import HeroSection from '@/components/Home/HeroSection';
import IndustriesServe from '@/components/Home/IndustriesServe';
import Testimonials from '@/components/Home/Testimonials';
import WhyUs from '@/components/Home/WhyUs';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <IndustriesServe />
      <Testimonials />
      <ContactUs />
    </>
  );
}

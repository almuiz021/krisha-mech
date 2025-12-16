'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Section from '../layout-ui/SectionWrap';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const bgPulseVariants: Variants = {
  pulse: {
    opacity: [0.25, 0.4, 0.25],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

interface AnnouncementBarProps {
  children: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (!isHome) return null;

  return (
    <Section sectionClassName="relative h-8 overflow-hidden">
      {/* Animated background */}
      <motion.div
        aria-hidden
        className="
          absolute inset-0
          bg-gradient-to-r
          from-brand/10
          via-cream
          to-brand/10
        "
        variants={bgPulseVariants}
        animate="pulse"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
          className="w-full"
        >
          <div className="px-10">
            <p
              className="
                text-panel
                text-lg sm:text-xl
                font-semibold
                uppercase
                tracking-wide
                whitespace-nowrap
              "
              style={{
                textShadow: '0 1px 1px rgba(0,0,0,0.15)',
              }}
            >
              {children}
            </p>
          </div>
        </Marquee>
      </motion.div>
    </Section>
  );
};

export default AnnouncementBar;

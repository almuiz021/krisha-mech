import {
  Standy,
  FanucRoboCut,
  StarVisionDX2720,
  JohnLeePrecisionGrinding,
  EDM_Tap_Rmv,
} from '@/assets/AssetsExport';

export interface HeroSlide {
  name: string;
  keyPhrase?: string;
  imgSrc: any;
  href?: string;
  bgClass?: string;
  alt?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    name: 'High-Precision WEDM Technology for Modern Tooling',
    keyPhrase: 'Accuracy • Stability • Micro-Tolerance Capability',
    imgSrc: FanucRoboCut,
    href: '/products/wedm-fanuc',
    bgClass: 'bg-cream',
    alt: 'Fanuc Robocut WEDM machine',
  },

  {
    name: 'Advanced EDM Solutions for Complex Mould & Die Work',
    keyPhrase:
      'Consistent Spark Control • Fine Surface Finish • High Reliability',
    imgSrc: StarVisionDX2720,
    href: '/products/edm-fanuc',
    bgClass: 'bg-bg',
    alt: 'Fanuc EDM system for high-precision applications',
  },

  {
    name: 'Standy Series – Robust & Affordable WEDM Machines',
    keyPhrase: 'Trusted for Tool-Room, Production & Precision Cutting',
    imgSrc: JohnLeePrecisionGrinding,
    href: '/products/wedm-standy',
    bgClass: 'bg-cream',
    alt: 'Standy WEDM technology showcase',
  },

  {
    name: 'Krisha + Robocut EDM Integration',
    keyPhrase: 'Enhanced Performance for Tech-Partner Manufacturing Ecosystems',
    imgSrc: EDM_Tap_Rmv,
    href: '/products/edm-krisha',
    bgClass: 'bg-bg',
    alt: 'Krisha EDM integration with tech partner platforms',
  },
];

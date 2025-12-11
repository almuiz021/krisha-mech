import { Standy, Fanuc, RoboCut } from '@/assets/AssetsExport';

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
    name: 'Precision Engineering for Modern Manufacturing',
    keyPhrase: 'Quality • Reliability • Sustainability',
    imgSrc: Standy,
    href: '/#contactus',
    bgClass: 'bg-cream', // soft cream background
    alt: 'High precision machining center by Krisha',
  },

  {
    name: 'Vertical Machining Center – High Speed & Accuracy',
    keyPhrase: 'Designed for performance-driven production environments.',
    imgSrc: Fanuc,
    href: '/products/vertical-machining-center',
    bgClass: 'bg-bg', // light page background for contrast
    alt: 'Krisha VMC machine showcase',
  },

  {
    name: 'Advanced Wire Cut EDM Solutions',
    keyPhrase: 'Superior cutting precision for intricate engineering tasks.',
    imgSrc: RoboCut,
    href: '/products/edm-machine-standy',
    bgClass: 'bg-cream',
    alt: 'Wire Cut EDM machine display',
  },

  {
    name: 'Reliable CNC Solutions for Every Industry',
    keyPhrase: 'Trusted by engineers across automotive, aerospace & tooling.',
    imgSrc: Standy,
    href: '/#products',
    bgClass: 'bg-bg',
    alt: 'CNC machines lineup by Krisha',
  },
];

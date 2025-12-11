import { StaticImageData } from 'next/image';
import { Fanuc, KrishaLogo, RoboCut, Standy } from '@/assets/AssetsExport';

export const aboutUsContent: AboutUsContent = {
  sectionLabel: 'How It Started',
  title: 'Engineering Innovation for a Smarter Future',
  paragraphs: [
    'Krisha Mechatronics was founded by a team of passionate engineers and innovators driven by a shared mission: to create intelligent automation solutions that empower industries worldwide. From humble beginnings, the company set out to merge mechanical engineering, electronics, and smart control systems into powerful, efficient technologies.',
    'Guided by an unwavering commitment to quality and innovation, Krisha Mechatronics has grown into a trusted partner for businesses seeking advanced automation systems. Today, our solutions support diverse industries—enabling higher productivity, precision, and reliability for clients across the globe.',
  ],
  image: KrishaLogo,
  stats: [
    { value: '12+', label: 'Years of Expertise' },
    { value: '150+', label: 'Completed Automation Projects' },
    { value: '500+', label: 'Satisfied Clients' },
    { value: '30+', label: 'Industries Served' },
  ],
  slides: [
    { image: Standy, title: 'Standy MC' },
    { image: KrishaLogo, title: 'Control Panel' },
    { image: RoboCut, title: 'Mechatronics System' },
    { image: KrishaLogo, title: 'Mechatronics System' },
    { image: Standy, title: 'Mechatronics System' },
    { image: KrishaLogo, title: 'Mechatronics System' },
    { image: Fanuc, title: 'Automation Module' },
    { image: KrishaLogo, title: 'Mechatronics System' },
    { image: Fanuc, title: 'Mechatronics System' },
  ],
};

////////////////////////////////////

export interface AboutUsStat {
  value: string;
  label: string;
}

export interface AboutUsSlides {
  image: string | StaticImageData;
  title: string;
}

export interface AboutUsContent {
  sectionLabel: string;
  title: string;
  paragraphs: string[];
  image: string | StaticImageData;
  stats: AboutUsStat[];
  slides: AboutUsSlides[];
}

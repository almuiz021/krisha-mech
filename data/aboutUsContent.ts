import { StaticImageData } from 'next/image';
import {
  EDM_Tap_Rmv,
  Fanuc,
  FanucRoboCut,
  JohnLeePrecisionGrinding,
  KrishaLogo,
  RoboCut,
  RoboDrill,
  Standy,
  StarVisionDX2720,
} from '@/assets/AssetsExport';

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
    { image: FanucRoboCut, title: 'Robocut WEDM System' },
    { image: StarVisionDX2720, title: 'Inspection & Vision System' },
    { image: EDM_Tap_Rmv, title: 'EDM Tap Removal Unit' },
    { image: JohnLeePrecisionGrinding, title: 'Precision Grinding System' },
    { image: RoboCut, title: 'High-Speed WEDM System' },
    { image: Fanuc, title: 'Automation Module' },
    { image: RoboDrill, title: 'CNC Drilling & Tapping Module' },
    { image: KrishaLogo, title: 'Mechatronics Control Interface' },
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

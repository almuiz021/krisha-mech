import {
  Standy,
  FanucRoboCut,
  StarVisionDX2720,
  JohnLeePrecisionGrinding,
  EDM_Tap_Rmv,
  FanucRoboShot,
  WEDM_KM640AWT,
  WEDM_KM530,
  EDM_ZNC450,
  DEDM_KM43C,
  DEDM_KM43,
  RoboDrill,
  RoboCut,
} from '@/assets/AssetsExport';

export interface HeroSlide {
  name: string;
  keyPhrase?: string;
  imgSrc: any;
  href?: string;
  bgClass?: string;
  alt?: string;
  mcName?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    name: 'ROBODRILL',
    keyPhrase:
      'High-Speed, High-Precision and High-Efficiency Compact Machining Center',
    imgSrc: RoboDrill,
    href: '/products/fanuc-robodrill',
    bgClass: 'bg-cream',
    alt: 'ROBODRILL – High-speed compact machining center',
  },
  {
    name: 'ROBOCUT',
    keyPhrase:
      'High-Reliability and High-Performance Wire Electrical-Discharge Machine',
    imgSrc: FanucRoboCut,
    href: '/products/fanuc-robocut',
    bgClass: 'bg-bg',
    alt: 'ROBOCUT – High-performance wire EDM machine',
  },

  /* FANUC / OTHERS */
  {
    name: 'ROBOSHOT',
    keyPhrase:
      'High-Performance, High-Reliability and High-Productivity Electric Injection Molding Machine',
    imgSrc: FanucRoboShot,
    href: '/products/roboshot',
    bgClass: 'bg-cream',
    alt: 'ROBOSHOT – Electric injection molding machine',
  },
  {
    name: 'STARVISION',
    keyPhrase:
      'High Quality Double Column Machining Centre, 5 Axis & Beam and Column Moving Machining Centre',
    imgSrc: StarVisionDX2720,
    href: '/products/starvision-double-column',
    bgClass: 'bg-bg',
    alt: 'STARVISION – Double column machining centre',
  },
  {
    name: 'JOENLIH',
    keyPhrase: 'Taiwan’s Best High Precision Surface Grinding Machines',
    imgSrc: JohnLeePrecisionGrinding,
    href: '/products/joenlih-grinding-mc',
    bgClass: 'bg-cream',
    alt: 'JOENLIH – High precision surface grinding machines',
  },

  /* KRISHA – WIRE EDM */
  {
    name: 'KRISHA 5 AXIS ADVANCED MID-SPEED MOLY WIRE EDM WITH AWT',
    keyPhrase:
      'The best in class Moly wire EDM with Automatic Wire Threading Technology',
    imgSrc: WEDM_KM640AWT,
    href: '/products/krisha-wedm-awt',
    bgClass: 'bg-bg',
    alt: 'KRISHA 5 Axis Moly Wire EDM with AWT',
  },
  {
    name: 'KRISHA 5 AXIS',
    keyPhrase: 'Advanced Mid-Speed 5 Axis CNC Moly Wire EDM',
    imgSrc: WEDM_KM530,
    href: '/products/krisha-moly-wire-edm',
    bgClass: 'bg-cream',
    alt: 'KRISHA 5 Axis CNC moly wire EDM',
  },
  {
    name: 'KRISHA HIGH SPEED',
    keyPhrase: 'The Fastest Moly Wire EDM Cutting Machine in the Segment',
    imgSrc: WEDM_KM530,
    href: '/products/krisha-dk-series',
    bgClass: 'bg-bg',
    alt: 'KRISHA High Speed moly wire EDM',
  },

  /* KRISHA – EDM */
  {
    name: 'KRISHA STANDY CNC',
    keyPhrase: 'Mirror Finish EDM – The Mold Maker’s Choice',
    imgSrc: Standy,
    href: '/products/krisha-standy-mc',
    bgClass: 'bg-cream',
    alt: 'KRISHA Standy CNC mirror finish EDM',
  },
  {
    name: 'KRISHA ZNC',
    keyPhrase: 'High Performance ZNC EDM',
    imgSrc: EDM_ZNC450,
    href: '/products/krisha-edm-znc',
    bgClass: 'bg-bg',
    alt: 'KRISHA ZNC high performance EDM',
  },

  /* KRISHA – DRILL EDM */
  {
    name: 'KRISHA CNC DRILL',
    keyPhrase: 'Affordable Best-in-Class CNC Drill EDM',
    imgSrc: DEDM_KM43C,
    href: '/products/krisha-dedm-cnc_znc',
    bgClass: 'bg-cream',
    alt: 'KRISHA CNC drill EDM machine',
  },
  {
    name: 'KRISHA ZNC DRILL',
    keyPhrase: 'Most Reliable ZNC Drill EDM',
    imgSrc: DEDM_KM43,
    href: '/products/krisha-dedm-cnc_znc',
    bgClass: 'bg-bg',
    alt: 'KRISHA ZNC drill EDM machine',
  },
  {
    name: 'KRISHA PORTABLE',
    keyPhrase: 'Super Fast Drill & Tap Remover EDM',
    imgSrc: EDM_Tap_Rmv,
    href: '/products/krisha-tap-remover',
    bgClass: 'bg-cream',
    alt: 'KRISHA portable drill and tap remover EDM',
  },
];

import {
  Plane,
  Wrench,
  BriefcaseMedical,
  Car,
  DecimalsArrowRight,
} from 'lucide-react';

export const industriesHeader = {
  heading: 'Industries We Serve',
  sub: 'We supply precision machining and engineering solutions across diverse industries.',
  contactPhrase: 'Interested? Please contact us.',
  ctaLabel: 'Let’s Talk →',
  ctaHref: '/#contactus',
};

export const industries = [
  {
    id: 'aerospace',
    iconName: Plane,
    title: 'Aerospace',
    info: 'High-precision components and reliable machining solutions tailored for aerospace.',
  },
  {
    id: 'mold-die',
    iconName: Wrench,
    title: 'Mold & Die Making',
    info: 'Custom molds and dies manufactured with accuracy and durability for volume production.',
  },
  {
    id: 'medical',
    iconName: BriefcaseMedical,
    title: 'Medical Instruments',
    info: 'Manufacturing of medical-grade components with strict tolerances and safety compliance.',
  },
  {
    id: 'automotive',
    iconName: Car,
    title: 'Automotive',
    info: 'Advanced machining for automotive components ensuring performance & longevity.',
  },
  {
    id: 'precision-eng',
    iconName: DecimalsArrowRight,
    title: 'Precision Engineering',
    info: 'High-tolerance engineering solutions for complex industrial requirements.',
  },
];

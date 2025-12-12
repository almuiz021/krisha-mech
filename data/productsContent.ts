import {
  KrishaLogo,
  Standy,
  RoboCut,
  FanucRoboCut,
  FanucRoboShot,
  RoboDrill,
  StarVisionDX2720,
  JohnLeePrecisionGrinding,
  EDM_Tap_Rmv,
} from '@/assets/AssetsExport';
import { StaticImageData } from 'next/image';

export interface SpecsTableData {
  headers: string[];
  rows: string[][];
}

export interface ProductDescription {
  mcInfo: string;
  features: string[];
  specTable?: SpecsTableData;
}

export interface ProductItem {
  name: string;
  tagline: string;
  slug: string;
  img: string | StaticImageData;
  brochure: string;
  desc: ProductDescription;
}

export interface ProductCategory {
  categoryName: string;
  products: ProductItem[];
}

export const ourProducts: ProductCategory[] = [
  // ======================================================
  // WEDM CATEGORY
  // ======================================================
  {
    categoryName: 'WEDM / Wire EDM',
    products: [
      {
        name: 'Wire EDM — Standy Series',
        brochure: '/brochures/wedm-standy.pdf',
        slug: 'wedm-standy',
        tagline:
          'High-precision wire EDM for intricate contours and fine features.',
        img: Standy,
        desc: {
          mcInfo:
            'Standy Series Wire-EDM is engineered for tool rooms and mould shops where tight corner radii, fine-surface finish and complex profiles are required.',
          features: [
            'Tension-controlled wire feed with micro-adjust',
            'Digital pulse generator with fine-finish modes',
            'High-precision wire guides and kerf compensation',
            'Automatic wire threading and break detection',
            'Integrated dielectric filtration and temperature control',
          ],
          specTable: {
            headers: ['Specification', 'Standy Model'],
            rows: [
              ['Table Size (mm)', '600 × 400'],
              ['Max Workpiece Height (mm)', '300'],
              ['Wire Diameter (mm)', '0.05 – 0.30'],
              ['Position Accuracy', '≤ ± 0.01 mm'],
              ['Dielectric Capacity (L)', '400'],
            ],
          },
        },
      },

      {
        name: 'Wire EDM — RoboCut Series',
        brochure: '/brochures/wedm-robocut.pdf',
        slug: 'wedm-robocut',
        tagline:
          'Fast wire cutting with excellent surface finish for production tooling.',
        img: RoboCut,
        desc: {
          mcInfo:
            'RoboCut Wire-EDM is tuned for higher throughput with consistent surface finish and minimal wire consumption.',
          features: [
            'High-speed cut modes with adaptive pulse control',
            'Large dielectric tank and robust filtration',
            'Advanced spark control for reduced electrode wear',
            'Automatic wire spooling for continuous runs',
            'Operator-friendly programming and path simulation',
          ],
          specTable: {
            headers: ['Specification', 'RoboCut Model'],
            rows: [
              ['Table Size (mm)', '900 × 450'],
              ['Max Workpiece Height (mm)', '350'],
              ['Wire Diameter (mm)', '0.08 – 0.30'],
              ['Repeatability', '≤ ± 0.01 mm'],
              ['Dielectric Capacity (L)', '500'],
            ],
          },
        },
      },
    ],
  },

  // ======================================================
  // SINKING EDM
  // ======================================================
  {
    categoryName: 'Sinking EDM / Die-Sinking',
    products: [
      {
        name: 'Die-Sink EDM — Krisha Classic',
        brochure: '/brochures/diesink-krisha.pdf',
        slug: 'diesink-krisha',
        tagline:
          'Robust die-sink EDM for mold cavities, electrodes and deep features.',
        img: KrishaLogo,
        desc: {
          mcInfo:
            'Krisha Classic die-sink EDMs focus on stable machining of cavity shapes with controlled electrode wear.',
          features: [
            'Pulse control for roughing and fine finishing',
            'Large Z travel and deep-cavity capability',
            'Dielectric circulation with multi-stage filtration',
            'Electrode handling and automatic indexing (optional)',
          ],
          specTable: {
            headers: ['Specification', 'Krisha Classic'],
            rows: [
              ['Table Size (mm)', '700 × 500'],
              ['Max Workpiece Height (mm)', '400'],
              ['Generator Type', 'Digital pulse / fine finish'],
              ['Dielectric Capacity (L)', '600'],
            ],
          },
        },
      },

      {
        name: 'Die-Sink EDM — TapRMV Series',
        brochure: '/brochures/diesink-taprmv.pdf',
        slug: 'diesink-taprmv',
        tagline:
          'Compact die-sink EDM with energy-efficient generator and reliable flushing.',
        img: EDM_Tap_Rmv,
        desc: {
          mcInfo:
            'TapRMV series provides a compact footprint for workshops requiring die-sink capability in limited space.',
          features: [
            'Compact enclosure with easy access panels',
            'Energy-efficient generator options',
            'Programmable flushing and job memory',
            'Low maintenance dielectric filtration system',
          ],
          specTable: {
            headers: ['Specification', 'TapRMV'],
            rows: [
              ['Table Size (mm)', '500 × 350'],
              ['Max Workpiece Height (mm)', '300'],
              ['Generator Type', 'Compact digital generator'],
              ['Dielectric Capacity (L)', '320'],
            ],
          },
        },
      },
    ],
  },

  // ======================================================
  // ACCESSORIES
  // ======================================================
  {
    categoryName: 'EDM Accessories & Specialized Equipment',
    products: [
      {
        name: 'Precision Grinder — JohnLee Inspired',
        brochure: '/brochures/precision-grinder.pdf',
        slug: 'precision-grinder-johnlee',
        tagline:
          'Surface and profile grinding support for EDM post-processing.',
        img: JohnLeePrecisionGrinding,
        desc: {
          mcInfo:
            'Precision grinding equipment useful for finishing EDM-produced parts where surface roughness is critical.',
          features: [
            'High-speed spindle',
            'Automated dressing',
            'Low-vibration cast base',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Wheel Diameter (mm)', '250'],
              ['Max Workpiece Size (mm)', '500 × 300'],
              ['Spindle Speed (RPM)', '3,000 – 6,000'],
            ],
          },
        },
      },

      {
        name: 'Robotic Drill / Handling — RoboDrill Utility',
        brochure: '/brochures/robodrill.pdf',
        slug: 'robodrill-utility',
        tagline:
          'Automation-friendly drilling and handling station to support EDM lines.',
        img: RoboDrill,
        desc: {
          mcInfo:
            'RoboDrill provides automated drilling and part handling before EDM operations, reducing cycle times.',
          features: [
            'Automated part pick/place',
            'Tool magazine for multiple drills',
            'Integration with conveyor or pallet systems',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Throughput (pcs/hr)', 'Varies by part'],
              ['Max Part Size (mm)', '600 × 400'],
              ['Robot Payload (kg)', '5–20 (configurable)'],
            ],
          },
        },
      },
    ],
  },
];

// ======================================================
// TECH PARTNERS (Converted)
// ======================================================
export const techPartnersProducts: ProductCategory[] = [
  {
    categoryName: 'FANUC',
    products: [
      {
        name: 'Fanuc EDM Controller Pack',
        brochure: '/brochures/fanuc-controller-pack.pdf',
        slug: 'fanuc-edm-controller-pack',
        tagline: 'Fanuc-compatible controller solutions for EDM integration.',
        img: FanucRoboShot,
        desc: {
          mcInfo:
            'Fanuc-friendly controllers and I/O kits for automation cell integration.',
          features: [
            'Standard Fanuc I/O mapping',
            'Remote diagnostics',
            'Precision pulse sync',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Compatibility', 'Fanuc 0i / 0i-MF / iHMI'],
              ['Interface', 'Ethernet / Fieldbus / Digital I/O'],
            ],
          },
        },
      },

      {
        name: 'Fanuc Robocut Integration Kit',
        brochure: '/brochures/fanuc-robocut-kit.pdf',
        slug: 'fanuc-robocut-integration-kit',
        tagline:
          'Integration kit to add Robocut machines under Fanuc supervision.',
        img: FanucRoboCut,
        desc: {
          mcInfo:
            'Simplifies connecting Robocut wire-EDM into Fanuc-driven production lines.',
          features: [
            'Protocol adapters',
            'Pre-built harnesses',
            'Integration guides',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Supported Machines', 'RoboCut / Standy series'],
              ['Lead Time', 'Varies'],
            ],
          },
        },
      },
    ],
  },

  {
    categoryName: 'STARVISION',
    products: [
      {
        name: 'StarVision DX Inspection Suite',
        brochure: '/brochures/starvision-dx.pdf',
        slug: 'starvision-dx-inspection',
        tagline: 'High-resolution optics for post-EDM inspection and QA.',
        img: StarVisionDX2720,
        desc: {
          mcInfo:
            'Optical inspection systems for checking EDM parts for dimensional accuracy and finish.',
          features: [
            'High-resolution camera arrays',
            'Automated measurement routines',
            'Integration with SPC systems',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Resolution', 'Up to 5 µm'],
              ['Field of View', 'Configurable'],
              ['Connectivity', 'Ethernet / USB 3.0'],
            ],
          },
        },
      },

      {
        name: 'StarVision Inline Camera Kit',
        brochure: '/brochures/starvision-inline.pdf',
        slug: 'starvision-inline-kit',
        tagline: 'Compact vision modules for inline surface monitoring.',
        img: StarVisionDX2720,
        desc: {
          mcInfo: 'Inline vision modules for conveyors or EDM output chutes.',
          features: [
            'Compact form factor',
            'Simple mounting',
            'Basic analytics',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Mount Type', 'Standard bracket'],
              ['Power', '24 V DC'],
            ],
          },
        },
      },
    ],
  },

  {
    categoryName: 'JOHNLEE',
    products: [
      {
        name: 'JohnLee Precision Grinder — Support Pack',
        brochure: '/brochures/johnlee-grinder.pdf',
        slug: 'johnlee-precision-grinder-pack',
        tagline: 'Precision grinding & support solutions for EDM finish work.',
        img: JohnLeePrecisionGrinding,
        desc: {
          mcInfo:
            'Grinding solutions & consumable packs to complement EDM operations.',
          features: [
            'Wheel & dressing kits',
            'Service packages',
            'Dressing automation options',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Service Interval', '6–12 months'],
              ['Consumable Kits', 'Available'],
            ],
          },
        },
      },

      {
        name: 'JohnLee Fixture & Clamping Kit',
        brochure: '/brochures/johnlee-fixtures.pdf',
        slug: 'johnlee-fixture-clamp-kit',
        tagline: 'Flexible fixture kits for EDM and WEDM setups.',
        img: JohnLeePrecisionGrinding,
        desc: {
          mcInfo:
            'Modular fixture kits for holding complex parts — improving repeatability.',
          features: [
            'Modular rails & clamps',
            'Repositioning indicators',
            'T-slot compatible',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Compatibility', 'Standard T-slot tables'],
              ['Materials', 'Aluminium / Steel'],
            ],
          },
        },
      },
    ],
  },
];

import {
  KrishaLogo,
  Standy,
  FanucRoboCut,
  FanucRoboShot,
  RoboDrill,
  StarVisionDX2720,
  JohnLeePrecisionGrinding,
  EDM_Tap_Rmv,
  WEDM_KM530,
  DEDM_KM43,
  WEDM_KM640AWT,
  DEDM_KM43C,
  EDM_ZNC450,
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
  slug?: string;
  img: string | StaticImageData;
  brochure: string;
  desc?: ProductDescription;
}

export interface ProductCategory {
  categoryName: string;
  products: ProductItem[];
}

export const ourProducts: ProductCategory[] = [
  {
    categoryName: 'WEDM / Wire EDM',
    products: [
      {
        name: 'Fanuc Robocut',
        brochure: '/brochures/krishavmc.pdf',
        tagline:
          'Versatile and reliable for a wide range of applications. It delivers exceptional accuracy, efficiency, and reliability for tool rooms, PCD cutting tools, and die-mould applications.',
        img: FanucRoboCut,
      },
      // TODO: NEED AWT Brochure
      {
        name: 'Krisha AWT',
        brochure: '/brochures/krisha-moly-wire-edm.pdf',
        slug: 'wedm-awt',
        tagline:
          'BROCHURE NEED:WEDM with AWT — Precision meets effortless automatic threading.',
        img: WEDM_KM640AWT,
        desc: {
          mcInfo:
            'The WEDM with AWT model features advanced automatic wire threading technology, ensuring fast, reliable starts and seamless operation. Designed for high precision and efficiency, it streamlines complex machining tasks while reducing downtime and operator effort.',
          features: [
            'Easy to learn and operate with self-developed CNC system',
            'High-speed nanosecond anti-electrolysis processing',
            'Intelligent database for automatic parameter setting',
            'High-precision linear motor with low maintenance design',
          ],
          specTable: {
            headers: ['Specification', 'KM640AWT'],
            rows: [
              ['Max Workpiece (Workbench) Size (mm)', '1060 × 650'],
              ['Worktable Travel (mm)', '600 × 400'],
              ['Maximum Cutting Thickness (mm)', '250'],
              ['Maximum Load (kg)', '900'],
              ['Z-axis Travel (mm)', '300'],
              ['Travel of U, V Axis (mm)', '70 × 70'],
              ['Standard Cutting Taper (Deg)', '±10 / 100'],
              ['Diameter of Molybdenum Wire (mm)', '0.1 – 0.2'],
              ['Multi-knife Cutting Accuracy (mm)', '≤ ±0.003'],
              ['Repeat Positioning Accuracy (mm)', '≤ ±0.002'],
              ['Optimum Surface Roughness (μm)', 'Ra ≤ 0.4'],
              ['Processing Speed (mm²/min)', '100 – 220'],
              ['Machine Dimensions (L × W × H) (mm)', '2200 × 2200 × 2400'],
              ['Weight (kg)', '≈ 2800'],
              ['Electrical Power Consumption (kVA)', '3'],
              ['Work Tank Capacity (L)', '120'],
            ],
          },
        },
      },
      // DONE
      {
        name: 'Krisha Advanced Moly Wire EDM',
        brochure: '/brochures/krisha-moly-wire-edm.pdf',
        slug: 'moly-wire-edm',
        tagline:
          'High-precision wire EDM for intricate contours and fine features.',
        img: WEDM_KM530,
        desc: {
          mcInfo:
            'Standy Series Wire-EDM is engineered for tool rooms and mould shops where tight corner radii, fine-surface finish and complex profiles are required.',
          features: [
            'Full 5 Axis CNC & Servo Motors',
            'Advanced WEDM Software',
            'Unique Design',
            'Strong Construction',
            'Best Surface Finish Ra 0.4',
          ],
          specTable: {
            headers: ['Specification', 'KM530', 'KM640', 'KM850'],
            rows: [
              ['Workbench Size (mm)', '750 × 500', '880 × 560', '1000 × 700'],
              [
                'Axis Travel (X & Y) (mm)',
                '500 × 350',
                '600 × 400',
                '800 × 500',
              ],
              ['Maximum Cutting Thickness (mm)', '300', '500', '500'],
              ['Z Axis Travel (mm)', '300', '500', '500'],
              ['Maximum Load (kg)', '600', '900', '1500'],
              ['UV Axis Travel', '70 × 70', '70 × 70', '70 × 70'],
              ['Max Taper Angle (°/mm)', '±10 / 100', '±10 / 100', '±10 / 100'],
              [
                'Wire Diameter (mm)',
                'Φ0.1 – Φ0.2',
                'Φ0.1 – Φ0.2',
                'Φ0.1 – Φ0.2',
              ],
              ['Position Accuracy (mm)', '≤ ±0.003', '≤ ±0.003', '≤ ±0.005'],
              ['Repeatability (mm)', '≤ ±0.002', '≤ ±0.002', '≤ ±0.003'],
              [
                'Optimum Surface Roughness',
                'Ra ≤ 0.8 (Optional 0.4)',
                'Ra ≤ 0.8 (Optional 0.4)',
                'Ra ≤ 0.8 (Optional 0.4)',
              ],
              [
                'Processing Speed (mm²/min)',
                '100 – 220',
                '100 – 220',
                '100 – 220',
              ],
              ['Electrical Power Consumption (kVA)', '3', '3', '3'],
              ['Water Tank Capacity (L)', '120', '120', '120'],
              [
                'Machine Dimensions (L × W × H) (mm)',
                '1781 × 1660 × 2030',
                '1920 × 1750 × 2100',
                '2190 × 2100 × 2780',
              ],
              ['Weight (kg)', '2050', '2500', '3260'],
            ],
          },
        },
      },
      // TODO: NEED ALL INFO
      {
        name: 'Krisha DK Series NEEED FULL INFO',
        brochure: '/brochures/krishavmc.pdf',
        slug: 'moly-wire-edm',
        tagline:
          'High-precision wire EDM for intricate contours and fine features.',
        img: KrishaLogo,
        desc: {
          mcInfo:
            'Standy Series Wire-EDM is engineered for tool rooms and mould shops where tight corner radii, fine-surface finish and complex profiles are required.',
          features: [
            'Full 5 Axis CNC & Servo Motors',
            'Advanced WEDM Software',
            'Unique Design',
            'Strong Construction',
            'Best Surface Finish Ra 0.4',
          ],
          specTable: {
            headers: ['Specification', 'KM530', 'KM640', 'KM850'],
            rows: [
              ['Workbench Size (mm)', '750 × 500', '880 × 560', '1000 × 700'],
              [
                'Axis Travel (X & Y) (mm)',
                '500 × 350',
                '600 × 400',
                '800 × 500',
              ],
              ['Maximum Cutting Thickness (mm)', '300', '500', '500'],
              ['Z Axis Travel (mm)', '300', '500', '500'],
              ['Maximum Load (kg)', '600', '900', '1500'],
              ['UV Axis Travel', '70 × 70', '70 × 70', '70 × 70'],
              ['Max Taper Angle (°/mm)', '±10 / 100', '±10 / 100', '±10 / 100'],
              [
                'Wire Diameter (mm)',
                'Φ0.1 – Φ0.2',
                'Φ0.1 – Φ0.2',
                'Φ0.1 – Φ0.2',
              ],
              ['Position Accuracy (mm)', '≤ ±0.003', '≤ ±0.003', '≤ ±0.005'],
              ['Repeatability (mm)', '≤ ±0.002', '≤ ±0.002', '≤ ±0.003'],
              [
                'Optimum Surface Roughness',
                'Ra ≤ 0.8 (Optional 0.4)',
                'Ra ≤ 0.8 (Optional 0.4)',
                'Ra ≤ 0.8 (Optional 0.4)',
              ],
              [
                'Processing Speed (mm²/min)',
                '100 – 220',
                '100 – 220',
                '100 – 220',
              ],
              ['Electrical Power Consumption (kVA)', '3', '3', '3'],
              ['Water Tank Capacity (L)', '120', '120', '120'],
              [
                'Machine Dimensions (L × W × H) (mm)',
                '1781 × 1660 × 2030',
                '1920 × 1750 × 2100',
                '2190 × 2100 × 2780',
              ],
              ['Weight (kg)', '2050', '2500', '3260'],
            ],
          },
        },
      },
    ],
  },

  // ======================================================
  //  EDM
  // ======================================================
  {
    categoryName: 'EDM',
    products: [
      // TODO: NEED FULL INFO
      {
        name: 'Krisha Standy Mirror Finish EDM',
        brochure: '/brochures/krishavmc.pdf',
        slug: 'tap-remover',
        tagline:
          'NEED FULL INFO :Compact and portable die-sink EDM for fast, precise removal of broken taps and tools.',
        img: Standy,
        desc: {
          mcInfo:
            'KM1000W Tap Remover is a compact EDM-based solution engineered for workshops that require fast and precise removal of broken taps, drills, and reamers from workpieces of any shape or size, without damaging the base material.',
          features: [
            'Automatic feed processing for consistent machining',
            'Uses water as an eco-friendly working fluid',
            '220V single-phase power supply for easy installation',
            'Tilting head design for angled and difficult operations',
            'Compact, lightweight, and portable construction',
            'Suitable for various conductive materials',
          ],
          specTable: {
            headers: ['Specification', 'KM1000W'],
            rows: [
              ['Model', 'KM1000W'],
              ['Input Power', 'AC 220V / 50–60 Hz'],
              ['Rated Power', '1000 W'],
              ['Output Voltage', '80 V'],
              ['Electrode Range', '0.5 – 10 mm'],
              ['Manual Travel', '310 mm'],
              ['Automatic Travel', '60 mm'],
              ['Processing Speed', '≥ 2.0 mm/min'],
              ['Working Fluid', 'Water'],
              ['Machine Size (mm)', '380 × 200 × 320'],
              ['Net Weight', '18 kg'],
            ],
          },
        },
      },

      // TODO: NEED FULL INFO
      {
        name: 'EDM-ZNC',
        brochure: '/brochures/krishavmc.pdf',
        slug: 'tap-remover',
        tagline:
          'NEED FULL INFO: Compact and portable die-sink EDM for fast, precise removal of broken taps and tools.',
        img: EDM_ZNC450,
        desc: {
          mcInfo:
            'KM1000W Tap Remover is a compact EDM-based solution engineered for workshops that require fast and precise removal of broken taps, drills, and reamers from workpieces of any shape or size, without damaging the base material.',
          features: [
            'Automatic feed processing for consistent machining',
            'Uses water as an eco-friendly working fluid',
            '220V single-phase power supply for easy installation',
            'Tilting head design for angled and difficult operations',
            'Compact, lightweight, and portable construction',
            'Suitable for various conductive materials',
          ],
          specTable: {
            headers: ['Specification', 'KM1000W'],
            rows: [
              ['Model', 'KM1000W'],
              ['Input Power', 'AC 220V / 50–60 Hz'],
              ['Rated Power', '1000 W'],
              ['Output Voltage', '80 V'],
              ['Electrode Range', '0.5 – 10 mm'],
              ['Manual Travel', '310 mm'],
              ['Automatic Travel', '60 mm'],
              ['Processing Speed', '≥ 2.0 mm/min'],
              ['Working Fluid', 'Water'],
              ['Machine Size (mm)', '380 × 200 × 320'],
              ['Net Weight', '18 kg'],
            ],
          },
        },
      },

      //  TODO: NEED BROCHURE
      {
        name: 'EDM Broken Tap Remover',
        brochure: '/brochures/krishavmc.pdf',
        slug: 'tap-remover',
        tagline:
          'NEED BROCHURE :Compact and portable die-sink EDM for fast, precise removal of broken taps and tools.',
        img: EDM_Tap_Rmv,
        desc: {
          mcInfo:
            'KM1000W Tap Remover is a compact EDM-based solution engineered for workshops that require fast and precise removal of broken taps, drills, and reamers from workpieces of any shape or size, without damaging the base material.',
          features: [
            'Automatic feed processing for consistent machining',
            'Uses water as an eco-friendly working fluid',
            '220V single-phase power supply for easy installation',
            'Tilting head design for angled and difficult operations',
            'Compact, lightweight, and portable construction',
            'Suitable for various conductive materials',
          ],
          specTable: {
            headers: ['Specification', 'KM1000W'],
            rows: [
              ['Model', 'KM1000W'],
              ['Input Power', 'AC 220V / 50–60 Hz'],
              ['Rated Power', '1000 W'],
              ['Output Voltage', '80 V'],
              ['Electrode Range', '0.5 – 10 mm'],
              ['Manual Travel', '310 mm'],
              ['Automatic Travel', '60 mm'],
              ['Processing Speed', '≥ 2.0 mm/min'],
              ['Working Fluid', 'Water'],
              ['Machine Size (mm)', '380 × 200 × 320'],
              ['Net Weight', '18 kg'],
            ],
          },
        },
      },
    ],
  },

  {
    categoryName: 'Drill EDM',
    products: [
      // TODO: NEED BROCHURE
      {
        name: 'Krisha CNC Drill EDM',
        brochure: '/brochures/krishavmc.pdf',
        slug: 'drill-edm-cnc',
        tagline:
          'NEED BROCHURE :Fast Drill cutting with excellent surface finish for production tooling.',
        img: DEDM_KM43C,
        desc: {
          mcInfo:
            'Drill-EDM is tuned for higher throughput with consistent surface finish and minimal wire consumption.',
          features: [
            'All 3 Axis Servo Motors & Drives',
            'User Friendly Touch Screen Display',
            'Eco Friendly Reusable Water Filtration Unit',
            'Granite Worktable',
            'Easy Programming Function',
            'Spark Detection Camera',
          ],
          specTable: {
            headers: ['Specification', 'KM43C Model'],
            rows: [
              ['Table Travel (X, Y) (mm)', '400 × 300'],
              ['Work Tray Size (mm)', '720 × 420'],
              ['Z Axis Travel (mm)', '380'],
              ['W Axis Travel (mm)', '280'],
              ['Max Workpiece Height (mm)', '300'],
              ['Max Workpiece Weight (kg)', '300'],
              ['Processing Current (Amp)', '36'],
              ['Power Capacity (kW)', '4.5'],
              ['Electrode Diameter (mm)', '0.3 – 3.0'],
              ['Machine Net Weight (kg)', '800'],
              ['Machine Dimensions (L×W×H) (mm)', '850 × 850 × 1800'],
            ],
          },
        },
      },

      // TODO: NEED BROCHURE
      {
        name: 'Krisha ZNC Drill EDM',
        brochure: '/brochures/krishavmc.pdf',
        slug: 'drill-edm-znc',
        tagline:
          'NEED BROCHURE :Fast Drill cutting with excellent surface finish for production tooling.',
        img: DEDM_KM43,
        desc: {
          mcInfo:
            'Drill-EDM is tuned for higher throughput with consistent surface finish and minimal wire consumption.',
          features: [
            'Z Axis Programmable',
            'All 3 Axis LM Guides & Ball Screws',
            'Motorized W Axis',
            'Granite Worktable',
            'Compact in Size',
            '7 Inch LCD Display',
          ],
          specTable: {
            headers: ['Specification', 'KM43Z Model'],
            rows: [
              ['Table Travel (X, Y) (mm)', '400 × 300'],
              ['Work Tray Size (mm)', '720 × 420'],
              ['Z Axis Travel (mm)', '380'],
              ['W Axis Travel (mm)', '280'],
              ['Max Workpiece Height (mm)', '300'],
              ['Max Workpiece Weight (kg)', '300'],
              ['Processing Current (Amp)', '30'],
              ['Power Capacity (kW)', '4.2'],
              ['Electrode Diameter (mm)', '0.3 – 3.0'],
              ['Machine Net Weight (kg)', '750'],
              ['Machine Dimensions (L×W×H) (mm)', '850 × 850 × 1800'],
            ],
          },
        },
      },
    ],
  },

  // ======================================================
  // MC CENTERS
  // ======================================================

  // TODO: NEED INFO
  {
    categoryName: 'Machine Centres',
    products: [
      {
        name: 'Fanuc RoboDrill',
        brochure: '/brochures/precision-grinder.pdf',
        tagline:
          'NEED INFO :Surface and profile grinding support for EDM post-processing.',
        img: RoboDrill,
      },

      // TODO: NEED INFO
      {
        name: 'Starvision Double Column',
        brochure: '/brochures/robodrill.pdf',
        slug: 'robodrill-utility',
        tagline:
          'NEED INFO :Automation-friendly drilling and handling station to support EDM lines.',
        img: StarVisionDX2720,
      },
    ],
  },

  // ======================================================
  // GRINDING
  // ======================================================

  {
    categoryName: 'Grinding',
    products: [
      {
        name: 'NEED INFO JOHN LEE',
        brochure: '/brochures/precision-grinder.pdf',
        tagline:
          'Surface and profile grinding support for EDM post-processing.',
        img: JohnLeePrecisionGrinding,
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
        name: 'NEED INFO',
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
    ],
  },
];

// ======================================================
// TECH PARTNERS (Converted)
// ======================================================
const techPartnersProducts: ProductCategory[] = [
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

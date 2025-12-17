import {
  Standy,
  FanucRoboCut,
  RoboDrill,
  StarVisionDX2720,
  JohnLeePrecisionGrinding,
  EDM_Tap_Rmv,
  WEDM_KM530,
  DEDM_KM43,
  WEDM_KM640AWT,
  DEDM_KM43C,
  EDM_ZNC450,
  WEDM_DK_SERIES,
} from '@/assets/AssetsExport';
import { ProductCategoryProps } from '@/types/ProductsTypes';

export const ourProducts: ProductCategoryProps[] = [
  {
    categoryName: 'Wire EDM Machines',
    products: [
      {
        name: 'ROBOCUT',
        brochure: '/brochures/fanuc-robocut.pdf',
        tagline:
          'High-Reliability and High-Performance Wire Electrical-Discharge Machine',
        img: FanucRoboCut,
      },
      {
        name: 'KRISHA 5 AXIS ADVANCED MID-SPEED MOLY WIRE EDM WITH AWT',
        brochure: '/brochures/krisha-wedm-awt.pdf',
        slug: 'krisha-wedm-awt',
        tagline:
          'The best in class Moly wire EDM with Automatic Wire Threading Technology',
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
      {
        name: 'Krisha 5 Axis Advanced Mid-Speed Moly Wire EDM',
        brochure: '/brochures/krisha-moly-wire-edm.pdf',
        slug: 'krisha-moly-wire-edm',
        tagline: 'The best in class 5 Axis CNC Moly wire EDM',
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
      {
        name: 'Krisha High Speed Moly Wire EDM',
        brochure: '/brochures/krisha-dk-series.pdf',
        slug: 'krisha-dk-series',
        tagline: 'The Fastest Moly Wire EDM Cutting Machine in the Segment',
        img: WEDM_DK_SERIES,
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

  {
    categoryName: 'EDM',
    products: [
      {
        name: 'Krisha Standy CNC Mirror Finish EDM',
        brochure: '/brochures/krisha-standy-mc.pdf',
        slug: 'krisha-standy-mc',
        tagline: 'The Mold Maker’s Choice',
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
      {
        name: 'KRISHA ZNC EDM',
        brochure: '/brochures/krisha-edm-znc.pdf',
        slug: 'krisha-edm-znc',
        tagline: 'High Performance ZNC EDM',
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
      {
        name: 'KRISHA PORTABLE EDM',
        brochure: '/brochures/krisha-tap-remover.pdf',
        slug: 'krisha-tap-remover',
        tagline: 'Super Fast Drill & Tap Remover EDM',
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
      {
        name: 'KRISHA CNC DRILL EDM',
        brochure: '/brochures/krisha-dedm-cnc_znc.pdf',
        slug: 'krisha-dedm-cnc_znc',
        tagline: 'Affordable Best-in-Class CNC Drill EDM',
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
      {
        name: 'KRISHA ZNC DRILL EDM',
        brochure: '/brochures/krisha-dedm-cnc_znc.pdf',
        slug: 'krisha-dedm-cnc_znc',
        tagline: 'Most Reliable ZNC Drill EDM',
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

  {
    categoryName: 'Machine Centres',
    products: [
      {
        name: 'ROBODRILL',
        brochure: '/brochures/fanuc-robodrill.pdf',
        slug: 'fanuc-robodrill',
        tagline:
          'High-Speed, High-Precision and High-Efficiency Compact Machining Center',
        img: RoboDrill,
      },
      {
        name: 'STARVISION',
        brochure: '/brochures/starvision-double-column.pdf',
        slug: 'starvision-double-column',
        tagline:
          'High Quality Double Column Machining Centre, 5 Axis & Beam and Column Moving Machining Centre',
        img: StarVisionDX2720,
      },
    ],
  },

  {
    categoryName: 'Grinding',
    products: [
      {
        name: 'JOENLIH',
        brochure: '/brochures/joenlih-grinding-mc.pdf',
        slug: 'joenlih-grinding-mc',
        tagline: 'Taiwan’s Best High Precision Surface Grinding Machines',
        img: JohnLeePrecisionGrinding,
      },
    ],
  },

  {
    categoryName: 'EDM Accessories & Specialized Equipment',
    products: [
      {
        name: 'JOENLIH',
        brochure: '/brochures/joenlih-grinding-mc.pdf',
        slug: 'joenlih-grinding-mc',
        tagline: 'Taiwan’s Best High Precision Surface Grinding Machines',
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
              ['Spindle Speed (rpm)', '5000'],
            ],
          },
        },
      },
    ],
  },
];

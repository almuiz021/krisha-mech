import { Fanuc, KrishaLogo, RoboCut, Standy } from '@/assets/AssetsExport';
import { StaticImageData } from 'next/image';

export interface SpecsTableData {
  headers: string[]; // e.g. ['Model', 'KM530', 'KM640', 'KM850']
  rows: string[][]; // each row has same length as headers
}

export interface ProductDescription {
  mcInfo: string;
  features: string[];
  specTable?: SpecsTableData; // 👈 new table-based specs
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
  {
    categoryName: 'VMC',
    products: [
      {
        name: 'Vertical Machining Center',
        brochure: '/brochures/krishavmc.pdf',
        slug: 'vertical-machining-center',
        tagline: 'High precision & rigid structure for industrial machining.',
        img: Standy,
        desc: {
          mcInfo:
            'True to its name, OMEGA represents the family of high-speed machining centers that combine productivity and accuracy for demanding industrial applications.',
          features: [
            'High precision linear guideways',
            'Low power consumption spindle drive',
            'Advanced high-speed CNC controller',
            'Imported ball screws and bearings',
            'Long machine life with rigid casting',
          ],
          specTable: {
            headers: ['Model', 'KM530', 'KM640', 'KM850'],
            rows: [
              ['Workbench Size (mm)', '750 × 500', '880 × 560', '1000 × 700'],
              ['Axis Travel (X&Y) (mm)', '500 × 350', '600 × 400', '800 × 500'],
              ['Maximum Cutting Thickness (mm)', '300', '500', '500'],
              ['Z axis travel (mm)', '300', '500', '500'],
              ['Maximum load (Kg)', '600', '900', '1500'],
              ['UV axis travel (mm)', '—', '70 × 70', '70 × 70'],
              [
                'Max. taper angle (°/mm)',
                '±10° / 100',
                '±10° / 100',
                '±10° / 100',
              ],
              [
                'Wire diameter (mm)',
                'φ0.1 – φ0.2',
                'φ0.1 – φ0.2',
                'φ0.1 – φ0.2',
              ],
              ['Position Accuracy (mm)', '≤ ± 0.003', '≤ ± 0.003', '≤ ± 0.005'],
              ['Repeatability (mm)', '≤ ± 0.002', '≤ ± 0.002', '≤ ± 0.003'],
              [
                'Optimum Surface Roughness',
                'Ra ≤ 0.8 (Opt. 0.4)',
                'Ra ≤ 0.8 (Opt. 0.4)',
                'Ra ≤ 0.8 (Opt. 0.4)',
              ],
              [
                'Processing Speed (mm²/min)',
                '100 – 220',
                '100 – 220',
                '100 – 220',
              ],
              ['Electrical Power Consumption (kVA)', '3', '3', '4'],
              ['Water tank capacity (L)', '100', '120', '150'],
              [
                'Dimension (L×W×H) (mm)',
                '1781×1660×2030',
                '1920×1750×2100',
                '2190×2100×2780',
              ],
              ['Weight (Kg)', '2050', '2500', '3260'],
            ],
          },
        },
      },

      // ------------------------------
      // VMC FANUC (converted → specTable)
      // ------------------------------
      {
        name: 'Vertical Machining Center Fanuc',
        brochure: '@/assets/pdf/vertical-machining-center-fanuc.pdf',
        slug: 'vertical-machining-center-fanuc',
        tagline:
          'Fanuc-controlled VMC for precision machining and reliability.',
        img: Fanuc,
        desc: {
          mcInfo:
            'Configured with a Fanuc controller, this VMC is designed for customers who demand stable performance, repeatability, and easy integration in production lines.',
          features: [
            'Fanuc Oi-MF Plus controller',
            'High-speed rigid tapping',
            'Integrated coolant-through spindle',
            'Automatic tool changer with quick indexing',
            'Compact footprint for shop floors',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['X Axis Travel', '900 mm'],
              ['Y Axis Travel', '550 mm'],
              ['Z Axis Travel', '550 mm'],
              ['Table Size', '1100 x 550 mm'],
              ['Spindle Speed', '10,000 RPM'],
              ['Tool Capacity', '20 Tools'],
              ['Controller', 'Fanuc Oi-MF Plus'],
            ],
          },
        },
      },

      // ------------------------------
      // VMC KRISHA (converted → specTable)
      // ------------------------------
      {
        name: 'Vertical Machining Center Krisha',
        brochure: '@/assets/pdf/vertical-machining-center-krisha.pdf',
        slug: 'vertical-machining-center-krisha',
        tagline: 'Optimized VMC solution tailored by Krisha Mech.',
        img: KrishaLogo,
        desc: {
          mcInfo:
            'The Krisha-configured vertical machining center is tuned for balanced productivity and cost, suitable for job shops and medium batch production.',
          features: [
            'Optimized cycle times for common parts',
            'Energy-efficient drive system',
            'User-friendly operator panel',
            'Rigid column and base structure',
            'Designed for easy maintenance',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['X Axis Travel', '800 mm'],
              ['Y Axis Travel', '500 mm'],
              ['Z Axis Travel', '500 mm'],
              ['Table Size', '1000 x 500 mm'],
              ['Spindle Speed', '8,000 RPM'],
              ['Tool Capacity', '20 Tools'],
              ['Controller', 'Siemens 828D'],
            ],
          },
        },
      },

      // ------------------------------
      // VMC ROBOCUT (converted → specTable)
      // ------------------------------
      {
        name: 'Vertical Machining Center Robocut',
        brochure: '@/assets/pdf/vertical-machining-center-robocut.pdf',
        slug: 'vertical-machining-center-robocut',
        tagline: 'High-speed Robocut VMC for complex contouring.',
        img: RoboCut,
        desc: {
          mcInfo:
            'Robocut series is suitable for high-speed contouring and die-mould applications where surface finish and accuracy are critical.',
          features: [
            'High-speed spindle for die-mould work',
            'High-response servo drives',
            'Look-ahead control for complex paths',
            'Efficient chip evacuation system',
            'Stable thermal behavior for long runs',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['X Axis Travel', '700 mm'],
              ['Y Axis Travel', '450 mm'],
              ['Z Axis Travel', '450 mm'],
              ['Table Size', '900 x 450 mm'],
              ['Spindle Speed', '15,000 RPM'],
              ['Tool Capacity', '30 Tools'],
              ['Controller', 'Fanuc Robocut series'],
            ],
          },
        },
      },
    ],
  },

  // ======================================================
  // EDM CATEGORY (converted → specTable)
  // ======================================================
  {
    categoryName: 'EDM',
    products: [
      {
        name: 'EDM Machine Standy',
        brochure: '@/assets/pdf/edm-machine-standy.pdf',
        slug: 'edm-machine-standy',
        tagline: 'Versatile EDM machine for precision component manufacturing.',
        img: Standy,
        desc: {
          mcInfo:
            'The Standy EDM machine offers stable performance for a wide range of tool-room and production EDM operations.',
          features: [
            'High accuracy servo-controlled axes',
            'Stable discharge circuit',
            'Low electrode wear design',
            'User-friendly EDM programming',
            'Reliable operation for long jobs',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Table Size', '600 x 400 mm'],
              ['Max Workpiece Height', '300 mm'],
              ['Max Workpiece Weight', '800 kg'],
              ['Max Electrode Weight', '50 kg'],
              ['Generator Type', 'Digital EDM generator'],
              ['Dielectric Tank Capacity', '400 L'],
            ],
          },
        },
      },

      {
        name: 'EDM Machine Fanuc',
        brochure: '@/assets/pdf/edm-machine-fanuc.pdf',
        slug: 'edm-machine-fanuc',
        tagline: 'EDM solution with Fanuc control for repeatable accuracy.',
        img: Fanuc,
        desc: {
          mcInfo:
            'Fanuc-controlled EDM machine targeted at customers needing connectivity, automation, and consistent part quality.',
          features: [
            'Fanuc-based control interface',
            'Auto edge-finding functions',
            'Programmable flushing options',
            'Multi-step machining cycles',
            'Stable gap control algorithm',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Table Size', '700 x 450 mm'],
              ['Max Workpiece Height', '350 mm'],
              ['Max Workpiece Weight', '1,000 kg'],
              ['Max Electrode Weight', '75 kg'],
              ['Generator Type', 'Digital pulse generator'],
              ['Dielectric Tank Capacity', '450 L'],
            ],
          },
        },
      },

      {
        name: 'EDM Machine Krisha',
        brochure: '@/assets/pdf/edm-machine-krisha.pdf',
        slug: 'edm-machine-krisha',
        tagline: 'Cost-effective EDM machine customized by Krisha Mech.',
        img: KrishaLogo,
        desc: {
          mcInfo:
            'Krisha EDM configuration is designed to offer reliable EDM capability with a focus on total cost of ownership.',
          features: [
            'Optimized power module for lower power usage',
            'Intuitive touch-based interface',
            'Robust mechanical structure',
            'Flexible clamping arrangements',
            'Suitable for tool-room and job shops',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Table Size', '500 x 350 mm'],
              ['Max Workpiece Height', '280 mm'],
              ['Max Workpiece Weight', '600 kg'],
              ['Max Electrode Weight', '40 kg'],
              ['Generator Type', 'Compact digital generator'],
              ['Dielectric Tank Capacity', '350 L'],
            ],
          },
        },
      },
    ],
  },
];

// ======================================================
// TECH PARTNERS PRODUCTS
// ======================================================
export const techPartnersProducts: ProductCategory[] = [
  {
    categoryName: 'FANUC',
    products: [
      {
        name: 'Fanuc VMC Standy',
        brochure: '@/assets/pdf/fanuc-vmc-standy.pdf',
        slug: 'fanuc-vmc-standy',
        tagline: 'Fanuc-powered VMC for general machining applications.',
        img: Standy,
        desc: {
          mcInfo:
            'Fanuc VMC Standy is an entry-level solution combining a robust mechanical platform with trusted Fanuc control.',
          features: [
            'Fanuc control for easy programming',
            'Stable machining for steel and alloys',
            'Automatic lubrication system',
            'Compact spindle design',
            'Reliable performance for job shops',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['X Axis Travel', '750 mm'],
              ['Y Axis Travel', '450 mm'],
              ['Z Axis Travel', '450 mm'],
              ['Table Size', '900 x 450 mm'],
              ['Spindle Speed', '8,000 RPM'],
              ['Tool Capacity', '20 Tools'],
              ['Controller', 'Fanuc Oi series'],
            ],
          },
        },
      },

      {
        name: 'Fanuc VMC Fanuc',
        brochure: '@/assets/pdf/fanuc-vmc-fanuc.pdf',
        slug: 'fanuc-vmc-fanuc',
        tagline: 'High-speed Fanuc VMC for demanding production lines.',
        img: Fanuc,
        desc: {
          mcInfo:
            'Configured for high-volume production, the Fanuc VMC Fanuc model focuses on speed, connectivity, and predictable uptime.',
          features: [
            'High-speed Fanuc controller with networking',
            'Fast tool change mechanism',
            'High acceleration on linear axes',
            'Effective chip removal system',
            'Prepared for automation and pallet systems',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['X Axis Travel', '900 mm'],
              ['Y Axis Travel', '500 mm'],
              ['Z Axis Travel', '500 mm'],
              ['Table Size', '1100 x 500 mm'],
              ['Spindle Speed', '12,000 RPM'],
              ['Tool Capacity', '30 Tools'],
              ['Controller', 'Fanuc Oi-MF'],
            ],
          },
        },
      },

      {
        name: 'Fanuc VMC Krisha',
        brochure: '@/assets/pdf/fanuc-vmc-krisha.pdf',
        slug: 'fanuc-vmc-krisha',
        tagline: 'Co-engineered VMC with Krisha Mech and Fanuc.',
        img: KrishaLogo,
        desc: {
          mcInfo:
            'This variant is co-developed to match local application needs while retaining Fanuc reliability and service support.',
          features: [
            'Application-optimized cutting parameters',
            'Good accessibility for setup',
            'Sturdy base and column structure',
            'Reduced vibration in heavy cuts',
            'Fanuc control with custom macros',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['X Axis Travel', '820 mm'],
              ['Y Axis Travel', '520 mm'],
              ['Z Axis Travel', '520 mm'],
              ['Table Size', '1000 x 520 mm'],
              ['Spindle Speed', '10,000 RPM'],
              ['Tool Capacity', '24 Tools'],
              ['Controller', 'Fanuc Oi-MF Plus'],
            ],
          },
        },
      },
    ],
  },

  // EDM SECTION
  {
    categoryName: 'EDM',
    products: [
      {
        name: 'EDM Standy',
        brochure: '@/assets/pdf/edm-standy.pdf',
        slug: 'edm-standy',
        tagline: 'Compact EDM solution for tool-room and die work.',
        img: Standy,
        desc: {
          mcInfo:
            'EDM Standy is a compact, reliable EDM solution ideal for precision tooling and low-volume production.',
          features: [
            'Stable spark control',
            'User-friendly EDM cycles',
            'Compact footprint with large tank',
            'Fine finish capability',
            'Reliable long-duration cutting',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Table Size', '500 x 350 mm'],
              ['Max Workpiece Height', '250 mm'],
              ['Max Workpiece Weight', '500 kg'],
              ['Max Electrode Weight', '35 kg'],
              ['Generator Type', 'Digital pulse generator'],
              ['Dielectric Tank Capacity', '320 L'],
            ],
          },
        },
      },

      {
        name: 'EDM Fanuc',
        brochure: '@/assets/pdf/edm-fanuc.pdf',
        slug: 'edm-fanuc',
        tagline:
          'High-precision EDM system compatible with Fanuc environments.',
        img: Fanuc,
        desc: {
          mcInfo:
            'Fanuc EDM provides excellent repeatability for fine-feature parts, molds, and precision components.',
          features: [
            'Fine surface finish EDM control',
            'Integrated measurement cycles',
            'Programmable flushing patterns',
            'Low electrode wear strategy',
            'Connectivity to Fanuc ecosystems',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Table Size', '600 x 400 mm'],
              ['Max Workpiece Height', '300 mm'],
              ['Max Workpiece Weight', '800 kg'],
              ['Max Electrode Weight', '60 kg'],
              ['Generator Type', 'Fine finish digital generator'],
              ['Dielectric Tank Capacity', '380 L'],
            ],
          },
        },
      },

      {
        name: 'EDM Krisha',
        brochure: '@/assets/pdf/edm-krisha.pdf',
        slug: 'edm-krisha',
        tagline: 'Economical EDM configuration developed with Krisha Mech.',
        img: KrishaLogo,
        desc: {
          mcInfo:
            'Krisha EDM focuses on balancing investment, running cost, and accuracy for small and medium manufacturers.',
          features: [
            'Energy-efficient discharge circuit',
            'Easy-to-learn operator interface',
            'Robust mechanical layout',
            'Configurable job libraries',
            'Consistent performance over long shifts',
          ],
          specTable: {
            headers: ['Specification', 'Value'],
            rows: [
              ['Table Size', '550 x 380 mm'],
              ['Max Workpiece Height', '270 mm'],
              ['Max Workpiece Weight', '650 kg'],
              ['Max Electrode Weight', '45 kg'],
              ['Generator Type', 'Standard digital EDM generator'],
              ['Dielectric Tank Capacity', '340 L'],
            ],
          },
        },
      },
    ],
  },
];

import Image from 'next/image';
import {
  BrandFanuc,
  BrandJoenLih,
  BrandSandy,
  BrandStarV,
  KrishaNameLogo,
} from '@/assets/AssetsExport';

const brands = [
  {
    brandName: 'Fanuc',
    image: BrandFanuc,
  },
  {
    brandName: 'Starvision',
    image: BrandStarV,
  },
  {
    brandName: 'JoenLih',
    image: BrandJoenLih,
  },
  {
    brandName: 'Sandy',
    image: BrandSandy,
  },
];

export default function BrandSection() {
  return (
    <section
      id="brands"
      className="bg-bg px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* BRAND GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            gap-6
            items-center
          "
        >
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`
                ${brand.brandName == 'Fanuc' && 'scale-60'}
                ${brand.brandName == 'Sandy' && 'scale-70'}
                flex items-center justify-center
                h-20 sm:h-20
              `}
            >
              <Image
                src={brand.image}
                alt={brand.brandName}
                className="object-contain"
                priority={idx < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

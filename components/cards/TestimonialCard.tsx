import Image, { StaticImageData } from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  item: {
    image: string | StaticImageData;
    company: string;
    rating: number;
    remark: string;
  };
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div
      className="
        bg-white 
        rounded-xl 
        border border-muted
        shadow-card-sm 
        p-6 
        h-full 
        flex flex-col justify-between
      "
    >
      {/* Top Section */}
      <div className="flex items-center gap-4">
        {/* Company Logo */}
        <div className="w-14 h-14 rounded-full overflow-hidden bg-cream flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.company}
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        {/* Company Name */}
        <h3 className="text-lg font-semibold text-panel leading-tight">
          {item.company}
        </h3>
      </div>

      {/* Rating Stars */}
      <div className="mt-4 flex gap-1 mx-auto text-brand">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className="stroke-brand"
            fill={i < item.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      {/* Remark */}
      <p className="mt-4 text-sm text-text-main leading-relaxed">
        {item.remark}
      </p>
    </div>
  );
}

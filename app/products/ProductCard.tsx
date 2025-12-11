'use client';import { ProductCardProps } from '@/types/ProductsTypes';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <Link
      href={`/products/${item.slug}`}
      className="
        cursor-pointer
        group w-full max-w-sm mx-auto 
        flex flex-col items-center 
        bg-white rounded-2xl 
        transition-all duration-300
        shadow-card-sm
        hover:shadow-2xl
      "
    >
      {/* Card wrapper (flex-column for vertical alignment) */}
      <div className="p-6 flex flex-col items-center h-full w-full">
        {/* Image */}
        <div className="relative w-full h-56 flex items-center justify-center mb-4">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Title + Tagline (flex-1 = pushes button to bottom) */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-panel">
            {item.name}
          </h2>

          <p className="text-text-main/90 mt-3 text-sm sm:text-base leading-relaxed">
            {item.tagline}
          </p>
        </div>

        {/* Fixed bottom button */}
        <button
          className="
            cursor-pointer
            mt-6 px-6 py-2 border border-muted 
            text-panel rounded-full 
            text-sm sm:text-base font-semibold
            transition-all duration-200 
            hover:bg-panel hover:text-on-brand
          "
          aria-label={`Know more about ${item.name}`}
        >
          Know more
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;

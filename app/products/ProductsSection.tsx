'use client';

import { ProductsSectionProps } from '@/types/ProductsTypes';
import ProductCategory from './ProductCategory';

const ProductsSection: React.FC<ProductsSectionProps> = ({
  title,
  categories,
}) => {
  return (
    <>
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-panel">{title}</h2>

        <div className="mt-3 mx-auto h-1 w-24 bg-panel rounded-full"></div>
      </div>

      <div className="space-y-12">
        {categories.map((category, index) => (
          <ProductCategory
            key={index}
            productCat={category.categoryName}
            products={category.products}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsSection;

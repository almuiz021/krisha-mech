import { ProductCategoryProps } from '@/types/ProductsTypes';import ProductCard from './ProductCard';

const ProductCategory: React.FC<ProductCategoryProps> = ({
  categoryName,
  products,
}) => {
  return (
    <section className="max-w-7xl mx-auto py-10">
      {/* Category Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-panel tracking-wide">
          {categoryName}
        </h2>
        <div className="mt-2 h-1 w-20 bg-panel rounded-full"></div>
      </div>

      {/* Product Grid */}
      <div
        className="
          grid grid-cols-1 gap-8 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
        "
      >
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;

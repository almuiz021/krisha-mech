'use client';import { ourProducts, techPartnersProducts } from '@/data/productsContent';
import ProductsSection from './ProductsSection';

function Products() {
  return (
    <section
      id="products"
      className="py-12 px-4 sm:px-6 lg:px-12 bg-bg"
    >
      <div className="max-w-7xl mx-auto">
        <ProductsSection
          title="Our Products"
          categories={ourProducts}
        />
        <ProductsSection
          title="Technology Partners"
          categories={techPartnersProducts}
        />
      </div>
    </section>
  );
}

export default Products;

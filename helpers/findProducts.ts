import { ourProducts } from '@/data/productsContent';
import { ProductCategoryProps, ProductItem } from '@/types/ProductsTypes';

export function findProductBySlug(slug: string): ProductItem | null {
  const allProducts: ProductItem[] = [
    ...ourProducts.flatMap((c: ProductCategoryProps) => c.products),
  ];

  const product = allProducts.find(p => p.slug === slug);
  return product ?? null;
}

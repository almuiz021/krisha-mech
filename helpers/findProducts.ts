import {
  ourProducts,
  ProductCategory,
  ProductItem,
} from '@/data/productsContent';

export function findProductBySlug(slug: string): ProductItem | null {
  const allProducts: ProductItem[] = [
    ...ourProducts.flatMap((c: ProductCategory) => c.products),
  ];

  const product = allProducts.find(p => p.slug === slug);
  return product ?? null;
}

import { StaticImageData } from 'next/image';

export interface ProductItem {
  name: string;
  tagline: string;
  slug: string;
  img: string | StaticImageData;
  brochure: string;

  desc: {
    mcInfo: string;
    features: string[];
    specifications?: Record<string, string>;
  };
}

export interface ProductCardProps {
  item: ProductItem;
}

export interface ProductCategoryProps {
  productCat: string;
  products: ProductItem[];
}

export interface ProductsSectionProps {
  title: string;
  categories: {
    categoryName: string;
    products: ProductCategoryProps['products'];
  }[];
}

import { StaticImageData } from 'next/image';

export interface ProductItem {
  name: string;
  tagline: string;
  slug?: string;
  img: string | StaticImageData;
  brochure: string;

  desc?: {
    mcInfo: string;
    features: string[];
    specTable?: SpecsTableData;
  };
}

export interface ProductCardProps {
  item: ProductItem;
}

export interface ProductCategoryProps {
  categoryName: string;
  products: ProductItem[];
}

export interface ProductsSectionProps {
  title: string;
  categories: {
    categoryName: string;
    products: ProductCategoryProps['products'];
  }[];
}
export interface SpecsTableData {
  headers: string[];
  rows: string[][];
}

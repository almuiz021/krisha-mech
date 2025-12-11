import { StaticImageData } from 'next/image';

export interface SocialLink {
  href: string;
  svg: string;
}

export interface ProductFooterItem {
  name: string;
  href: string;
  image: string | StaticImageData;
}

export interface QuickLinkItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  GSTNo?: string;
  phone: string;
  email: string;
}

export interface AboutCompany {
  name: string;
  logo: string | StaticImageData;
  text: string;
  viewMoreLink: string;
}

export interface FooterContent {
  aboutCompany: AboutCompany;
  socialLinks: SocialLink[];
  products: ProductFooterItem[];
  quickLinks: QuickLinkItem[];
  contactInfo: ContactInfo;
}

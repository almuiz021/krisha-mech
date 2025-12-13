import { KrishaNameLogo } from '@/assets/AssetsExport';

import { ourProducts, techPartnersProducts } from '@/data/productsContent';
import { FooterContent } from '@/types/FooterTypes';

/* ------------------------------------------------
   BUILD FOOTER PRODUCTS AUTOMATICALLY
-------------------------------------------------- */

// Flatten all products from both arrays
const allProducts = [
  ...ourProducts.flatMap(cat => cat.products),
  ...techPartnersProducts.flatMap(cat => cat.products),
];

// Take first 6 items (or random 6 — configurable)
const footerProducts = allProducts.slice(0, 4).map(p => ({
  name: p.name,
  href: `/products/${p.slug}`,
  image: p.img,
}));

/* ------------------------------------------------
   FINAL FOOTER CONTENT
-------------------------------------------------- */

export const footerContent: FooterContent = {
  aboutCompany: {
    name: 'Krisha Mechatronics Ltd.',
    logo: KrishaNameLogo,
    text: 'Krisha Mechatronics is a pioneering name in machine tools, manufacturing solutions, and technological innovation.',
    viewMoreLink: '/about-us',
  },

  socialLinks: [
    {
      href: 'https://www.linkedin.com/in/krishamechatronics',
      svg: `<svg height="22" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/></svg>`,
    },
  ],

  // AUTO-GENERATED PRODUCTS LIST
  products: footerProducts,

  quickLinks: [
    { label: 'Why Krisha Mechatronics', href: '/#whyus' },
    { label: 'Industries we serve', href: '/#weserve' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Products', href: '/products' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/#contactus' },
  ],

  contactInfo: {
    address: `Off Hosur Road, Bangalore – 560100`,
    GSTNo: 'CIN: U29100KA1961PLC001433',
    phone: '+91 90000 12345',
    email: 'contact@krishamechatronics.com',
  },
};

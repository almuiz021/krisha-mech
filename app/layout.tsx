import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import AnimatePageWrapper from '@/components/layout-ui/AnimatePageWrapper';
import Navbar from '@/components/Navbar/Navbar';
import { KrishaLogo } from '@/assets/AssetsExport';
import WhatsAppButton from '@/components/Buttons/WhatsappBtn';
import Footer from '@/components/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Krisha Mech',
  description: 'Krisha is a product based mech company',

  // ⭐ Added custom meta tags here
  keywords: [
    'Krisha Mechatronics',
    'Krisha Mech',
    'CNC Machines',
    'EDM',
    'WEDM',
    'Automation',
  ],
  openGraph: {
    title: 'Krisha Mechatronics',
    description: 'High-precision engineering solutions by Krisha Mech',
    url: 'https://www.krishamechatronics.com',

    siteName: 'Krisha Mech',
    images: [
      {
        url: '/krisha-og-image.png', // replace if you want
        width: 1200,
        height: 630,
        alt: 'Krisha Mechatronics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'Krisha Mechatronics': 'Krisha Mech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${poppins.variable} scroll-smooth`}
      lang="en"
    >
      <body>
        <Navbar
          sticky={true}
          logoImg={KrishaLogo}
          mobLogo={KrishaLogo}
        />
        <AnimatePageWrapper>{children}</AnimatePageWrapper>
        <WhatsAppButton number="9764830503" />
        <Footer />
      </body>
    </html>
  );
}

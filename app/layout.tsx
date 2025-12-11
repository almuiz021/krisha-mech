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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${poppins.variable} scroll-smooth `}
      lang="en"
    >
      <body className="">
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

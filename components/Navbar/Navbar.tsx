'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import useIsMobile from '@/hooks/useIsMobile';
import Section from '../layout-ui/SectionWrap';

interface NavbarProps {
  sticky?: boolean;
  logoImg: string | StaticImageData;
  mobLogo: string | StaticImageData;
}

export default function Navbar({
  sticky = false,
  logoImg,
  mobLogo,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMob = useIsMobile();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Section
      sectionClassName={`${sticky ? 'sticky top-0' : ''} z-50 bg-white shadow`}
      id={'navbar'}
    >
      <header>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
          {/* LOGO */}
          <div className="w-[10%] max-w-[100px] min-w-[60px] sm:w-[12%]">
            <Link
              href="/"
              onClick={handleLinkClick}
            >
              <div className="relative h-16 scale-150 w-full overflow-hidden rounded-sm">
                <Image
                  src={isMob ? mobLogo : logoImg}
                  alt="Brand Logo"
                  className="h-full w-full object-contain p-2"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center space-x-6 sm:flex">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleLinkClick}
                className="
                  relative text-md font-medium text-gray-800 
                  transition-colors 
                  hover:text-red-600 
                  before:absolute before:bottom-0 before:left-0 
                  before:h-0.5 before:w-0 
                  before:bg-red-600 
                  before:transition-all before:duration-300 
                  hover:before:w-full
                "
              >
                {label}
              </Link>
            ))}
            <Link
              href={'/#contactus'}
              className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-full"
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE BURGER MENU */}
          <button
            className="text-gray-700 focus:outline-none sm:hidden"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="px-4 py-2 pb-6 text-gray-900 sm:hidden bg-white shadow-inner">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleLinkClick}
                className="block py-2 text-gray-800 hover:text-red-600 font-medium"
              >
                {label}
              </Link>
            ))}
            <Link
              onClick={handleLinkClick}
              href={'/#contactus'}
              className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg -ml-1"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </Section>
  );
}

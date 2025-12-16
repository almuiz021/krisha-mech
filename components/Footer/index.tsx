import Image from 'next/image';
import Link from 'next/link';
import { footerContent } from '@/data/footerContent';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { aboutCompany, socialLinks, products, quickLinks, contactInfo } =
    footerContent;

  return (
    <>
      <footer className="bg-panel text-cream py-16 px-6 md:px-12 rounded-t-[60px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* COLUMN 1 */}
          <div>
            <Image
              src={aboutCompany.logo}
              alt="Company logo"
              className="h-16 mb-6 w-auto backdrop-invert-100 rounded-xl"
            />

            <p className="text-cream/90 leading-7">{aboutCompany.text}</p>

            <Link
              href={aboutCompany.viewMoreLink}
              className="text-cream font-semibold mt-4 inline-block hover:underline-offset-2 hover:underline"
            >
              View More
            </Link>

            {/* Social Icons */}
            <div className="mt-8">
              <p className="font-semibold mb-3 tracking-wide">FOLLOW US ON</p>
              <div className="flex items-center gap-4 text-xl">
                {socialLinks.map((icon, index) => (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    href={icon.href}
                  >
                    <span
                      className="cursor-pointer hover:opacity-80"
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          {/* <div>
            <h3 className="font-semibold mb-6 tracking-wide text-lg">
              PRODUCTS
            </h3>
            <ul className="space-y-4">
              {products.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-center"
                >
                  <Link
                    href={item.href}
                    className="flex gap-3 items-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="h-8 w-auto"
                    />
                    <span className="hover:text-cream hover:underline">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-semibold mb-6 tracking-wide text-lg">
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-cream hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-semibold mb-6 tracking-wide text-lg">
              CONTACT
            </h3>
            <div className="space-y-6 text-cream/90">
              <div>
                <p className="font-semibold flex items-start gap-2">
                  <span>
                    <MapPin />
                  </span>
                  <span>{aboutCompany.name}</span>
                </p>

                <p className="ml-6 whitespace-pre-line">
                  {contactInfo.address}
                </p>

                {contactInfo.GSTNo && (
                  <p className="ml-6 whitespace-pre-line">
                    {contactInfo.GSTNo}
                  </p>
                )}
              </div>

              <div>
                <p className="font-semibold flex items-start gap-2">
                  <span>
                    <Phone />
                  </span>
                  <span>Service Toll Free:</span>
                </p>

                <p className="ml-6 whitespace-pre-line">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold flex items-start gap-2">
                  <span>
                    <Mail />
                  </span>
                  <span>Email:</span>
                </p>

                <p className="ml-6 whitespace-pre-line">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-cream text-panel py-4 text-center text-sm font-bold">
        <p>
          &copy; {new Date().getFullYear()} {aboutCompany.name}. All rights
          reserved.
        </p>
      </div>
    </>
  );
}

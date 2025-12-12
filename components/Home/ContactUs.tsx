'use client';

import { contactUsContent } from '@/data/contactUsContent';
import QRCode from '../contact-us/QRCode';
import GoogleMapEmbed from '../contact-us/EmbeddedMap';
import ContactForm from '../contact-us/ContactForm';

export default function ContactUs() {
  const { id, heading, paragraph, qrImage, mapEmbedUrl } = contactUsContent;

  return (
    <section
      id={id}
      className="bg-bg py-12 px-4 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand">{heading}</h2>
        <p className="mt-3 text-panel text-base sm:text-lg max-w-2xl mx-auto">
          {paragraph}
        </p>
      </div>

      {/* 2 COLUMN GRID LAYOUT */}
      <div
        className="
          max-w-6xl mx-auto 
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          gap-10
        "
      >
        {/* LEFT COLUMN = QR + MAP */}
        <div className="flex flex-col gap-8">
          <QRCode imgSrc={qrImage} />

          <GoogleMapEmbed embedUrl={mapEmbedUrl} />
        </div>

        <div className="flex">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

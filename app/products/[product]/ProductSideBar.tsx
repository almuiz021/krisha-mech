'use client';

import GetQuoteModal from './GetQuoteModal';

interface ProductSidebarProps {
  productName: string;
  brochure: string;
  phone: string;
  email: string;
}

export function ProductSidebar({
  productName,
  brochure,
  phone,
  email,
}: ProductSidebarProps) {
  return (
    <>
      {/* CTA BOX */}
      <div className="bg-white rounded-xl p-6 shadow-card-sm space-y-4 border border-muted">
        <h3 className="text-xl font-semibold text-center text-panel">
          {productName}
        </h3>

        {/* Brochure download (secondary button style) */}
        <a
          href={brochure}
          download
          className="
            w-full flex items-center justify-center gap-2
            bg-white border border-muted text-panel py-2.5 rounded-full
            shadow-card-sm hover:bg-cream transition text-sm sm:text-base
          "
        >
          Download Brochure
        </a>

        {/* Get Quote modal trigger (primary button style) */}
        <GetQuoteModal machineName={productName} />
      </div>

      {/* QUESTION BOX */}
      <div className="bg-panel text-cream rounded-xl p-6 space-y-4 shadow-card-sm">
        <h4 className="text-lg font-semibold">Have Any Question?</h4>
        <p className="text-sm text-cream/90">
          Let us tell you more about {productName}. Feel free to reach out at
          any time.
        </p>

        <a
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className="
            flex items-center justify-center gap-2
            bg-brand text-on-brand py-2 rounded-full shadow-card-sm
            hover:bg-brand-600 transition text-sm sm:text-base
          "
        >
          {phone}
        </a>

        <a
          href={`mailto:${email}`}
          className="
            flex items-center justify-center gap-2
            bg-white text-panel py-2 rounded-full shadow-card-sm
            hover:bg-cream transition text-sm sm:text-base
          "
        >
          Mail Us
        </a>
      </div>
    </>
  );
}

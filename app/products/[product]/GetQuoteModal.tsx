'use client';

import ContactForm from '@/components/contact-us/ContactForm';
import { X } from 'lucide-react';
import { useState } from 'react';

interface GetQuoteModalProps {
  machineName?: string;
  buttonClassName?: string; // optional override for styling
}

export default function GetQuoteModal({
  machineName,
  buttonClassName,
}: GetQuoteModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          buttonClassName ??
          'w-full bg-gray-900 text-white py-2.5 rounded-full hover:bg-gray-800 transition text-sm sm:text-base'
        }
      >
        Get Quote
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)} // close on backdrop click
        >
          <div
            className="relative w-full max-w-xl px-4"
            onClick={e => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="bg-white rounded-xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Get Quote
                  {machineName ? ` – ${machineName}` : ''}
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-gray-500 cursor-pointer hover:text-gray-700 text-xl leading-none"
                >
                  <X />
                </button>
              </div>

              <ContactForm machineName={machineName} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

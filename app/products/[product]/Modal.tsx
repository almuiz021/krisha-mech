'use client';

import { X } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface ModalProps {
  triggerLabel: string;
  modalTitle?: string;
  children: ReactNode;

  // Styling overrides
  variant?: 'solid' | 'outline' | 'ghost';
  bg?: string;
  textColor?: string;
  borderColor?: string;
  hoverBg?: string;
}

export default function Modal({
  triggerLabel,
  modalTitle,
  children,

  variant = 'solid',
  bg,
  textColor,
  borderColor,
  hoverBg,
}: ModalProps) {
  const [open, setOpen] = useState(false);

  // BASE BUTTON STYLE (uniform everywhere)
  const baseBtn =
    'w-full flex items-center justify-center gap-2 py-2.5 rounded-full shadow-card-sm transition text-sm sm:text-base font-semibold cursor-pointer';

  // BUILD STYLE USING VARIANT + OVERRIDES
  let buttonStyle = baseBtn;

  if (variant === 'solid') {
    buttonStyle += ` bg-${bg ?? 'brand'} text-${
      textColor ?? 'on-brand'
    } hover:bg-${hoverBg ?? 'brand-600'}`;
  } else if (variant === 'outline') {
    buttonStyle += ` bg-white border border-${borderColor ?? 'muted'} text-${
      textColor ?? 'panel'
    } hover:bg-${hoverBg ?? 'cream'}`;
  } else if (variant === 'ghost') {
    buttonStyle += ` bg-transparent text-${textColor ?? 'panel'} hover:bg-${
      hoverBg ?? 'cream'
    }`;
  }

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className={buttonStyle}
      >
        {triggerLabel}
      </button>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-xl px-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
              {/* HEADER */}
              <div className="flex items-center justify-between mb-4">
                {modalTitle && (
                  <h2 className="text-xl font-semibold text-panel">
                    {modalTitle}
                  </h2>
                )}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-panel transition text-xl leading-none"
                >
                  <X />
                </button>
              </div>

              {/* CONTENT */}
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

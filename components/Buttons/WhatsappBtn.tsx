'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  number: string; // WhatsApp number, e.g., "918767278395"
  className?: string; // optional extra classes
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  number,
  className = '',
}) => {
  const whatsappUrl = `https://wa.me/${number}`;

  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center ${className}`}
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.26 2.61.74 3.79L2 22l6.34-.87c1.15.5 2.39.78 3.66.78 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.14 0-2.24-.22-3.27-.62l-.82-.22-3.76.52.53-3.73-.22-.83c-.42-1.07-.64-2.21-.64-3.39 0-4.58 3.73-8.31 8.31-8.31s8.31 3.73 8.31 8.31-3.73 8.31-8.31 8.31zm4.86-6.24c-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.44-2.17-1.41-.8-.75-1.34-1.68-1.5-1.96-.16-.28-.02-.43.12-.57.13-.12.29-.31.43-.46.14-.14.18-.24.27-.4.09-.16.04-.31-.02-.43-.07-.12-.62-1.49-.85-2.04-.23-.54-.46-.47-.62-.47-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.98.89-.98 2.17s1.01 2.52 1.15 2.7c.14.18 1.98 3.03 4.8 4.25.67.29 1.2.46 1.61.57.68.19 1.3.16 1.79.09.54-.07 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;

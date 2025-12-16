'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface IndustryCardProps {
  title: string;
  img: string | StaticImageData;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, img }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        relative
        w-full
        max-w-sm
        overflow-hidden
        border border-muted
        rounded-2xl
        shadow-card-sm
        transition-shadow duration-300
        hover:shadow-xl
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-36 sm:h-40">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />

        {/* OVERLAY */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="
            absolute inset-0
            bg-gradient-to-t
            from-panel/90 via-panel/60 to-transparent
            flex items-end justify-center
            p-4
          "
        >
          <motion.h3
            variants={{
              rest: { y: 12, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="
              text-on-brand
              text-sm sm:text-base
              font-semibold
              text-center
            "
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;

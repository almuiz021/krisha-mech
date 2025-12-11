import { LucideIcon } from 'lucide-react';

interface WhyCardProps {
  idx: number;
  iconName: LucideIcon;
  title: string;
  info: string;
}

const WhyCard: React.FC<WhyCardProps> = ({
  idx,
  iconName: Icon,
  title,
  info,
}) => {
  // Split title into 2 lines if multi-word (preserve original logic)
  const words = title.split(' ');
  let line1 = '';
  let line2 = '';

  if (words.length === 1) {
    line1 = words[0];
    line2 = '';
  } else {
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(' ');
    line2 = words.slice(mid).join(' ');
  }

  return (
    <article
      aria-labelledby={`why-title-${idx}`}
      className="
        bg-white
        rounded-xl
        p-6
        flex
        flex-col
        items-center
        text-center
        shadow-card-sm
        hover:shadow-lg
        transition-shadow
        duration-200
        ease-in-out
      "
    >
      {/* Icon in a pill/circle */}
      <div
        className="
          flex items-center justify-center
          w-16 h-16 sm:w-18 sm:h-18
          rounded-lg
          bg-cream
          mb-4 sm:mb-6
          shrink-0
        "
        aria-hidden="true"
      >
        <Icon
          className="text-brand"
          size={28}
        />
      </div>

      {/* Title — keep the split-line logic */}
      <h3
        id={`why-title-${idx}`}
        className="
          text-lg sm:text-xl md:text-2xl
          font-semibold
          text-brand
          leading-tight
          tracking-tight
          mb-2
        "
      >
        <span>{line1}</span>
        {line2 ? (
          <>
            <br />
            <span>{line2}</span>
          </>
        ) : null}
      </h3>

      {/* Info */}
      <p className="mt-1 text-sm sm:text-base text-text-main max-w-88">
        {info}
      </p>
    </article>
  );
};

export default WhyCard;

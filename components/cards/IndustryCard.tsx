import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  idx: number;
  iconName: LucideIcon;
  title: string;
  info: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  iconName: Icon,
  title,
  info,
}) => {
  return (
    <div
      className="
        bg-white 
        border border-muted
        rounded-xl 
        p-6 
        shadow-card-sm
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
        flex flex-col gap-4
        text-left
      "
    >
      {/* Icon Container */}
      <div
        className="
          w-14 h-14 
          rounded-full 
          bg-cream
          flex items-center justify-center
          shrink-0
        "
      >
        <Icon
          className="text-brand"
          size={32}
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-panel leading-snug">{title}</h3>

      {/* Info */}
      <p className="text-sm text-text-main leading-relaxed">{info}</p>
    </div>
  );
};

export default IndustryCard;

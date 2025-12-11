import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavigationButtonProps {
  icon: LucideIcon;
  position?: 'left' | 'right';
  className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  icon: Icon,
  position = 'left',
  className = '',
}) => {
  const baseClasses = `
    absolute md:top-1/2 -translate-y-1/2 z-20 
    bbg-black/50 text-white md:p-3 p-1 rounded-full 
    flex items-center justify-center 
    transition-transform duration-200 
    hover:bg-black/25 hover:cursor-pointer 
  `;

  const positionClasses = position === 'left' ? 'left-4' : 'right-4';

  return (
    <button
      className={`${baseClasses} top-9/12 -mx-5 md:mx-5 cursor-pointer ${positionClasses} ${className}`}
      type="button"
    >
      <Icon size={24} />
    </button>
  );
};

export default NavigationButton;

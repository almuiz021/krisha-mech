'use client';

import React, { useState, ReactNode } from 'react';

const Tooltip = ({
  content,
  children,
  position = 'top',
  bgColor = 'bg-gray-800',
  textColor = 'text-white',
  maxWidth = 'max-w-xs',
  delay = 200,
  className = '',
  arrowSize = '180px',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  const positionStyles = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  const arrowStyles = {
    top: `after:absolute after:bottom-[-${arrowSize}] after:left-1/2 after:-translate-x-1/2 after:border-${arrowSize} after:border-transparent after:border-t-${bgColor.replace(
      'bg-',
      '',
    )}`,
    bottom: `after:absolute after:top-[-${arrowSize}] after:left-1/2 after:-translate-x-1/2 after:border-${arrowSize} after:border-transparent after:border-b-${bgColor.replace(
      'bg-',
      '',
    )}`,
    left: `after:absolute after:right-[-${arrowSize}] after:top-1/2 after:-translate-y-1/2 after:border-${arrowSize} after:border-transparent after:border-l-${bgColor.replace(
      'bg-',
      '',
    )}`,
    right: `after:absolute after:left-[-${arrowSize}] after:top-1/2 after:-translate-y-1/2 after:border-${arrowSize} after:border-transparent after:border-r-${bgColor.replace(
      'bg-',
      '',
    )}`,
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={`absolute z-10 rounded-md p-2 shadow-lg ${bgColor} ${textColor} ${maxWidth} ${
          positionStyles[position]
        } ${
          arrowStyles[position]
        } ${className} transition-opacity duration-200 ${
          isVisible
            ? 'scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;

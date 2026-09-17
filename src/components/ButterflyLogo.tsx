import React from 'react';

interface ButterflyLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const ButterflyLogo: React.FC<ButterflyLogoProps> = ({
  className = 'w-7 h-7 text-[#161c23]',
  size,
  color,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <g
        stroke={color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left Double-Wing Contour (Upper main wing + Lower wing lobe) */}
        {/* Fluid outer stroke matching the user's line-art illustration */}
        <path
          d="M 53 58 C 47 62 38 66 31 63 C 24 60 22 51 28 44 C 33 39 41 45 44 49 C 45 47 43 41 38 31 C 32 20 38 12 46 15 C 53 17 56 26 55 37 C 54 44 52 52 53 58 Z"
          fill="none"
          strokeWidth="3.2"
        />

        {/* Right Upper Wing Crescent */}
        <path
          d="M 52 39 C 56 27 63 17 72 17 C 76 17 77 22 74 29 C 69 41 62 52 54 62"
          fill="none"
          strokeWidth="3.2"
        />

        {/* Inner Right Wing Flare / Accent Line */}
        <path
          d="M 57 48 C 61 46 66 45 68 49 C 66 54 61 60 55 64"
          fill="none"
          strokeWidth="2.4"
        />

        {/* Lower Body & Elegant Tail Sweep Flourish */}
        <path
          d="M 43 62 C 48 67 54 73 63 70 C 67 68 70 65 72 61"
          fill="none"
          strokeWidth="2.8"
        />
      </g>
    </svg>
  );
};

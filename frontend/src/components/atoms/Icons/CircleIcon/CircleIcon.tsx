import React from 'react';
import '../../../../index.css';

type IconProps = {
  fillColor: "text-primary-50" | "text-secondary-40" | "text-black-900";
  size: "14" | "16" | "18" | "20" | "22" | "24";
}

export default function CircleIcon({ fillColor, size}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="black" className={`fill-current ${fillColor}`} />
    </svg>
  )
}

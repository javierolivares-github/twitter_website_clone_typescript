import React from 'react';
import '../../../../index.css';

type Caption1Props = {
  children: string;
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-gray-100";
}

export default function Caption1({ children, weight, color }: Caption1Props) {
  return (
    <span className={`text-[0.75rem] leading-[0.875rem] sm:text-[0.875rem] sm:leading-[1rem] ${color} ${weight}`}>
      {children}
    </span>
  )
}


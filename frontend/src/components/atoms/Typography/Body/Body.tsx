import React from 'react';
import '../../../../index.css';

type BodyProps = {
  children: string;
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-gray-100";
}

export default function Body({ children, weight, color }: BodyProps) {
  return (
    <p className={`text-[0.875rem] leading-[0.875rem] sm:text-[1rem] sm:leading-[1rem] ${color} ${weight}`}>
      {children}
    </p>
  )
}


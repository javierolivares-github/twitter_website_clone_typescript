import React from 'react';
import '../../../../index.css';

type Caption2Props = {
  children: string;
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-gray-100";
}

export default function Caption2({ children, weight, color }: Caption2Props) {
  return (
    <span className={`text-[0.75rem] leading-[0.75rem] sm:text-[0.875rem] sm:leading-[0.875rem] ${color} ${weight}`}>
      {children}
    </span>
  )
}


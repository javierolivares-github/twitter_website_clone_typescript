import React, { Children } from 'react';
import '../../../../index.css';

type Heading2Props = {
  children: string;
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-gray-100";
}

export default function Heading2({ children, weight, color }: Heading2Props) {
  return (
    <h3 className={`text-[1rem] leading-[1rem] sm:text-[1.125rem] sm:leading-[1.125rem] ${color} ${weight}`}>
      {children}
    </h3>
  )
}


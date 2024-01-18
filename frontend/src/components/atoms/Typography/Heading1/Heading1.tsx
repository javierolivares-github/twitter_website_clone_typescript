import React, { Children } from 'react';
import '../../../../index.css';

type Heading1Props = {
  children: string;
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-gray-100";
}

export default function Heading1({ children, weight, color }: Heading1Props) {
  return (
    <h2 className={`text-[1.125rem] leading-[1.125rem] sm:text-[1.25rem] sm:leading-[1.25rem] ${color} ${weight}`}>
      {children}
    </h2>
  )
}


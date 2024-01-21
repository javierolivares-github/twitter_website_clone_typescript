import React, { Children } from 'react';
import '../../../../index.css';
import { TextProps } from '../../../../lib/types';

export default function Heading2({ children, weight, color }: TextProps) {
  return (
    <h3 className={`text-[1rem] leading-[1rem] sm:text-[1.125rem] sm:leading-[1.125rem] ${color} ${weight}`}>
      {children}
    </h3>
  )
}


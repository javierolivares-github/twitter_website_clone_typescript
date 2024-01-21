import React from 'react';
import '../../../../index.css';
import { TextProps } from '../../../../lib/types';

export default function Caption2({ children, weight, color }: TextProps) {
  return (
    <span className={`text-[0.75rem] leading-[0.75rem] sm:text-[0.875rem] sm:leading-[0.875rem] ${color} ${weight}`}>
      {children}
    </span>
  )
}


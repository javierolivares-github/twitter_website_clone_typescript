import React from 'react';
import '../../../../index.css';
import { TextProps } from '../../../../lib/types';

const Body = ({ children, weight, color }: TextProps) => {
  return (
    <p className={`text-[0.875rem] leading-[0.875rem] sm:text-[1rem] sm:leading-[1rem] ${color} ${weight}`}>
      {children}
    </p>
  )
}

export default Body;


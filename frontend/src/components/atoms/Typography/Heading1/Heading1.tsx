import React, { Children } from 'react';
import '../../../../index.css';
import { TextProps } from '../../../../lib/types';

const Heading1 = ({ children, weight, color }: TextProps) => {
  return (
    <h2 className={`text-[1.125rem] leading-[1.125rem] sm:text-[1.25rem] sm:leading-[1.25rem] ${color} ${weight}`}>
      {children}
    </h2>
  )
}

export default Heading1;


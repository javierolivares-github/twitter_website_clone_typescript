import React from 'react';
import '../../../../index.css';
import { IconProps } from '../../../../lib/types';

export default function CircleIcon({ fillColor, width, height, smWidth, smHeight }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
    className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <circle cx="12" cy="12" r="11" fill="black" className={`fill-current ${fillColor}`} />
    </svg>
  )
}

import React from 'react';
import '../../../../index.css';
import { IconProps } from '../../../../lib/types';

const GifIcon = ({ fillColor, width, height, smWidth, smHeight }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <path d="M20.5 2.01999H3.5C2.26 2.01999 1.25 3.02699 1.25 4.26699V19.774C1.25 21.012 2.26 22.02 3.5 22.02H20.5C21.74 22.02 22.75 21.012 22.75 19.774V4.26699C22.75 3.02699 21.74 2.01999 20.5 2.01999ZM21.25 19.774C21.25 20.184 20.914 20.52 20.5 20.52H3.5C3.086 20.52 2.75 20.184 2.75 19.774V4.26699C2.75 3.85499 3.086 3.51999 3.5 3.51999H20.5C20.914 3.51999 21.25 3.85499 21.25 4.26699V19.774ZM19 10.5V8.79999H14.6V15.2H16.3V13.2H18.3V11.5H16.3V10.5H19ZM11.7 8.79999H13.4V15.2H11.7V8.79999ZM8.1 10.4C8.5 10.4 9 10.6 9.3 10.9L10.5 9.89999C9.9 9.19999 9 8.79999 8.1 8.79999C6.3 8.79999 4.9 10.2 4.9 12C4.9 13.8 6.3 15.2 8.1 15.2C9.1 15.2 9.9 14.8 10.5 14.1V11.6H7.7V12.8H8.9V13.4C8.7 13.5 8.4 13.6 8.1 13.6C7.2 13.6 6.5 12.9 6.5 12C6.5 11.2 7.2 10.4 8.1 10.4Z" fill="black" className={`fill-current ${fillColor}`} />
    </svg>  
  )
}

export default GifIcon;

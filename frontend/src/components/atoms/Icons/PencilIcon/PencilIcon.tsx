import React from 'react';
import '/src/index.css';
import { IconProps } from '../../../../lib/types';

const PencilIcon = ({ fillColor, width, height, smWidth, smHeight }: IconProps) => {
  return (
    <svg data-testid="pencil-outlined-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`xl:hidden ${width} ${height} ${smWidth} ${smHeight}`}>
      <path data-testid="pencil-outlined-path" d="M17.0686 5.87108L4.07812 18.8906L3 21L5.10891 19.9219L18.1289 6.93139L17.0686 5.87108ZM19.7198 3.21983L18.6595 4.28014L19.7198 5.34093L20.7802 4.28014C20.9207 4.13951 20.9997 3.94882 20.9997 3.74999C20.9997 3.55116 20.9207 3.36047 20.7802 3.21983C20.6395 3.07929 20.4488 3.00034 20.25 3.00034C20.0512 3.00034 19.8605 3.07929 19.7198 3.21983Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        className={`stroke-current ${fillColor}`}/>
    </svg>
  )
}

export default PencilIcon;




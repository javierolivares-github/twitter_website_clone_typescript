import React from 'react';
import '../../../../index.css';
import { IconProps } from '../../../../lib/types';


const StarIcon = ({ fillColor, width, height, smWidth, smHeight }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
    className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <path d="M9.198 19.434H8.098V18.418C8.098 18.004 7.763 17.668 7.348 17.668C6.933 17.668 6.598 18.004 6.598 18.418V19.434H5.57C5.156 19.434 4.82 19.77 4.82 20.184C4.82 20.598 5.156 20.934 5.57 20.934H6.6V21.95C6.6 22.364 6.935 22.7 7.35 22.7C7.765 22.7 8.1 22.364 8.1 21.95V20.934H9.198C9.612 20.934 9.948 20.598 9.948 20.184C9.948 19.77 9.612 19.434 9.198 19.434ZM22.772 10.506L17.154 8.31399L14.994 1.81399C14.892 1.50699 14.604 1.29999 14.282 1.29999C13.96 1.29999 13.672 1.50699 13.57 1.81299L11.41 8.31299L5.79 10.505C5.503 10.617 5.313 10.895 5.313 11.205C5.313 11.515 5.503 11.79 5.791 11.903L11.411 14.095L13.571 20.595C13.673 20.901 13.961 21.108 14.283 21.108C14.605 21.108 14.893 20.901 14.995 20.595L17.155 14.095L22.775 11.903C23.062 11.791 23.252 11.513 23.252 11.203C23.252 10.893 23.062 10.618 22.774 10.506H22.772ZM16.282 12.826C16.074 12.906 15.912 13.076 15.842 13.286L14.282 17.981L12.722 13.288C12.652 13.078 12.492 12.908 12.284 12.826L8.129 11.206L12.283 9.58399C12.491 9.50399 12.653 9.33399 12.723 9.12199L14.283 4.42899L15.843 9.12299C15.913 9.33499 16.073 9.50499 16.281 9.58599L20.436 11.206L16.281 12.828L16.282 12.826ZM4.052 1.29999H4.033C3.62 1.29999 3.283 1.63599 3.283 2.04999V3.81199H1.5C1.086 3.81199 0.75 4.14799 0.75 4.56199C0.75 4.97599 1.086 5.31199 1.5 5.31199H3.282V7.07399C3.282 7.48799 3.618 7.82399 4.032 7.82399C4.446 7.82399 4.782 7.48799 4.782 7.07399V5.31199H6.662C7.077 5.31199 7.412 4.97599 7.412 4.56199C7.412 4.14799 7.077 3.81199 6.662 3.81199H4.783V2.04999C4.783 1.64199 4.456 1.30999 4.052 1.29999Z" fill="black" className={`fill-current ${fillColor}`} />
    </svg>
  )
}

export default StarIcon;

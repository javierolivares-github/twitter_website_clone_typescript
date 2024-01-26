import React from 'react';
import '/src/index.css';
import { IconProps } from '../../../../lib/types';

const BookmarksIcon = ({ fillColor, isFilled, width, height, smWidth, smHeight }: IconProps) => {
  const svgOutlined = () => {
    return (
      <svg data-testid="bookmarks-outlined-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height} ${smWidth} ${smHeight}`}>
        <path data-testid="bookmarks-outlined-path" d="M19.9001 23.5C19.7431 23.5 19.5881 23.45 19.4581 23.356L12.0001 17.928L4.5421 23.358C4.3141 23.522 4.0121 23.548 3.7601 23.418C3.5101 23.291 3.3501 23.033 3.3501 22.751V5.60001C3.3501 4.36001 4.3601 3.35001 5.6001 3.35001H18.3981C19.6381 3.35001 20.6481 4.36001 20.6481 5.60001V22.75C20.6481 23.032 20.4901 23.29 20.2381 23.418C20.1321 23.473 20.0151 23.5 19.8981 23.5H19.9001ZM12.0001 16.25C12.1551 16.25 12.3101 16.298 12.4401 16.394L19.1501 21.277V5.60001C19.1501 5.18801 18.8131 4.85001 18.4001 4.85001H5.6001C5.1871 4.85001 4.8501 5.18801 4.8501 5.60001V21.277L11.5601 16.394C11.6901 16.298 11.8451 16.25 12.0001 16.25Z" fill="black" className={`fill-current ${fillColor}`}/>
      </svg>
    )
  }

  const svgFilled = () => {
    return (
      <svg data-testid="bookmarks-filled-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height} ${smWidth} ${smHeight}`}>
        <path data-testid="bookmarks-filled-path" d="M19.9 23.5C19.7 23.5 19.6 23.5 19.5 23.4L12 17.9L4.50005 23.3C4.30005 23.5 4.00005 23.5 3.70005 23.4C3.50005 23.3 3.30005 23 3.30005 22.7V5.60002C3.30005 4.40002 4.30005 3.40002 5.50005 3.40002H18.3C19.5 3.40002 20.5 4.40002 20.5 5.60002V22.7C20.5 23 20.3001 23.2 20.1 23.4C20.1 23.5 20 23.5 19.9 23.5Z" fill="black" className={`fill-current ${fillColor}`}/>
      </svg>
    ) 
  }

  return (
    <>
      {isFilled ? svgFilled() : svgOutlined()}
    </>
  )
}

export default BookmarksIcon;




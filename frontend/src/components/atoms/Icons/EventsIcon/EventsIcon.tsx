import React from 'react';
import '../../../../index.css';
import { IconProps } from '../../../../lib/types';

const EventsIcon = ({ fillColor, width, height, smWidth, smHeight }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 10.4C12.1 10.4 9.30005 13.2 9.30005 16.6C9.30005 20 12.1 22.8 15.5 22.8C18.9 22.8 21.7001 20 21.7001 16.6C21.7001 13.2 18.9 10.4 15.5 10.4ZM15.5 21.4C12.9 21.4 10.8 19.3 10.8 16.7C10.8 14.1 12.9 12 15.5 12C18.1 12 20.2001 14.1 20.2001 16.7C20.2001 19.2 18.1 21.4 15.5 21.4ZM18 2.20001H16.7V1.90001C16.7 1.50001 16.4 1.10001 15.9 1.10001C15.5 1.10001 15.1 1.40001 15.1 1.90001V2.20001H7.70005V1.90001C7.70005 1.50001 7.40005 1.10001 6.90005 1.10001C6.50005 1.10001 6.10005 1.40001 6.10005 1.90001V2.20001H4.80005C3.40005 2.20001 2.30005 3.30001 2.30005 4.70001V17.8C2.30005 19.2 3.40005 20.3 4.80005 20.3H7.70005C8.10005 20.3 8.50005 20 8.50005 19.5C8.50005 19.1 8.20005 18.7 7.70005 18.7H4.80005C4.20005 18.7 3.80005 18.2 3.80005 17.7V7.90001C3.80005 7.60001 4.20005 7.20001 4.80005 7.20001H18C18.6 7.20001 19 7.60001 19 7.90001V9.70001C19 10.1 19.3 10.5 19.8 10.5C20.2 10.5 20.6 10.2 20.6 9.70001V4.70001C20.5 3.30001 19.4 2.20001 18 2.20001ZM18.9 18.7C18.8 18.9 18.5 19.1 18.3 19.1C18.2 19.1 18 19.1 17.9 19L14.8 17V14C14.8 13.6 15.1 13.2 15.6 13.2C16 13.2 16.4 13.5 16.4 14V16.2L18.8 17.7C19 17.9 19.1 18.3 18.9 18.7ZM19 5.90001C18.7001 5.80001 18.3 5.70001 18 5.70001H4.80005C4.40005 5.70001 4.10005 5.80001 3.80005 5.90001V4.70001C3.80005 4.10001 4.30005 3.70001 4.80005 3.70001H6.10005V4.20001C6.10005 4.60001 6.40005 5.00001 6.90005 5.00001C7.30005 5.00001 7.70005 4.70001 7.70005 4.20001V3.70001H15.2V4.20001C15.2 4.60001 15.5 5.00001 16 5.00001C16.4 5.00001 16.8 4.70001 16.8 4.20001V3.70001H18C18.6 3.70001 19 4.20001 19 4.70001V5.90001Z" fill="black" className={`fill-current ${fillColor}`} />
    </svg>
  )
}

export default EventsIcon;

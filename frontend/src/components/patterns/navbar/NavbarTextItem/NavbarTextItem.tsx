import React from 'react';
import '/src/index.css';

type NavbarTextProps = {
  children: string;
  color: string;
  isActive: boolean;
}

const NavbarTextItem = ({ children, color, isActive }: NavbarTextProps ) => {
  return (
    <span className={`${isActive ? 'font-semibold' : 'font-normal'} text-[1.25rem] 
    leading-5 ${color} hidden sm:block`}>
      {children}
    </span>
  )
}

export default NavbarTextItem;


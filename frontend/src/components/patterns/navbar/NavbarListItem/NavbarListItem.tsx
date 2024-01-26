import React from 'react';
import '/src/index.css';
import NavbarTextItem from '../NavbarTextItem';

type NavbarItemProps = {
  icon: React.JSX.Element;
  text: string;
  isActive: boolean;
}

const NavbarListItem = ({ icon, text, isActive }: NavbarItemProps) => {
  return (
    <li
      data-testid="navbar-list-item"
      className={`rounded-full inline-flex items-center gap-3 p-3 
      ${isActive ? "bg-primary-90 hover:bg-primary-90" : "hover:bg-primary-98"}
      cursor-pointer`}
    >
      {icon}
      <NavbarTextItem color="text-secondary-15" isActive={isActive}>
        {text}
      </NavbarTextItem>
    </li>
  )
}

export default NavbarListItem;



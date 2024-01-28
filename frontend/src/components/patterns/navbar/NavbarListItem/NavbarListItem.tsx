import React from 'react';
import '/src/index.css';
import NavbarTextItem from '../NavbarTextItem';

type NavbarItemProps = {
  iconChild: React.JSX.Element;
  textChild: string;
  isActive: boolean;
}

const NavbarListItem = ({ iconChild, textChild, isActive }: NavbarItemProps) => {
  return (
    <li
      data-testid="navbar-list-item"
      className={`max-w-[2.875rem] max-h-[2.875rem] xl:max-w-[15rem] rounded-full inline-flex items-center gap-3 p-3 
      ${isActive ? "bg-primary-90 hover:bg-primary-90" : "hover:bg-primary-98"}
      cursor-pointer`}
    >
      {iconChild}
      <NavbarTextItem color="text-secondary-15" isActive={isActive}>
        {textChild}
      </NavbarTextItem>
    </li>
  )
}

export default NavbarListItem;



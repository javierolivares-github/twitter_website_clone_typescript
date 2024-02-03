import React from 'react';
import '/src/index.css';
import NavbarTextItem from '../NavbarTextItem';
import { Link } from 'react-router-dom';

type NavbarItemProps = {
  iconChild: React.JSX.Element;
  textChild: string;
  isActive: boolean;
  path: string;
}

const NavbarListItem = ({ iconChild, textChild, isActive, path }: NavbarItemProps) => {
  return (
    <li data-testid="navbar-list-item" className={`list-none`}>
      <Link to={path} className={`max-w-[2.875rem] max-h-[2.875rem] xl:max-w-[15rem] rounded-full flex items-center gap-3 p-3 ${isActive ? "bg-primary-90 hover:bg-primary-90" : "hover:bg-primary-98"} cursor-pointer`}>

        {iconChild}
        <NavbarTextItem color="text-secondary-15" isActive={isActive}>
          {textChild}
        </NavbarTextItem>

      </Link>
    </li>
  )
}

export default NavbarListItem;



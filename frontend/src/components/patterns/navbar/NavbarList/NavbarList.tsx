import React from 'react';
import '/src/index.css';
import NavbarListItem from '../NavbarListItem';
import { navbarInfo } from '../../../../data/navbarInfo';

const NavbarList = () => {
  return (
    <div
      data-testid="navbar-list-container"
      className={`inline-flex flex-col gap-4`}
    >
      {navbarInfo.map((item) => (
        <NavbarListItem
          key={item.id}
          iconChild={item.element}
          textChild={item.name}
          isActive={false}
        />
      ))}
    </div>
  )
}

export default NavbarList;



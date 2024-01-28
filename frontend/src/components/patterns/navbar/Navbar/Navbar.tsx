import React from 'react';
import '/src/index.css';
import TwitterLogoButton from '../../../atoms/Buttons/TwitterLogoButton';
import MoonButton from '../../../atoms/Buttons/MoonButton';
import NavbarList from '../NavbarList';
import NavbarTweetButton from '../NavbarTweetButton';
import NavbarProfileContainer from '../NavbarProfileContainer';

const Navbar = () => {
  return (
    <div
      data-testid="navbar-container"
      className={`w-[7.5rem] xl:w-[15rem] h-[50rem] inline-flex flex-col gap-4 p-4 bg-gray-100`}
    >
      {/* navbar__header */}
      <div className={`flex flex-col gap-4 xl:flex-row xl:justify-between`}>
        <TwitterLogoButton />
        <MoonButton />
      </div>
      {/* navbar__body */}
      <div className={`flex flex-col flex-initial gap-4`}>
        <NavbarList />
        <NavbarTweetButton textContent='Tweet' />
      </div>
      {/* navbar__footer */}
      <div className={`grow flex flex-col justify-end`}>
        <NavbarProfileContainer />
      </div>
    </div>
  )
}

export default Navbar;



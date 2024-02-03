import React from 'react';
import '/src/index.css';
import TwitterLogoButton from '../../../atoms/Buttons/TwitterLogoButton';
import MoonButton from '../../../atoms/Buttons/MoonButton';
import NavbarList from '../NavbarList';
import NavbarTweetButton from '../NavbarTweetButton';
import NavbarProfileContainer from '../NavbarProfileContainer';
import {handleClick} from '../../../../lib/helpers';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

const Navbar = () => {
  return (
    <div
      data-testid="navbar-container"
      className={`w-[7.5rem] xl:w-[15rem] h-[100vh] inline-flex flex-col gap-4 p-4 bg-gray-100 sticky top-0 left-0`}
    >
      {/* navbar__header */}
      <div className={`flex flex-col gap-4 xl:flex-row xl:justify-between`}>
        <TwitterLogoButton />
        <MoonButton />
      </div>
      {/* navbar__body */}
      <div className={`flex flex-col flex-initial gap-4`}>
        <NavbarList />
        <NavbarTweetButton textContent='Tweet' onClick={handleClick}/>
      </div>
      {/* navbar__footer */}
      <div className={`grow flex flex-col justify-end`}>
        <NavbarProfileContainer />
      </div>
    </div>
  )
}

export default Navbar;



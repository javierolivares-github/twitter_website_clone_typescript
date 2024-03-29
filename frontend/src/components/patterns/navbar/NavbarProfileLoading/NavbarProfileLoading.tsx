import React from 'react';
import '/src/index.css';
import '/src/css/placeholderAnimation.css';
import DotsIcon from '../../../atoms/Icons/DotsIcon';

const NavbarProfileLoading = () => {
  return (
    <div
      data-testid="navbar-profile-loading"
      className={`max-w-[15rem] rounded-full flex items-center justify-between xl:p-4`}
    >
      {/* container */}
      <div className='flex gap-4'>
        {/* image */}
        <div className="w-10 h-10 rounded-full bg-color-pulse-animation"></div>
        {/* Texts */}
        <div className="hidden xl:flex flex-col gap-1">
          <div className="w-[4.5rem] h-4 rounded-2xl bg-color-pulse-animation"></div>
          <div className="w-[4rem] h-[0.875rem] rounded-2xl bg-color-pulse-animation"></div>
        </div>
      </div>
      
      {/* icon */}
      <div className='hidden xl:block'>
        <DotsIcon fillColor='text-black-100' width='w-[1.5rem]' height='h-[1.5rem]' />
      </div> 
    </div>
  )
}

export default NavbarProfileLoading;



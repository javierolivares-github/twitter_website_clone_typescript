import React from 'react';
import '/src/index.css';
import ProfileImage from '../../../atoms/Images/ProfileImage';
import DotsIcon from '../../../atoms/Icons/DotsIcon';

type NavbarProfileItemProps = {
  profileImageUrl: string;
  username: string;
  account: string;
}

const NavbarProfileItem = ({ profileImageUrl, username, account }: NavbarProfileItemProps) => {
  return (
    <div
      data-testid="navbar-profile"
      className={`max-w-[2.5rem] xl:max-w-[15rem] rounded-full flex items-center justify-between xl:p-4 hover:bg-primary-98
      cursor-pointer`}
    >
      {/* Container */}
      <div className='flex items-center gap-4'>
        {/* Image */}
        <ProfileImage imageUrl={profileImageUrl} width="w-10" height='h-10' />
        {/* Texts */}
        <div className={`hidden xl:flex flex-col gap-1`}>
          <span className="font-bold text-[1rem] leading-[1rem] text-secondary-15">{username}</span>
          <span className="font-normal text-[0.875rem] leading-[0.875rem] text-secondary-40">{account}</span>
        </div>
      </div>
      {/* Icon */}
      <div className="hidden xl:flex justify-center items-center">
        <DotsIcon fillColor="text-black-900" width="w-[1.375rem]" height="h-[1.375rem]" />
      </div>
    </div>
  )
}

export default NavbarProfileItem;



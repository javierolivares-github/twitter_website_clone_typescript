import React from 'react';
import '/src/index.css';
import ProfileImage from '../../../atoms/Images/ProfileImage';
import DotsIcon from '../../../atoms/Icons/DotsIcon';

type NavbarProfileProps = {
  profileImageUrl: string;
  username: string;
  account: string;
}

const NavbarProfile = ({ profileImageUrl, username, account }: NavbarProfileProps) => {
  return (
    <div
      data-testid="navbar-profile"
      className={`rounded-full inline-flex justify-center gap-4 p-4 hover:bg-primary-98
      cursor-pointer`}
    >
      {/* Image */}
      <ProfileImage imageUrl={profileImageUrl} width="w-10" height='h-10' />
      {/* Texts */}
      <div className={`hidden xl:flex flex-col gap-1`}>
        <span className="font-bold text-[1rem] leading-[1rem] text-secondary-15">{username}</span>
        <span className="font-normal text-[0.875rem] leading-[0.875rem] text-secondary-40">{account}</span>
      </div>
      {/* Button */}
      <div className="hidden xl:flex justify-center items-center">
        <DotsIcon fillColor="text-black-900" width="w-[1.375rem]" height="h-[1.375rem]" />
      </div>
    </div>
  )
}

export default NavbarProfile;



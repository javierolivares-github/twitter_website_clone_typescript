import React from 'react';
import '/src/index.css';
import PencilIcon from '../../../atoms/Icons/PencilIcon';

type NavbarButton = {
  textContent: string;
}

const NavbarTweetButton = ({ textContent }: NavbarButton) => {
  return (
    <button
      data-testid="navbar-tweet-button"
      className={`max-w-[3.375rem] max-h-[3.375rem] xl:max-w-[15rem] rounded-full border-none outline-none inline-flex 
      justify-center items-center p-4 bg-primary-50 hover:bg-secondary-40
      transition duration-100 ease-in-out active:scale-95 cursor-pointer`}
    >
      <PencilIcon fillColor="text-gray-100" width="w-[1.375rem]" height="h-[1.375]" />
      <span data-testid="navbar-tweet-button-span" className='hidden xl:block font-bold text-[1.25rem] leading-[1.25rem] text-gray-100'>{textContent}</span>
    </button>
  )
}

export default NavbarTweetButton;



import React from 'react';
import '/src/index.css';
import TwitterIcon from '../../Icons/TwitterIcon';

const TwitterLogoButton = () => {
  return (
    <button
      data-testid="twitter-button-container"
      className={`flex justify-center items-center p-[11px] rounded-full border-none outline-none
      hover:bg-primary-98 cursor-pointer`}
    >
      <TwitterIcon fillColor="text-primary-50" width="w-6" height="h-6" />
    </button>
  )
}

export default TwitterLogoButton;
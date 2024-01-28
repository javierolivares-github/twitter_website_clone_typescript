import React from 'react';
import '/src/index.css';
import TwitterIcon from '../../Icons/TwitterIcon';

const TwitterLogoButton = () => {
  return (
    <button
      data-testid="twitter-button-container"
      className={`inline-flex justify-center items-center w-[2.875rem] h-[2.875rem] rounded-full border-none outline-none
      hover:bg-primary-98 cursor-pointer`}
    >
      <TwitterIcon fillColor="text-primary-50" width="w-6" height="h-6" />
    </button>
  )
}

export default TwitterLogoButton;
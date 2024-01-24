import React from 'react';
import '/src/index.css';
import MoonIcon from '../../Icons/MoonIcon';

const MoonButton = () => {
  return (
    <button
      data-testid="twitter-button-container"
      className={`flex justify-center items-center p-3 rounded-full border-none outline-none
      hover:bg-primary-98 cursor-pointer`}
    >
      <MoonIcon fillColor="text-secondary-15" width="w-[1.375rem]" height="h-[1.375rem]" />
    </button>
  )
}

export default MoonButton;
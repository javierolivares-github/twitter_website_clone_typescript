import React from 'react';
import '/src/index.css';
import IconButton from '../IconButton';
import DotsIcon from '../../Icons/DotsIcon';

const IconButtonMenu = () => {
  return (
    <IconButton>
      <DotsIcon 
        fillColor="text-black-900"
        width="w-[1rem]"
        height="h-[1rem]"
        smWidth="sm:w-[1.125rem]"
        smHeight="sm:h-[1.125rem]"
      />
    </IconButton>
  )
}

export default IconButtonMenu;
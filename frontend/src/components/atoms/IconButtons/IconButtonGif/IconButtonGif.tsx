import React from 'react';
import '/src/index.css';
import IconButton from '../IconButton';
import GifIcon from '../../Icons/GifIcon';

const IconButtonGif = () => {
  return (
    <IconButton>
      <GifIcon 
        fillColor="text-primary-50"
        width="w-[1rem]"
        height="h-[1rem]"
        smWidth="sm:w-[1.125rem]"
        smHeight="sm:h-[1.125rem]"
      />
    </IconButton>
  )
}

export default IconButtonGif;

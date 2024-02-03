import React from 'react';
import '/src/index.css';
import IconButton from '../IconButton';
import LocationIcon from '../../Icons/LocationIcon';
import { IconButtonStarProps } from '../../../../lib/types';

const IconButtonLocation = ({onClick}: IconButtonStarProps) => {
  return (
    <IconButton onClick={onClick}>
      <LocationIcon 
        fillColor="text-primary-50"
        width="w-[1rem]"
        height="h-[1rem]"
        smWidth="sm:w-[1.125rem]"
        smHeight="sm:h-[1.125rem]"
      />
    </IconButton>
  )
}

export default IconButtonLocation;



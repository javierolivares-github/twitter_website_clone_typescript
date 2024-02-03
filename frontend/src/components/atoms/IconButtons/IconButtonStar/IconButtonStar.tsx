import React from 'react';
import '/src/index.css';
import IconButton from '../IconButton';
import StarIcon from '../../Icons/StarIcon';
import { IconButtonStarProps } from '../../../../lib/types';

const IconButtonStar = ({ onClick }: IconButtonStarProps) => {
  return (
    <IconButton onClick={onClick}>
      <StarIcon 
        fillColor="text-primary-50"
        width="w-[1rem]"
        height="h-[1rem]"
        smWidth="sm:w-[1.125rem]"
        smHeight="sm:h-[1.125rem]"
      />
    </IconButton>
  )
}

export default IconButtonStar;


import React from 'react';
import '/src/index.css';
import IconButton from '../IconButton';
import EmojiIcon from '../../Icons/EmojiIcon';
import { IconButtonStarProps } from '../../../../lib/types';

const IconButtonEmoji = ({onClick}: IconButtonStarProps) => {
  return (
    <IconButton onClick={onClick}>
      <EmojiIcon
        fillColor="text-primary-50"
        width="w-[1rem]"
        height="h-[1rem]"
        smWidth="sm:w-[1.125rem]"
        smHeight="sm:h-[1.125rem]"
      />
    </IconButton>
  )
}

export default IconButtonEmoji;

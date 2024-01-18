import React from 'react';
import '/src/index.css';
import IconButton from '../IconButton';
import StarIcon from '../../Icons/StarIcon';

type IconButtonProps = {
  screen: "small" | "medium";
}

export default function IconButtonStar({ screen }: IconButtonProps) {
  return (
    <IconButton>
      <StarIcon 
        fillColor="text-primary-50" 
        size={screen === "small" && "16" || screen === "medium" && "18"} 
      />
    </IconButton>
  )
}

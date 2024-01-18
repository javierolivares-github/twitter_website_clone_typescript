import React from 'react';
import '/src/index.css';
import IconButton from '../IconButton';
import ImagesIcon from '../../Icons/ImagesIcon';

type IconButtonProps = {
  screen: "small" | "medium";
}

export default function IconButtonImage({ screen }: IconButtonProps) {
  return (
    <IconButton>
      <ImagesIcon 
        fillColor="text-primary-50" 
        size={screen === "small" && "16" || screen === "medium" && "18"} 
      />
    </IconButton>
  )
}

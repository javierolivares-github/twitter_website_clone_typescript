import React from 'react';
import { IconButtonProps } from '../../../../lib/types'

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <button
      data-testid="icon-button-container"
      className={`flex justify-center items-center gap-2 p-2 rounded-full outline-none border-none cursor-pointer hover:bg-primary-98`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default IconButton;

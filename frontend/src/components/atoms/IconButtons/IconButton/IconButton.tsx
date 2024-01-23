import React from 'react';

type IconButtonProps = {
  children: React.JSX.Element;
}

const IconButton = ({ children }: IconButtonProps) => {
  return (
    <button
      data-testid="icon-button-container"
      className={`flex justify-center items-center gap-2 p-2 rounded-full outline-none border-none cursor-pointer hover:bg-primary-98`}
    >
      {children}
    </button>
  )
}

export default IconButton;

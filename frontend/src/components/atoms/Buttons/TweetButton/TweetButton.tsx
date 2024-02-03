import React from 'react';
import '/src/index.css';

type TweetButtonProps = {
  size: "small" | "medium";
  children: string;
  onClick: () => void;
}

const TweetButton = ({ size, children, onClick }: TweetButtonProps) => {
  return (
    <button
      data-testid="tweet-button-container"
      className={`border-none outline-none cursor-pointer rounded-full flex justify-center items-center bg-primary-50 hover:bg-secondary-40 text-gray-100 font-bold transition duration-100 ease-in-out active:scale-95 ${size === "small" && "text-[0.875rem] leading-[0.875rem] p-3"} ${size === "medium" && "text-[1.25rem] leading-[1.25rem] p-5"} `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TweetButton;


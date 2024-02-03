import React from 'react';
import '/src/index.css';
import '/src/css/placeholderAnimation.css';

type LoadingProps = {
  color: string;
}

const TweetListItemLoading = ({ color }: LoadingProps) => {
  return (
    <div
      data-testid="tweetlistitem-loading-container"
      className={`w-full max-w-[80rem] flex flex-col gap-2 p-4 bg-gray-100 border-l 
      border-b border-r border-solid border-black-100`}
    >
      {/* Tweet info */}
      <div className={`w-11 h-11 sm:w-12 sm:h-12 ${color} rounded-full`}></div>

      {/* Tweet username */}
      <div className="flex gap-2 items-center">
        <div className={`w-[6rem] h-[1.125rem] sm:h-[1.25rem] ${color} rounded-2xl`}></div>
        <div className={`w-[4.5rem] h-[0.75rem] sm:h-[0.875rem] ${color} rounded-2xl`}></div>
        <div className={`w-[3rem] h-[0.75rem] sm:h-[0.875rem] ${color} rounded-2xl`}></div>
      </div>

      {/* Tweet content */}
      <div className="flex flex-col gap-4 w-full">
        <div className={`w-full max-w-[40rem] h-[0.75rem] sm:h-[0.875rem] ${color} rounded-2xl`}></div>
        <div className={`w-full h-[12.5rem] sm:h-[15rem] ${color} rounded-2xl`}></div>
      </div>

      {/* Tweet analytics */}
      <div className="flex gap-2">
        <div className={`w-[3rem] h-[1.5rem] ${color} rounded-2xl`}></div>
        <div className={`w-[3rem] h-[1.5rem] ${color} rounded-2xl`}></div>
        <div className={`w-[3rem] h-[1.5rem] ${color} rounded-2xl`}></div>
        <div className={`w-[3rem] h-[1.5rem] ${color} rounded-2xl`}></div>
      </div>

    </div>
  )
}

export default TweetListItemLoading;
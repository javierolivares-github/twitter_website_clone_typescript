import React from 'react';
import '../../../../index.css';

const HomeHeaderInput = () => {
  return (
    <input 
      type="text" 
      placeholder="What's happening?"
      className={`flex-grow border-none outline-none placeholder:text-[1rem] placeholder:leading-[1rem] placeholder:text-gray-40
      text-[1rem] leading-[1rem] text-gray-40 sm:placeholder:text-[1.125rem] sm:placeholder:leading-[1.125rem] 
      sm:text-[1.125rem] sm:leading-[1.125rem]`}
    />
  )
}

export default HomeHeaderInput;

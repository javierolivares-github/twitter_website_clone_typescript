import React from 'react';
import '/src/index.css';
import CardLoading from '../../../atoms/Wrappers/CardLoading'

const WhoToFollowListLoading = () => {
  let items = [1, 2, 3, 4, 5];

  return (
    <div
      data-testid="whotofollow-list-loading"
      className={`flex flex-col gap-4 max-w-[25rem]`}
    >
      {items.map((index) => (
        <CardLoading width='max-w-[25rem]' height='h-[5rem]' key={index} />
      ))}
    </div>
  )
}

export default WhoToFollowListLoading;



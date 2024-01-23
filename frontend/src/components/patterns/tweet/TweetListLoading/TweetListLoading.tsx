import React from 'react';
import '/src/index.css';
import TweetListItemLoading from '../TweetListItemLoading';

const TweetListLoading = () => {
  let items = [1, 2, 3, 4, 5, 6];

  return (
    <div className={`flex flex-col`}>
      {items.map( (item, index) => (
        <TweetListItemLoading key={index} color="bg-color-pulse-animation" />
      ))}
    </div>
  )
}

export default TweetListLoading;
import React from 'react';
import '/src/index.css';
import '/src/css/placeholderAnimation.css';

const NewsFeedListItemLoading = () => {
  return (
    <div
      data-testid="newsfeed-list-item-loading"
      className={`w-[23rem] h-[6.5rem] rounded-2xl bg-color-pulse-animation`}
    ></div>
  )
}

export default NewsFeedListItemLoading;



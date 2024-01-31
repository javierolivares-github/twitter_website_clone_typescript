import React from 'react';
import '/src/index.css';
import NewsFeedListItemLoading from '../NewsFeedListItemLoading';

const NewsFeedListLoading = () => {
  let items = [1, 2, 3, 4, 5, 6];

  return (
    <div
      data-testid="newsfeed-list-loading"
      className={`flex flex-col gap-4`}
    >
      {items.map((item, index) => (
        <NewsFeedListItemLoading key={index} />
      ))}
    </div>
  )
}

export default NewsFeedListLoading;



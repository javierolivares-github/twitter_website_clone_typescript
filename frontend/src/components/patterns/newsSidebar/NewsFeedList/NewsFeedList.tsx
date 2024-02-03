import React from 'react';
import '/src/index.css';
import {NewsFeedListProps} from '../../../../lib/types';
import { statusTypes } from '../../../../lib/statusTypes';
import NewsFeedListItem from '../NewsFeedListItem';
import NewsFeedListLoading from '../NewsFeedListLoading';
import ErrorMessage from '../../../atoms/ErrorMessage';


const NewsFeedList = ({ status, data }: NewsFeedListProps) => {
  if (status === statusTypes.loading) {
    return (
      <NewsFeedListLoading />
    )
  }

  if (status === statusTypes.errored) {
    return (
      <ErrorMessage message="Failed to load data" />
    )
  }

  return (
    <div
      data-testid="newsfeed-list"
      className={`flex flex-col gap-4`}
    >
      {data.map((news) => (
        <NewsFeedListItem 
          key={news.id}
          id={news.id}
          username={news.username}
          timestamp={news.timestamp}
          content={news.content}
          imageUrl={news.imageUrl}
          trending={news.trending}
          hashtag={news.hashtag}
        />
      ))}
    </div>
  )
}

export default NewsFeedList;



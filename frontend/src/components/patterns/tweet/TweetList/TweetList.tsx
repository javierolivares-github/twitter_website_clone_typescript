import React from 'react';
import '/src/index.css';
import '/src/css/placeholderAnimation.css';
import { TweetListProps } from '../../../../lib/types';
import { statusTypes } from '../../../../lib/statusTypes';
import TweetListLoading from '../TweetListLoading';
import ErrorMessage from '../../../atoms/ErrorMessage';
import TweetListItem from '../TweetListItem';


const TweetList = ({ status, data }: TweetListProps) => {
  if (status === statusTypes.loading) {
    return (
      <TweetListLoading />
    )
  }

  if (status === statusTypes.errored) {
    return (
      <ErrorMessage message="Failed to load data" />
    )
  }

  return (
    <div
      data-testid="tweet-list-container"
      className={`flex flex-col`}
    >
      {data.map((tweet) => (
        <TweetListItem
          key={tweet.id}
          status={tweet.status}
          profileImageUrl={tweet.profileImageUrl}
          username={tweet.username}
          account={tweet.account}
          verified={tweet.verified}
          timestamp={tweet.timestamp}
          content={tweet.content}
          contentImageUrl={tweet.contentImageUrl}
          commentAmount={tweet.commentAmount}
          retweetAmount={tweet.retweetAmount}
          likeAmount={tweet.likeAmount}
        />
      ))}
    </div>
  )
}

export default TweetList;
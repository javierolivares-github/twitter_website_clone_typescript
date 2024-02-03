import React from 'react';
import '/src/index.css';
import TweetInfo from '../TweetInfo';
import TweetUsername from '../TweetUsername';
import TweetContent from '../TweetContent';
import TweetAnalytics from '../TweetAnalytics';

type TweetListItemProps = {
  status: "liked" | "retweeted" | "followed" | "promoted" | "pinned" | "none";
  profileImageUrl: string;
  verified: boolean;
  username: string;
  account: string;
  timestamp: string;
  content: string;
  contentImageUrl: string | undefined;
  commentAmount: string;
  retweetAmount: string;
  likeAmount: string;
}

const TweetListItem = ({ status, profileImageUrl, verified, username, account, timestamp, content, contentImageUrl, commentAmount, retweetAmount, likeAmount }: TweetListItemProps) => {
  return (
    <div
      data-testid="tweet-list-item-container"
      className={`w-full max-w-[80rem] flex flex-col gap-2 p-4 border-l border-b border-r border-solid border-black-100`}
    >
      <TweetInfo imageUrl={profileImageUrl} status={status} />
      <TweetUsername verified={verified} username={username} account={account} timestamp={timestamp} />
      <TweetContent content={content} imageUrl={contentImageUrl} />
      <TweetAnalytics commentAmount={commentAmount} retweetAmount={retweetAmount} likeAmount={likeAmount} />
    </div>
  )
}

export default TweetListItem;
import React from 'react';
import '/src/index.css';
import Caption1 from '../../../atoms/Typography/Caption1';
import TweetContentImage from '../../../atoms/Images/TweetContentImage';

type TweetContentProps = {
  imageUrl?: string;
  content: string;
}

const TweetContent = ({ imageUrl, content }: TweetContentProps) => {
  return (
    <div
      data-testid="tweet-content-container"
      className={`max-w-[80rem] flex flex-col gap-4`}
    >
      <Caption1 weight="font-medium" color="text-gray-40">{content}</Caption1>
      <TweetContentImage imageUrl={imageUrl} />
    </div>
  )
}

export default TweetContent
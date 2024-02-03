import React from 'react';
import '../../../../index.css';
import { ImageProps } from '../../../../lib/types';

const TweetContentImage = ({ imageUrl }: ImageProps) => {
  return (
    <div className={`h-[12.5rem] sm:h-[15rem] max-w-[80rem] rounded-2xl overflow-hidden`}>
      <img
        data-testid="tweet-content-container"
        src={imageUrl} 
        alt="Tweet content image"
        className={`object-cover w-full h-full`}
      />
    </div>
  )
}

export default TweetContentImage;


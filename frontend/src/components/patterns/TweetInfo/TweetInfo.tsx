import React from 'react';
import '/src/index.css';
import tweetStatusTypes from '../../../lib/tweetStatusTypes';
import ProfileImage from '../../atoms/Images/ProfileImage';

export default function TweetInfo({ status }: TweetInfoProps) {
  return (
    <div>
      <ProfileImage imageUrl='/images/profile1.png' width='w-11' height='h-11' smWidth='sm:w-12' smHeight='sm:h-12' />
    </div>
  )
}

type TweetInfoProps = {
  status: "liked" | "retweeted" | "followed" | "promoted" | "pinned";
}

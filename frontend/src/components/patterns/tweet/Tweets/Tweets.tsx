import React, { useState, useEffect } from 'react';
import '/src/index.css';
import { statusTypes } from '../../../../lib/statusTypes';
import TweetList from '../TweetList';

const Tweets = () => {
  const [tweetState, setTweetState]= useState<TweetType>({
    status: statusTypes.loading,
    data: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const tweetFetch = await fetch('/api/tweets');
        const tweetResponse = await tweetFetch.json();
        setTweetState({
          status: statusTypes.loaded,
          data: tweetResponse.data,
        });
      } catch (error) {
        console.log(error);
        setTweetState({
          status: statusTypes.errored,
          data: [],
        });
      }
    }

    getData();
  }, []);

  return (
    <TweetList
      status={tweetState.status}
      data={tweetState.data}
    />
  )
}

export default Tweets;

interface TweetType {
  status: string;
  data: {
    id: number,
    status: "liked" | "retweeted" | "followed" | "promoted" | "pinned" | "none", 
    profileImageUrl: string,
    username: string,
    account: string,
    verified: boolean,
    timestamp: string,
    content: string,
    contentImageUrl: string,
    commentAmount: string,
    retweetAmount: string,
    likeAmount: string,
  }[] | [];
}
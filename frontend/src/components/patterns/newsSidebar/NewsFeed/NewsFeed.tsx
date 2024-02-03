import React, { useState, useEffect } from 'react';
import '/src/index.css';
import { statusTypes } from '../../../../lib/statusTypes';
import NewsFeedList from '../NewsFeedList';
import Heading1 from '../../../atoms/Typography/Heading1';

const NewsFeed = () => {
  const [newsState, setNewsState] = useState<NewsType>({
    status: statusTypes.loading,
    data: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const newsFetch = await fetch('/api/news');
        const newsResponse = await newsFetch.json();
        console.log(newsResponse);
        setNewsState({
          status: statusTypes.loaded,
          data: newsResponse.data,
        });
        
      } catch (error) {
        console.log(error);
        setNewsState({
          status: statusTypes.errored,
          data: [],
        })
      }
    }

    getData();
  }, []);

  return (
    <div
      data-testid="newsfeed-container"
      className={`flex flex-col gap-4 p-4 max-w-[25rem]`}
    >
      <Heading1 weight='font-bold' color='text-secondary-15'>News Feed</Heading1>
      <NewsFeedList
        status={newsState.status}
        data={newsState.data}
      />
    </div>
  );
}

export default NewsFeed;

interface NewsType {
  status: string;
  data: {
    id: number;
    imageUrl: string;
    username: string;
    content: string;
    timestamp: string;
    hashtag: string[];
    trending: boolean;
  }[] | [];
}



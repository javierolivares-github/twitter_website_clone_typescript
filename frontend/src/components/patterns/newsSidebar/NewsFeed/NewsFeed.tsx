import React, { useState, useEffect } from 'react';
import '/src/index.css';
import { statusTypes } from '../../../../lib/statusTypes';
import NewsFeedList from '../NewsFeedList';

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
    <NewsFeedList
      status={newsState.status}
      data={newsState.data}
    />
  )
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



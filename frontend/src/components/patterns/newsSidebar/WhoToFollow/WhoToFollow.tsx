import React, { useState, useEffect } from 'react';
import '/src/index.css';
import { statusTypes } from '../../../../lib/statusTypes';
import WhoToFollowList from '../WhoToFollowList';
import Heading1 from '../../../atoms/Typography/Heading1';

interface WhoToFollowType {
  status: string;
  data: {
    id: number;
    imageUrl: string;
    username: string;
    account: string;
    isVerified: boolean;
  }[] | [];
}

const WhoToFollow = () => {
  const [whoToFollowState, setWhoToFollowState] = useState<WhoToFollowType>({
    status: statusTypes.loading,
    data: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const whoToFollowFetch = await fetch('/api/who-to-follow');
        const whoToFollowResponse = await whoToFollowFetch.json();
        setWhoToFollowState({
          status: statusTypes.loaded,
          data: whoToFollowResponse.data,
        });
        
      } catch (error) {
        console.log(error);
        setWhoToFollowState({
          status: statusTypes.errored,
          data: [],
        })
      }
    }

    getData();
  }, []);

  return (
    <div
      data-testid="whotofollow-container"
      className={`flex flex-col gap-4 p-4 max-w-[25rem]`}
    >
      <Heading1 weight='font-bold' color='text-secondary-15'>Who to follow</Heading1>
      <WhoToFollowList
        status={whoToFollowState.status}
        data={whoToFollowState.data}
      />
    </div>
  )
}

export default WhoToFollow;





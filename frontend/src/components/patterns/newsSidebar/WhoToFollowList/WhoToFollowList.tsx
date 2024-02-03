import React from 'react';
import '/src/index.css';
import { WhoToFollowListProps } from '../../../../lib/types';
import { statusTypes } from '../../../../lib/statusTypes';
import WhoToFollowListItem from '../WhoToFollowListItem';
import WhoToFollowListLoading from '../WhoToFollowListLoading';
import ErrorMessage from '../../../atoms/ErrorMessage';

const WhoToFollowList = ({ status, data }: WhoToFollowListProps) => {
  if (status === statusTypes.loading) {
    return (
      <WhoToFollowListLoading />
    )
  }

  if (status === statusTypes.errored) {
    return (
      <ErrorMessage message="Failed to load data" />
    )
  }

  return (
    <div
      data-testid="whotofollow-list"
      className={`flex flex-col gap-4 transition duration-75 ease-in-out max-w-[25rem]`}
    >
      {data.map((item) => (
        <WhoToFollowListItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          username={item.username}
          account={item.account}
          isVerified={item.isVerified}
        />
      ))}
    </div>
  )
}

export default WhoToFollowList;



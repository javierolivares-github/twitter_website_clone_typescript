import React from 'react';
import '/src/index.css';
import SquareRoundedImage from '../../../atoms/images/SquareRoundedImage';
import Body from '../../../atoms/Typography/Body';
import Caption1 from '../../../atoms/Typography/Caption1';
import Caption2 from '../../../atoms/Typography/Caption2';
import { NewsFeedListItemProps } from '../../../../lib/types';

const NewsFeedListItem = ({ username, timestamp, content, imageUrl, trending, hashtag}: NewsFeedListItemProps) => {
  return (
    <div
      data-testid="newsfeed-list-item"
      className={`max-w-[23rem] w-full rounded-2xl flex items-center justify-between gap-2 p-4 bg-secondary-98 hover:bg-secondary-95`}
    >
      {/* Col */}
      <div className={`w-full flex flex-col gap-2`}>
        {/* Row-1 */}
        <div className={`w-full flex items-center gap-2`}>
          <Body weight='font-bold' color='text-secondary-15'>{username}</Body>
          <Caption2 weight='font-normal' color='text-secondary-50'>{timestamp}</Caption2>
        </div>
        {/* Row-2 */}
        <div className={`w-full flex`}>
          <Caption1 weight='font-medium' color='text-secondary-40'>{content}</Caption1>
        </div>
        {/* Row-3 */}
        <div className={`w-full flex items-center gap-2`}>
          {trending && <Caption2 weight='font-semibold' color='text-secondary-50'>Trending</Caption2>}
          <Caption2 weight='font-normal' color='text-primary-50'>{hashtag.join(' ')}</Caption2>
        </div>
      </div>
      {/* Image */}
      <div className='w-[4.5rem] h-[4.5rem]'>
        <SquareRoundedImage imageUrl={imageUrl} width='w-[4.5rem]' height='h-[4.5rem]' />
      </div>
    </div>
  )
}

export default NewsFeedListItem;



import React from 'react';
import '/src/index.css';
import Card from '../../../atoms/Wrappers/Card';
import Container from '../../../atoms/Wrappers/Container';
import SquareRoundedImage from '../../../atoms/images/SquareRoundedImage';
import Body from '../../../atoms/Typography/Body';
import Caption1 from '../../../atoms/Typography/Caption1';
import Caption2 from '../../../atoms/Typography/Caption2';
import { NewsFeedListItemProps } from '../../../../lib/types';

const NewsFeedListItem = ({ username, timestamp, content, imageUrl, trending, hashtag}: NewsFeedListItemProps) => {
  return (
    <Card>
      <Container>
        {/* Content */}
        <div className={`w-full flex flex-col gap-2`}>

          <div className={`w-full flex items-center gap-2`}>
            {/* Username */}
            <Body weight='font-bold' color='text-secondary-15'>{username}</Body>
            {/* Timestamp */}
            <Caption2 weight='font-normal' color='text-secondary-50'>{timestamp}</Caption2>
          </div>

          <div className={`w-full flex`}>
            {/* Content */}
            <Caption1 weight='font-medium' color='text-secondary-40'>{content}</Caption1>
          </div>

          <div className={`w-full flex items-center gap-2`}>
            {/* Trending */}
            {trending && <Caption2 weight='font-semibold' color='text-secondary-50'>Trending</Caption2>}
            {/* Hashtag */}
            <Caption2 weight='font-normal' color='text-primary-50'>{Array.isArray(hashtag) ? hashtag.join(' ') : ''}</Caption2>
          </div>

        </div>

        {/* Image */}
        <div className='w-[4.5rem] h-[4.5rem]'>
          <SquareRoundedImage imageUrl={imageUrl} width='w-[4.5rem]' height='h-[4.5rem]' />
        </div>
      </Container>
    </Card>
  )
}

export default NewsFeedListItem;



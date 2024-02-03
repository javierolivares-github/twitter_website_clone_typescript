import React from 'react';
import '/src/index.css';
import Card from '../../../atoms/Wrappers/Card';
import Container from '../../../atoms/Wrappers/Container';
import TweetButton from '../../../atoms/Buttons/TweetButton';
import ProfileImage from '../../../atoms/Images/ProfileImage';
import Caption2 from '../../../atoms/Typography/Caption2';
import Body from '../../../atoms/Typography/Body';
import OfficialIcon from '../../../atoms/Icons/OfficialIcon';
import { WhoToFollowListItemProps } from '../../../../lib/types';
import { handleClick } from '../../../../lib/helpers';


const WhoToFollowListItem = ({ imageUrl, username, account, isVerified }: WhoToFollowListItemProps) => {
  return (
    <Card>
      <Container>
        {/* Col */}
        <div className='flex gap-2'>
          {/* Image */}
          <div>
            <ProfileImage imageUrl={imageUrl} width='w-12' height='w-12' />
          </div>
          {/* Content */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <Body weight='font-bold' color='text-secondary-15'>{username}</Body>
              {isVerified && <OfficialIcon fillColor='text-primary-50' width='w-6' height='h-6' />}
            </div>
            <Caption2 weight='font-normal' color='text-secondary-50'>{account}</Caption2>
          </div>
        </div>

        {/* Button */}
        <TweetButton size='small' onClick={handleClick}>Follow</TweetButton>
      </Container>
    </Card>
  )
}

export default WhoToFollowListItem;



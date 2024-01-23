import React from 'react';
import '../../../index.css';
import Heading1 from '../../atoms/Typography/Heading1';
import IconButtonStar from '../../atoms/IconButtons/IconButtonStar';
import ProfileImage from '../../atoms/Images/ProfileImage';
import HomeHeaderInput from '../../atoms/Inputs/HomeHeaderInput';
import IconButtonImage from '../../atoms/IconButtons/IconButtonImage';
import IconButtonGif from '../../atoms/IconButtons/IconButtonGif';
import IconButtonAnalytics from '../../atoms/IconButtons/IconButtonAnalytics';
import IconButtonEmoji from '../../atoms/IconButtons/IconButtonEmoji';
import IconButtonEvents from '../../atoms/IconButtons/IconButtonEvents';
import IconButtonLocation from '../../atoms/IconButtons/IconButtonLocation';
import TweetButton from '../../atoms/Buttons/TweetButton';

const HomeHeader = () => {
  return (
    <div
      data-testid="home-header-container"
      className={`w-full sm:max-w-[40rem] flex flex-col gap-4 p-4 bg-gray-100 border-l border-b border-r border-solid 
      border-black-100`}
    >
      {/* Row1 */}
      <div className={`flex justify-between items-center`}>
        <Heading1 weight="font-bold" color="text-secondary-15">Home</Heading1>
        <IconButtonStar />  
      </div>
      {/* Row2 */}
      <div className={`flex items-center gap-4`}>
        <ProfileImage imageUrl="/images/profile1.png" width="w-11" height="h-11" smWidth="sm:w-12" smHeight="sm:h-12" />
        <HomeHeaderInput />
      </div>
      {/* Row3 */}
      <div className={`flex justify-between items-center`}>
        <div className={`flex gap-2`}>
          <IconButtonImage />
          <IconButtonGif />
          <IconButtonAnalytics />
          <IconButtonEmoji />
          <IconButtonEvents />
          <IconButtonLocation />
        </div>
        <TweetButton size='small'>Tweet</TweetButton>
      </div>
    </div>
  )
}

export default HomeHeader;

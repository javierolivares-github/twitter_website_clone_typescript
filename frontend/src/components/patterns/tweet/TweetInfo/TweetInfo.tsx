import React from 'react';
import '/src/index.css';
import { tweetStatusTypes } from '../../../../lib/statusTypes';
import ProfileImage from '../../../atoms/Images/ProfileImage';
import Caption2 from '../../../atoms/Typography/Caption2';
import LikeIcon from '../../../atoms/Icons/LikeIcon';
import RetweetIcon from '../../../atoms/Icons/RetweetIcon';
import ProfileIcon from '../../../atoms/Icons/ProfileIcon';
import AdsIcon from '../../../atoms/Icons/AdsIcon';
import PinIcon from '../../../atoms/Icons/PinIcon';

type TweetInfoProps = {
  status: "liked" | "retweeted" | "followed" | "promoted" | "pinned" | "none";
}

export default function TweetInfo({ status }: TweetInfoProps) {
  if (status === tweetStatusTypes.liked) {
    return (
      <div className={`flex items-center gap-4`}>
        <ProfileImage imageUrl='/images/profile1.png' width='w-11' height='h-11' smWidth='sm:w-12' smHeight='sm:h-12' />
        <div className={`flex items-center gap-2`}>
          <LikeIcon fillColor='text-gray-40' isFilled={true} width='w-[1.375rem]' height='h-[1.375rem]' smWidth='sm:w-[1.5rem]' smHeight='sm:h-[1.5rem]' />
          <Caption2 weight='font-bold' color='text-gray-40'>Liked</Caption2>
        </div>
      </div>
    )
  }

  if (status === tweetStatusTypes.retweeted) {
    return (
      <div className={`flex items-center gap-4`}>
        <ProfileImage imageUrl='/images/profile1.png' width='w-11' height='h-11' smWidth='sm:w-12' smHeight='sm:h-12' />
        <div className={`flex items-center gap-2`}>
          <RetweetIcon fillColor='text-gray-40' isFilled={true} width='w-[1.375rem]' height='h-[1.375rem]' smWidth='sm:w-[1.5rem]' smHeight='sm:h-[1.5rem]' />
          <Caption2 weight='font-bold' color='text-gray-40'>Retweeted</Caption2>
        </div>
      </div>
    )
  }

  if (status === tweetStatusTypes.followed) {
    return (
      <div className={`flex items-center gap-4`}>
        <ProfileImage imageUrl='/images/profile1.png' width='w-11' height='h-11' smWidth='sm:w-12' smHeight='sm:h-12' />
        <div className={`flex items-center gap-2`}>
          <ProfileIcon fillColor='text-gray-40' isFilled={true} width='w-[1.375rem]' height='h-[1.375rem]' smWidth='sm:w-[1.5rem]' smHeight='sm:h-[1.5rem]' />
          <Caption2 weight='font-bold' color='text-gray-40'>Has followed</Caption2>
        </div>
      </div>
    )
  }

  if (status === tweetStatusTypes.promoted) {
    return (
      <div className={`flex items-center gap-4`}>
        <ProfileImage imageUrl='/images/profile1.png' width='w-11' height='h-11' smWidth='sm:w-12' smHeight='sm:h-12' />
        <div className={`flex items-center gap-2`}>
          <AdsIcon fillColor='text-gray-40' isFilled={true} width='w-[1.375rem]' height='h-[1.375rem]' smWidth='sm:w-[1.5rem]' smHeight='sm:h-[1.5rem]' />
          <Caption2 weight='font-bold' color='text-gray-40'>Promoted</Caption2>
        </div>
      </div>
    )
  }

  if (status === tweetStatusTypes.pinned) {
    return (
      <div className={`flex items-center gap-4`}>
        <ProfileImage imageUrl='/images/profile1.png' width='w-11' height='h-11' smWidth='sm:w-12' smHeight='sm:h-12' />
        <div className={`flex items-center gap-2`}>
          <PinIcon fillColor='text-gray-40' isFilled={true} width='w-[1.375rem]' height='h-[1.375rem]' smWidth='sm:w-[1.5rem]' smHeight='sm:h-[1.5rem]' />
          <Caption2 weight='font-bold' color='text-gray-40'>Pinned</Caption2>
        </div>
      </div>
    )
  }

  return (
    <div>
      <ProfileImage imageUrl='/images/profile1.png' width='w-11' height='h-11' smWidth='sm:w-12' smHeight='sm:h-12' />
    </div>
  )
}



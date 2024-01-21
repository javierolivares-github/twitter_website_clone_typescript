import React from 'react';
import '/src/index.css';
import Heading1 from '../../../atoms/Typography/Heading1';
import Caption2 from '../../../atoms/Typography/Caption2';
import OfficialIcon from '../../../atoms/Icons/OfficialIcon';
import IconButtonMenu from '../../../atoms/IconButtons/IconButtonMenu';

type TweetUsernameProps = {
  verified: boolean;
  username: string;
  account: string;
  timestamp: string;
}

export default function TweetUsername({ verified, username, account, timestamp }: TweetUsernameProps) {
  return (
    <div className={`sm:max-w-[38rem] flex justify-between items-center`}>
      <div className={`flex items-center gap-2`}>
        <Heading1 weight="font-bold" color="text-secondary-15">{username}</Heading1>
        {verified && <OfficialIcon fillColor="text-primary-50" width="w-[1.375rem]" height="h-[1.375rem]" smWidth="sm:w-[1.5rem]" smHeight="sm:h-[1.5rem]" />}
        <Caption2 weight="font-normal" color="text-secondary-50">{account}</Caption2>
        <Caption2 weight="font-normal" color="text-secondary-50">{timestamp}</Caption2>
      </div>
      <IconButtonMenu />
    </div>
  )
}

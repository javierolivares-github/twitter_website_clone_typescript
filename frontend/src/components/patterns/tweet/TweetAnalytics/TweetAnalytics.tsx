import React from 'react';
import '/src/index.css';
import CommentIcon from '../../../atoms/Icons/CommentIcon';
import RetweetIcon from '../../../atoms/Icons/RetweetIcon';
import LikeIcon from '../../../atoms/Icons/LikeIcon';
import SharedIcon from '../../../atoms/Icons/SharedIcon';
import Caption2 from '../../../atoms/Typography/Caption2';

type TweetAnalyticsProps = {
  commentAmount: string;
  retweetAmount: string;
  likeAmount: string;
}

const TweetAnalytics = ({ commentAmount, retweetAmount, likeAmount }: TweetAnalyticsProps) => {
  return (
    <div 
      data-testid="tweet-analytics-container"
      className={`max-w-[80rem] flex gap-4`}
    >
      {/* col-1 */}
      <div className={`flex items-center gap-1`}>
        <div className={`flex justify-center items-center p-2`}>
          <CommentIcon fillColor="text-gray-40" width="w-[1rem]" height="h-[1rem]" smWidth="sm:w-[1.125rem]" 
          smHeight="sm:h-[1.125rem]" />
        </div>
        <Caption2 weight="font-normal" color="text-gray-40">{commentAmount}</Caption2>
      </div>

      {/* col-2 */}
      <div className={`flex items-center gap-1`}>
        <div className={`flex justify-center items-center p-2`}>
          <RetweetIcon fillColor="text-gray-40" width="w-[1rem]" height="h-[1rem]" smWidth="sm:w-[1.125rem]" 
          smHeight="sm:h-[1.125rem]" />
        </div>
        <Caption2 weight="font-normal" color="text-gray-40">{retweetAmount}</Caption2>
      </div>

      {/* col-3 */}
      <div className={`flex items-center gap-1`}>
        <div className={`flex justify-center items-center p-2`}>
          <LikeIcon fillColor="text-gray-40" width="w-[1rem]" height="h-[1rem]" smWidth="sm:w-[1.125rem]" 
          smHeight="sm:h-[1.125rem]" />
        </div>
        <Caption2 weight="font-normal" color="text-gray-40">{likeAmount}</Caption2>
      </div>

      {/* col-4 */}
      <div className={`flex items-center gap-1`}>
        <div className={`flex justify-center items-center p-2`}>
          <SharedIcon fillColor="text-gray-40" width="w-[1rem]" height="h-[1rem]" smWidth="sm:w-[1.125rem]" 
          smHeight="sm:h-[1.125rem]" />
        </div>
      </div>
    </div>
  )
}

export default TweetAnalytics;
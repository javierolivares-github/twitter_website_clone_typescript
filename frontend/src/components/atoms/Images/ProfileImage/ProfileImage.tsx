import React from 'react';
import '../../../../index.css';
import { ImageProps } from '../../../../lib/types';

const ProfileImage = ({ imageUrl, width, height, smWidth, smHeight }: ImageProps) => {
  return (
    <div className={`${width} ${height} ${smWidth} ${smHeight} rounded-full overflow-hidden`}>
      <img
        data-testid="profile-img-container"
        src={imageUrl} 
        alt="Profile image"
        className={`object-cover w-full h-full`}
      />
    </div>
  )
}

export default ProfileImage;


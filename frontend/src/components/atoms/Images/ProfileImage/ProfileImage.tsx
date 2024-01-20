import React from 'react';
import '../../../../index.css';

type ProfileImageProps = {
  imageUrl: string;
  width: string;
  height: string;
  smWidth?: string;
  smHeight?: string;
}

export default function ProfileImage({ imageUrl, width, height, smWidth, smHeight }: ProfileImageProps) {
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


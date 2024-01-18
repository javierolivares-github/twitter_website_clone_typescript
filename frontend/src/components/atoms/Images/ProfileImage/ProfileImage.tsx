import React from 'react';
import '../../../../index.css';

type ProfileImageProps = {
  imageUrl: string;
  width: "w-10" | "w-11" | "w-12";
  height: "h-10" | "h-11" | "h-12";
}

export default function ProfileImage({ imageUrl, width, height }: ProfileImageProps) {
  return (
    <div className={`${width} ${height} rounded-full overflow-hidden`}>
      <img
        data-testid="profile-img-container"
        src={imageUrl} 
        alt="Profile image"
        className={`object-cover w-full h-full`}
      />
    </div>
  )
}


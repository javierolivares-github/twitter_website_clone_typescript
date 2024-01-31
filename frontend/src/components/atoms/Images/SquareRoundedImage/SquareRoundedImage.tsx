import React from 'react';
import '/src/index.css';
import { ImageProps } from '../../../../lib/types';

const SquareRoundedImage = ({ imageUrl, width, height, smWidth, smHeight }: ImageProps) => {
  return (
    <div className={`${width} ${height} ${smWidth} ${smHeight} rounded-2xl overflow-hidden`}>
      <img
        data-testid="square-rounded-image"
        src={imageUrl} 
        alt="Square Rounded Image"
        className={`object-cover w-full h-full`}
      />
    </div>
  )
}

export default SquareRoundedImage;
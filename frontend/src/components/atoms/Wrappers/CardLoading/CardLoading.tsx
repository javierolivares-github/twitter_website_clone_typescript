import React from 'react';
import '/src/index.css';
import '/src/css/placeholderAnimation.css';

type CardLoadingProps = {
  width: string;
  height: string;
}

const CardLoading = ({ width, height }: CardLoadingProps) => {
  return (
    <div
      data-testid="card-loading"
      className={`${width} ${height} rounded-2xl bg-color-pulse-animation`}
    ></div>
  )
}

export default CardLoading;



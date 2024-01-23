import React from 'react';
import '/src/index.css';
import HomeHeader from '../../patterns/HomeHeader';
import Tweets from '../../patterns/tweet/Tweets';

const Home = () => {
  return (
    <div
      data-testid="home-container"
      className={`flex flex-col`}
    >
      <HomeHeader />
      <Tweets />
    </div>
  )
}

export default Home;
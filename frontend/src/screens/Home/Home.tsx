import React from 'react';
import '/src/index.css';
import HomeHeader from '../../components/patterns/HomeHeader';
import Tweets from '../../components/patterns/tweet/Tweets';

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
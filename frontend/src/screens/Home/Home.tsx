import React from 'react';
import '/src/index.css';
import PageWrapper from '../../components/atoms/Wrappers/PageWrapper';
import PageContainer from '../../components/atoms/Wrappers/PageContainer';
import HomeHeader from '../../components/patterns/HomeHeader';
import Tweets from '../../components/patterns/tweet/Tweets';
import Navbar from '../../components/patterns/navbar/Navbar';
import NewsSidebar from '../../components/patterns/newsSidebar/NewsSidebar';

const Home = () => {
  return (
    <div className={`flex flex-col`}>
      <HomeHeader />
      <Tweets />
    </div>
  )
}

export default Home;
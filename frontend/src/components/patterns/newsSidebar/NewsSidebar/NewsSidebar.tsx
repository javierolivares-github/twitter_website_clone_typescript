import React from 'react';
import '/src/index.css';
import NewsFeed from '../NewsFeed';
import WhoToFollow from '../WhoToFollow';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

const NewsSidebar = () => {
  return (
    <div data-testid="news-sidebar-container" className={`flex flex-col w-[25rem]`}>
      <NewsFeed />
      <WhoToFollow />
    </div>
  )
}

export default NewsSidebar;



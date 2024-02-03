import NewsFeed from './NewsFeed';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

/** The **NewsFeed** component renders the list of newsfeed based on a database and an API call. This component only will be render in a 1280px wide screens.*/
export default {
  title: 'Patterns/NewsSidebar/NewsFeed',
  component: NewsFeed,
  tags: ['autodocs'],
}

/**This is the default version of **NewsFeed** component:*/
export const Default = {
  args: {},
}
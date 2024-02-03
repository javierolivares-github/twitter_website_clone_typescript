import WhoToFollow from './WhoToFollow';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

/** The **WhoToFollow** component renders the list of WhoToFollow Items based on a database and an API call.*/
export default {
  title: 'Patterns/NewsSidebar/WhoToFollow',
  component: WhoToFollow,
  tags: ['autodocs'],
}

/**This is the default version of **WhoToFollow** component:*/
export const Default = {
  args: {},
}
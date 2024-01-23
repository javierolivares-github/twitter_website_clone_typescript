import Tweets from "./Tweets";
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

/**The **Tweets** component displays a list of tweet based on information get of a database in an APIs call. */
export default {
  title: 'Patterns/Tweet/Tweets',
  component: Tweets,
  tags: ['autodocs'],
}

/**This is the default version of **Tweets** component: */
export const Default = {
  args: {},
}
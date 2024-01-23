import Home from './Home';
import { mockServer } from '../../../mock_server/mockServer';
mockServer();

/**The **Home** component renders the main page of our app. */
export default {
  title: 'Screens/Home',
  component: Home,
  tags: ['autodocs'],
}

/**This is the default version of **Home** component: */
export const Default = {
  args: {},
}
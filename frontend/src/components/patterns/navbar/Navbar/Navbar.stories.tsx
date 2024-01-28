import Navbar from './Navbar';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

/** The **Navbar** component renders the main navegation's bar of the app. */
export default {
  title: 'Patterns/Navbar/Navbar',
  component: Navbar,
  tags: ['autodocs'],
}

/**This is the default version of **Navbar** component:*/
export const Default = {
  args: {},
}
import NavbarProfileContainer from './NavbarProfileContainer';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

/** The **NavbarProfileContainer** component makes an api call to obtain the data that feed the component. */
export default {
  title: 'Patterns/Navbar/NavbarProfileContainer',
  component: NavbarProfileContainer,
  tags: ['autodocs'],
}

/**This is the default version of **NavbarProfileContainer** component:*/
export const Default = {
  args: {},
}
import NavbarProfile from './NavbarProfile';
import { userProfileInfo } from '../../../../data/userProfileInfo';

/** The **NavbarProfile** component shows the information of the users profile in the navegation bar. */
export default {
  title: 'Patterns/Navbar/NavbarProfile',
  component: NavbarProfile,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Defines the status of the component in a string format.',
      control: 'text',
    },
    data: {
      description: 'Contains the data of the user\'s profile.',
      control: 'object',
    },
  },
}

/**This is the loaded version of **NavbarProfile** component:*/
export const Loaded = {
  args: {
    status: "loaded",
    data: userProfileInfo,
  },
}

/**This is the loading version of **NavbarProfile** component:*/
export const Loading = {
  args: {
    status: "loading",
    data: [],
  },
}

/**This is the errored version of **NavbarProfile** component:*/
export const Errored = {
  args: {
    status: "errored",
    data: [],
  },
}
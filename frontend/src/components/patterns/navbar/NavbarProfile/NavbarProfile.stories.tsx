import NavbarProfile from './NavbarProfile';

/** The **NavbarProfile** component renders a profile image and information about the user like username and account. */
export default {
  title: 'Patterns/navbar/NavbarProfile',
  component: NavbarProfile,
  tags: ['autodocs'],
  argTypes: {
    profileImageUrl: {
      description: 'Specifies the URL of the profile image in a string format.',
      control: 'text'
    },
    username: {
      description: 'Specifies the username in a string format.',
      control: 'text'
    },
    account: {
      description: 'Specifies the account name in a string format.',
      control: 'text'
    },
  },
}

/**This is the default version of **NavbarProfile** component:*/
export const Default = {
  args: {
    profileImageUrl: "/images/profile1.png",
    username: "Username",
    account: "@account",
  },
}
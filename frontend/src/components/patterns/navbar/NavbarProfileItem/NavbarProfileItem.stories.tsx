import NavbarProfileItem from './NavbarProfileItem';

/** The **NavbarProfileItem** component renders a profile image and information about the user like username and account. */
export default {
  title: 'Patterns/navbar/NavbarProfileItem',
  component: NavbarProfileItem,
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

/**This is the default version of **NavbarProfileItem** component:*/
export const Default = {
  args: {
    profileImageUrl: "/images/profile1.png",
    username: "Username",
    account: "@account",
  },
}
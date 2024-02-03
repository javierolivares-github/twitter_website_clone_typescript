import WhoToFollowListItem from './WhoToFollowListItem';

/** The **WhoToFollowListItem** component renders a card for the who to follow list. */
export default {
  title: 'Patterns/NewsSidebar/WhoToFollowListItem',
  component: WhoToFollowListItem,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Defines the path to the image.',
      control: 'text'
    },
    username: {
      description: 'Defines the username.',
      control: 'text'
    },
    account: {
      description: 'Defines the account name.',
      control: 'text'
    },
    isVerified: {
      description: 'Defines whether the user is verified or not.',
      control: 'boolean'
    },
  },
}

/**This is the verified version of **WhoToFollowListItem** component:*/
export const Verified = {
  args: {
    imageUrl: '/images/profile1.png',
    username: 'First name',
    account: '@username',
    isVerified: true,
  },
}

/**This is the not verified version of **WhoToFollowListItem** component:*/
export const NotVerified = {
  args: {
    imageUrl: '/images/profile1.png',
    username: 'First name',
    account: '@username',
    isVerified: false,
  },
}
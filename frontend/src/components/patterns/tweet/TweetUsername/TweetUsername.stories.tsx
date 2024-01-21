import TweetUsername from "./TweetUsername";

/**The **TweetUsername** component displays information about the user who wrote the tweet. Things like the username, account, timestamp, and if it is a verified user.*/
export default {
  title: 'Patterns/Tweet/TweetUsername',
  component: TweetUsername,
  tags: ['autodocs'],
  argTypes: {
    username: {
      description: 'Specifies the name of the user in a string format.',
      control: 'text',
    },
    verified: {
      description: 'Specifies whether the user is a verified user or not in a boolean format.',
      control: 'boolean',
    },
    account: {
      description: 'Specifies the name of the user account in a string format.',
      control: 'text',
    },
    timestamp: {
      description: 'Specifies the timestamp of the tweet in a string format.',
      control: 'text',
    }
  }
}

/**This is the verified version of **TweetUsername** component: */
export const Verified = {
  args: {
    username: "First Name",
    verified: true,
    account: "@username",
    timestamp: "5h ago",
  }
}

/**This is the not verified version of **TweetUsername** component: */
export const NotVerified = {
  args: {
    username: "First Name",
    verified: false,
    account: "@username",
    timestamp: "5h ago",
  }
}


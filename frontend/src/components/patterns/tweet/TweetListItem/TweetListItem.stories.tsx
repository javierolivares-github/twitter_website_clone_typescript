import TweetListItem from "./TweetListItem"

/**The **TweetListItem** component renders a tweet card that contain all the information for a single tweet. */
export default {
  title: 'Patterns/Tweet/TweetListItem',
  component: TweetListItem,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Determines the status of the component in a string format.',
      control: 'text',
    },
    profileImageUrl: {
      description: 'Specifies the URL of the profile image in a string format.',
      control: 'text',
    },
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
    },
    content: {
      description: 'Specifies the content of the Tweet in a string format.',
      control: 'text',
    },
    contentImageUrl: {
      description: 'Specifies the URL of the image in a string format.',
      control: 'text',
    },
    commentAmount: {
      description: 'Specifies the current amount of comments that the tweet has.',
      control: 'text',
    },
    retweetAmount: {
      description: 'Specifies the current amount of retweets that the tweet has.',
      control: 'text',
    },
    likeAmount: {
      description: 'Specifies the current amount of likes that the tweet has.',
      control: 'text',
    },
  }
}

/**This is the default version of **TweetListItem** component: */
export const Default = {
  args: {
    status: "liked",
    profileImageUrl: "/images/profile1.png",
    username: "First Name",
    verified: true,
    account: "@username",
    timestamp: "5h ago",
    content: "Placeholder content goes here!",
    contentImageUrl: "/images/coffee.jpg",
    commentAmount: 200,
    retweetAmount: 200,
    likeAmount: 200,
  }
}


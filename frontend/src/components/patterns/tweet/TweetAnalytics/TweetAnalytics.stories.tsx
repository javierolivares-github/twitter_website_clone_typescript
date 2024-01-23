import TweetAnalytics from "./TweetAnalytics";

/**The **TweetAnalytics** component displays the analytics of the tweet. */
export default {
  title: 'Patterns/Tweet/TweetAnalytics',
  component: TweetAnalytics,
  tags: ['autodocs'],
  argTypes: {
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

/**This is the default version of the **TweetAnalytics** component: */
export const Default = {
  args: {
    commentAmount: "200",
    retweetAmount: "200",
    likeAmount: "200",
  }
}
import TweetInfo from "./TweetInfo"

/**The **TweetInfo** component displays the status of the tweet, which could be: liked, retweeted, followed, promoted, pinned, or none. */
export default {
  title: 'Patterns/Tweet/TweetInfo',
  component: TweetInfo,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Determines the status of the component in a string format.',
      control: 'text',
    },
  }
}

/**This is the liked version of **TweetInfo** component: */
export const Liked = {
  args: {
    status: "liked",
  }
}

/**This is the retweeted version of **TweetInfo** component: */
export const Retweeted = {
  args: {
    status: "retweeted",
  }
}

/**This is the followed version of **TweetInfo** component: */
export const Followed = {
  args: {
    status: "followed",
  }
}

/**This is the promoted version of **TweetInfo** component: */
export const Promoted = {
  args: {
    status: "promoted",
  }
}

/**This is the pinned version of **TweetInfo** component: */
export const Pinned = {
  args: {
    status: "pinned",
  }
}

/**This is the none version of **TweetInfo** component: */
export const None = {
  args: {
    status: "none",
  }
}

import TweetList from "./TweetList";
import { tweetCollection } from '../../../../data/tweetCollection';

/**The **TweetList** component displays a list of tweets based on a data base. */
export default {
  title: 'Patterns/Tweet/TweetList',
  component: TweetList,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Defines the status of the component in a string format.',
      control: 'text',
    },
    data: {
      description: 'Defines the database which is used to populate the UI.',
      control: 'object'
    }
  }
}

/**This is the loaded version of **TweetList** component: */
export const Loaded = {
  args: {
    status: "loaded",
    data: tweetCollection,
  }
}

/**This is the loading version of **TweetList** component: */
export const Loading = {
  args: {
    status: "loading",
    data: [],
  }
}

/**This is the errored version of **TweetList** component: */
export const Errored = {
  args: {
    status: "errored",
    data: [],
  }
}
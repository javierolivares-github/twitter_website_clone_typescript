import NewsFeedList from './NewsFeedList';
import { newsCollection } from '../../../../data/newsCollection';

/** The **NewsFeedList** component renders a List of News. */
export default {
  title: 'Patterns/NewsFeed/NewsFeedList',
  component: NewsFeedList,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Defines the status of the component in a string format.',
      control: 'text',
    },
    data: {
      description: 'Defines the database which is used to populate the UI.',
      control: 'object',
    },
  },
}

/**This is the loaded version of **NewsFeedList** component: */
export const Loaded = {
  args: {
    status: "loaded",
    data: newsCollection,
  }
}

/**This is the loading version of **NewsFeedList** component: */
export const Loading = {
  args: {
    status: "loading",
    data: [],
  }
}

/**This is the errored version of **NewsFeedList** component: */
export const Errored = {
  args: {
    status: "errored",
    data: [],
  }
}
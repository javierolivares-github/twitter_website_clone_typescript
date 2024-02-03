import WhoToFollowList from './WhoToFollowList';
import { userCollection } from '../../../../data/userCollection';

/** The **WhoToFollowList** component renders... */
export default {
  title: 'Patterns/NewsSidebar/WhoToFollowList',
  component: WhoToFollowList,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Defines the status of the component.',
      control: 'text',
    },
    data: {
      description: 'Contains the user data.',
      control: 'object',
    },
  },
}

/**This is the loaded version of **WhoToFollowList** component:*/
export const Loaded = {
  args: {
    status: "loaded",
    data: userCollection,
  },
}

/**This is the loading version of **WhoToFollowList** component:*/
export const Loading = {
  args: {
    status: "loading",
    data: [],
  },
}

/**This is the errored version of **WhoToFollowList** component:*/
export const Errored = {
  args: {
    status: "errored",
    data: [],
  },
}
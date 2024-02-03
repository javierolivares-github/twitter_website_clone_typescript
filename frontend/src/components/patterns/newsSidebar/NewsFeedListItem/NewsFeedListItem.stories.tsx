import NewsFeedListItem from './NewsFeedListItem';

/** The **NewsFeedListItem** component renders an item of the NewsFeed Section. */
export default {
  title: 'Patterns/NewsSidebar/NewsFeedListItem',
  component: NewsFeedListItem,
  tags: ['autodocs'],
  argTypes: {
    username: {
      description: 'Defines the username in a string format.',
      control: 'text'
    },
    timestamp: {
      description: 'Defines the timestamp in a string format.',
      control: 'text'
    },
    content: {
      description: 'Defines the content in a string format.',
      control: 'text'
    },
    imageUrl: {
      description: 'Defines the URL of the image in a string format.',
      control: 'text'
    },
    trending: {
      description: 'Specifies whether the news is trending or not in a boolean format.',
      control: 'boolean',
    },
    hashtag: {
      description: 'Defines the hastags in a string-array format.',
      control: 'object',
    },
  },
}

/**This is the default version of NewsFeedListItem component:*/
export const Default = {
  args: {
    id: 1,
    username: "First name",
    timestamp: "5h ago",
    content: "Placeholder content goes here!",
    imageUrl: "/images/coffee.jpg",
    trending: true,
    hashtag: ["#hashtag1", "#hashtag2"],
  },
}
import CardLoading from './CardLoading';

/** The **CardLoading** component renders a card in a loading version. */
export default {
  title: 'Atoms/Wrappers/CardLoading',
  component: CardLoading,
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: 'Defines the width of the component in a string format. (Uses a TailwindCSS class)',
      control: 'text',
    },
    height: {
      description: 'Defines the height of the component in a string format. (Uses a TailwindCSS class)',
      control: 'text',
    },
  },
}

/**This is the newsfeed version of CardLoading component:*/
export const NewsFeedItemLoading = {
  args: {
    width: "w-[23.75rem]",
    height: "h-[6.5rem]",
  },
}

/**This is the who to follow version of CardLoading component:*/
export const WhoToFollowItemLoading = {
  args: {
    width: "w-[23.75rem]",
    height: "h-[5rem]",
  },
}
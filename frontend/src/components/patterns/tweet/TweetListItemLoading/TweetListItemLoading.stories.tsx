import TweetListItemLoading from "./TweetListItemLoading";

/**The **TweetListItemLoading** component displays the loading version of a tweet list item. */
export default {
  title: 'Patterns/Tweet/TweetListItemLoading',
  component: TweetListItemLoading,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Specifies the color of the elements of the component.',
      control: 'text',
    }
  }
}

/**This is the default version of **TweetListItemLoading** component: */
export const Default = {
  args: {
    color: "bg-color-pulse-animation",
  }
}
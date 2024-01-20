import TweetButton from "./TweetButton";

/**The **TweetButton** component renders a tweet button. */
export default {
  title: 'Atoms/Buttons/TweetButton',
  component: TweetButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Specifies the size of the button.',
      control: 'text',
    },
    children: {
      description: 'Specifies the content of the button.',
      control: 'text',
    },
  }
}

/**This is the small version of the **TweetButton** component: */
export const Small = {
  args: {
    size: "small",
    children: "Tweet",
  },
}

/**This is the medium version of the **TweetButton** component: */
export const Medium = {
  args: {
    size: "medium",
    children: "Tweet",
  },
}
import TweetContent from "./TweetContent";

/**The **TweetContent** component displays the content section of the tweet. */
export default {
  title: 'Patterns/Tweet/TweetContent',
  component: TweetContent,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the URL of the image in a string format.',
      control: 'text',
    },
    content: {
      description: 'Specifies the content of the Tweet in a string format.',
      control: 'text',
    }
  }
}

/**This is the default version of the **TweetContent** component: */
export const Default = {
  args: {
    imageUrl: "/images/coffee.jpg",
    content: "Placeholder content goes here!"
  }
}
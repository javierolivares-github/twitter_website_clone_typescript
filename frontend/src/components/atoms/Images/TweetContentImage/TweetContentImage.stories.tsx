import TweetContentImage from "./TweetContentImage";

/**The **TweetContentImage** component renders an image for the content section of the tweet.*/
export default {
  title: 'Atoms/Images/TweetContentImage',
  component: TweetContentImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the URL to the image in a string format.',
      control: 'text',
    },
  }
}

/**This is the default version of **TweetContentImage** component: */
export const Default = {
  args: {
    imageUrl: "/images/coffee.jpg",
  }
}

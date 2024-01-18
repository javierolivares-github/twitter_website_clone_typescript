import ProfileImage from "./ProfileImage";

/**The **ProfileImage** component renders a profile image. */
export default {
  title: 'Atoms/Images/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the URL to the image in a string format.',
      control: 'text',
    },
    width: {
      description: 'Specifies the width of the image in a string format. Uses TailwindCSS classes. It must one of the following classes:',
      control: 'text',
    },
    height: {
      description: 'Specifies the height of the image in a string format. Uses TailwindCSS classes. It must one of the following classes:',
      control: 'text',
    },
  }
}

/**This is the default version of **ProfileImage** component: */
export const Default = {
  args: {
    imageUrl: "/images/profile1.png",
    width: "w-10",
    height: "h-10",
  }
}

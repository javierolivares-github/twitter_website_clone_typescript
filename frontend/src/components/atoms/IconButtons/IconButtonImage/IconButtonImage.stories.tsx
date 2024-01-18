import IconButtonImage from "./IconButtonImage";

/**The **IconButtonImage** component renders a button with an image icon inside. */
export default {
  title: 'Atoms/IconButtons/IconButtonImage',
  component: IconButtonImage,
  tags: ['autodocs'],
  argTypes: {
    screen: {
      description: 'Specifies the size of the icon in a string format.',
      control: 'text',
    }
  }
}

/**This is the small version of **IconButtonImage** component: */
export const Small = {
  args: {
    screen: "small",
  }
}

/**This is the medium version of **IconButtonImage** component: */
export const Medium = {
  args: {
    screen: "medium",
  }
}
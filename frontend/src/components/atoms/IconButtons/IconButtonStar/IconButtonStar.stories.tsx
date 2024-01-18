import IconButtonStar from "./IconButtonStar";

/**The **IconButtonStar** component renders a button with an star icon inside. */
export default {
  title: 'Atoms/IconButtons/IconButtonStar',
  component: IconButtonStar,
  tags: ['autodocs'],
  argTypes: {
    screen: {
      description: 'Specifies the size of the icon in a string format.',
      control: 'text',
    }
  }
}

/**This is the small version of **IconButtonStar** component: */
export const Small = {
  args: {
    screen: "small",
  }
}

/**This is the medium version of **IconButtonStar** component: */
export const Medium = {
  args: {
    screen: "medium",
  }
}
import SquareRoundedImage from "./SquareRoundedImage";

/**The **SquareRoundedImage** component renders an image with a square-rounded shape. */
export default {
  title: 'Atoms/Images/SquareRoundedImage',
  component: SquareRoundedImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the URL to the image in a string format.',
      control: 'text',
    },
    width: {
      description: 'Specifies the width of the image in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    height: {
      description: 'Specifies the height of the image in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    smWidth: {
      description: 'Specifies the width of the image in a string format for a medium size screen. Uses TailwindCSS classes. It is optional.',
      control: 'text',
    },
    smHeight: {
      description: 'Specifies the height of the image in a string format for a medium size screen. Uses TailwindCSS classes. It is optional.',
      control: 'text',
    },
  }
}

/**This is the default version of **SquareRoundedImage** component: */
export const Default = {
  args: {
    imageUrl: "/images/coffee.jpg",
    width: "w-[4.5rem]",
    height: "h-[4.5rem]",
  }
}

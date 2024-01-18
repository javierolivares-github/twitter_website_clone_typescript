import EmojiIcon from "./EmojiIcon";

/**The EmojiIcon component renders an emoji icon. */
export default {
  title: 'atoms/Icons/EmojiIcon',
  component: EmojiIcon,
  tags: ['autodocs'],
  argTypes: {
    fillColor: {
      description: 'Specifies the fill color of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    size: {
      description: 'Specifies the width and height of the icon in a string format.',
      control: 'text',
    },
  }
}

/** This is the default version of the **EmojiIcon** component:*/
export const Default = {
  args: {
    fillColor: "text-black-900",
    size: "24",
  },
};


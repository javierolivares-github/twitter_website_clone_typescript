import LikeIcon from "./LikeIcon";

/**The **LikeIcon** component renders an icon with the shape of a heart. */
export default {
  title: 'Atoms/Icons/LikeIcon',
  component: LikeIcon,
  tags: ['autodocs'],
  argTypes: {
    fillColor: {
      description: 'Specifies the fill color of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    width: {
      description: 'Specifies the width of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    height: {
      description: 'Specifies the height of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    smWidth: {
      description: 'Specifies the width of the icon in a string format in a medium size screen. Uses TailwindCSS classes.',
      control: 'text',
    },
    smHeight: {
      description: 'Specifies the height of the icon in a string format in a medium size screen. Uses TailwindCSS classes.',
      control: 'text',
    },
    isFilled: {
      description: 'Specifies whether the icon is filled or not in a boolean format.',
      control: 'boolean',
    },
  }
}

/** This is the default version of the **LikeIcon** component:*/
export const Default = {
  args: {
    fillColor: "text-black-900",
    isFilled: true,
    width: "w-[1.125rem]",
    height: "h-[1.125rem]",
  },
};
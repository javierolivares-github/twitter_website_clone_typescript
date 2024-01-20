import PinIcon from "./PinIcon";

/**The **PinIcon** component renders an icon with the shape of a pin. */
export default {
  title: 'Atoms/Icons/PinIcon',
  component: PinIcon,
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
      description: 'Specifies the width of the icon in a string format in a medium size screen. Uses TailwindCSS classes. It is optional.',
      control: 'text',
    },
    smHeight: {
      description: 'Specifies the height of the icon in a string format in a medium size screen. Uses TailwindCSS classes. It is optional.',
      control: 'text',
    },
  }
}

/** This is the default version of the **PinIcon** component:*/
export const Default = {
  args: {
    fillColor: "text-black-900",
    width: "w-[1.125rem]",
    height: "h-[1.125rem]",
  },
};
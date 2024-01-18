import CircleIcon from "./CircleIcon";

/**The CircleIcon component renders an icon with a shape of a circle. */
export default {
  title: 'atoms/Icons/CircleIcon',
  component: CircleIcon,
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

/** This is the default version of the **CircleIcon** component:*/
export const Default = {
  args: {
    fillColor: "text-black-900",
    size: "24",
  },
};


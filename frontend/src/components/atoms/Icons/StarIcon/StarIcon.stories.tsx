import StarIcon from "./StarIcon";

/**The StarIcon component renders a star icon. */
export default {
  title: 'atoms/Icons/StarIcon',
  component: StarIcon,
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

/** This is the default version of the **StarIcon** component:*/
export const Default = {
  args: {
    fillColor: "text-black-900",
    size: "24",
  },
};


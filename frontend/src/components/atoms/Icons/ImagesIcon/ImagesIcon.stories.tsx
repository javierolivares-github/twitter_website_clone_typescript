import ImagesIcon from "./ImagesIcon";

/**The ImagesIcon component renders a picture icon. */
export default {
  title: 'atoms/Icons/ImagesIcon',
  component: ImagesIcon,
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

/** This is the default version of the **ImagesIcon** component:*/
export const Default = {
  args: {
    fillColor: "text-black-900",
    size: "24",
  },
};


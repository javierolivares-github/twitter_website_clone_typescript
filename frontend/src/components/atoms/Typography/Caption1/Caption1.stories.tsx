import Caption1 from "./Caption1";

/**The **Caption1** component is used for render caption text. */
export default {
  title: 'atoms/Typography/Caption1',
  component: Caption1,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the caption. It must be a string.',
      control: 'text',
    },
    weight: {
      description: 'Specifies the font-weight of the caption in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the caption in a string format. Uses TailwindCSS classes.',
      control: 'text',
    }
  }
}

/**This is the bold version of the **Caption1** component */
export const Bold = {
  args: {
    children: "Caption1",
    weight: "font-bold",
    color: "text-secondary-15",
  }
}

/**This is the semibold version of the **Caption1** component */
export const Semibold = {
  args: {
    children: "Caption1",
    weight: "font-semibold",
    color: "text-secondary-15",
  }
}

/**This is the medium version of the **Caption1** component */
export const Medium = {
  args: {
    children: "Caption1",
    weight: "font-medium",
    color: "text-secondary-15",
  }
}

/**This is the normal version of the **Caption1** component */
export const Normal = {
  args: {
    children: "Caption1",
    weight: "font-normal",
    color: "text-secondary-15",
  }
}

/**This is the light version of the **Caption1** component */
export const Light = {
  args: {
    children: "Caption1",
    weight: "font-light",
    color: "text-secondary-15",
  }
}
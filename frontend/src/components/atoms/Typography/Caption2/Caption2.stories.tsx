import Caption2 from "./Caption2";

/**The Caption2 component is used for render caption text. */
export default {
  title: 'atoms/Typography/Caption2',
  component: Caption2,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the caption. It must be a string.',
      control: 'text',
    },
    weight: {
      description: 'Specifies the font-weight of the caption. It must be one of the following string options:',
      control: 'text',
    },
    color: {
      description: 'Specifies the text-color of the caption. Uses TailwindCSS classes. It must be a string.',
      control: 'text',
    }
  }
}

/**This is the bold version of the **Caption2** component */
export const Bold = {
  args: {
    children: "Caption2",
    weight: "font-bold",
    color: "text-secondary-15",
  }
}

/**This is the semibold version of the **Caption2** component */
export const Semibold = {
  args: {
    children: "Caption2",
    weight: "font-semibold",
    color: "text-secondary-15",
  }
}

/**This is the medium version of the **Caption2** component */
export const Medium = {
  args: {
    children: "Caption2",
    weight: "font-medium",
    color: "text-secondary-15",
  }
}

/**This is the normal version of the **Caption2** component */
export const Normal = {
  args: {
    children: "Caption2",
    weight: "font-normal",
    color: "text-secondary-15",
  }
}

/**This is the light version of the **Caption2** component */
export const Light = {
  args: {
    children: "Caption2",
    weight: "font-light",
    color: "text-secondary-15",
  }
}
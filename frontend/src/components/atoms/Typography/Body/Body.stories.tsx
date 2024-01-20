import Body from "./Body";

/**The **Body** component is used for render body text. */
export default {
  title: 'atoms/Typography/Body',
  component: Body,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the text. It must be a string.',
      control: 'text',
    },
    weight: {
      description: 'Specifies the font-weight of the text in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the text in a string format. Uses TailwindCSS classes.',
      control: 'text',
    }
  }
}

/**This is the bold version of the **Body** component */
export const Bold = {
  args: {
    children: "Body",
    weight: "font-bold",
    color: "text-secondary-15",
  }
}

/**This is the semibold version of the **Body** component */
export const Semibold = {
  args: {
    children: "Body",
    weight: "font-semibold",
    color: "text-secondary-15",
  }
}

/**This is the medium version of the **Body** component */
export const Medium = {
  args: {
    children: "Body",
    weight: "font-medium",
    color: "text-secondary-15",
  }
}

/**This is the normal version of the **Body** component */
export const Normal = {
  args: {
    children: "Body",
    weight: "font-normal",
    color: "text-secondary-15",
  }
}

/**This is the light version of the **Body** component */
export const Light = {
  args: {
    children: "Body",
    weight: "font-light",
    color: "text-secondary-15",
  }
}
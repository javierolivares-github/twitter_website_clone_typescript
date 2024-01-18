import Heading2 from "./Heading2";

/**The Heading2 component is used for render level 2 headings. */
export default {
  title: 'atoms/Typography/Heading2',
  component: Heading2,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the heading. It must be a string.',
      control: 'text',
    },
    weight: {
      description: 'Specifies the font-weight of the heading. It must be one of the following string options:',
      control: 'text',
    },
    color: {
      description: 'Specifies the text-color of the heading. Uses TailwindCSS classes. It must be a string.',
      control: 'text',
    }
  }
}

/**This is the bold version of the **Heading2** component */
export const Bold = {
  args: {
    children: "Heading2",
    weight: "font-bold",
    color: "text-secondary-15",
  }
}

/**This is the semibold version of the **Heading2** component */
export const Semibold = {
  args: {
    children: "Heading2",
    weight: "font-semibold",
    color: "text-secondary-15",
  }
}

/**This is the medium version of the **Heading2** component */
export const Medium = {
  args: {
    children: "Heading2",
    weight: "font-medium",
    color: "text-secondary-15",
  }
}

/**This is the normal version of the **Heading2** component */
export const Normal = {
  args: {
    children: "Heading2",
    weight: "font-normal",
    color: "text-secondary-15",
  }
}

/**This is the light version of the **Heading2** component */
export const Light = {
  args: {
    children: "Heading2",
    weight: "font-light",
    color: "text-secondary-15",
  }
}
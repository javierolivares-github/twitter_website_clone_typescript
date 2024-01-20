import Heading1 from "./Heading1";

/**The **Heading1** component is used for render level 1 headings. */
export default {
  title: 'atoms/Typography/Heading1',
  component: Heading1,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the heading. It must be a string.',
      control: 'text',
    },
    weight: {
      description: 'Specifies the font-weight of the heading in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the heading in a string format. Uses TailwindCSS classes.',
      control: 'text',
    }
  }
}

/**This is the bold version of the **Heading1** component */
export const Bold = {
  args: {
    children: "Heading1",
    weight: "font-bold",
    color: "text-secondary-15",
  }
}

/**This is the semibold version of the **Heading1** component */
export const Semibold = {
  args: {
    children: "Heading1",
    weight: "font-semibold",
    color: "text-secondary-15",
  }
}

/**This is the medium version of the **Heading1** component */
export const Medium = {
  args: {
    children: "Heading1",
    weight: "font-medium",
    color: "text-secondary-15",
  }
}

/**This is the normal version of the **Heading1** component */
export const Normal = {
  args: {
    children: "Heading1",
    weight: "font-normal",
    color: "text-secondary-15",
  }
}

/**This is the light version of the **Heading1** component */
export const Light = {
  args: {
    children: "Heading1",
    weight: "font-light",
    color: "text-secondary-15",
  }
}
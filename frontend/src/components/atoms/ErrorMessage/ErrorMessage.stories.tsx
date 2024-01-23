import ErrorMessage from "./ErrorMessage";

/**The **ErrorMessage** component displays a custom message error. */
export default {
  title: 'Atoms/ErrorMessage/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    message: {
      description: 'Defines a custom error message in a string format',
      control: 'text',
    }
  }
}

/**This is the default **ErrorMessage** component: */
export const Default = {
  args: {
    message: "Failed to load data."
  }
}
import React from "react";
import IconButton from "./IconButton";
import CircleIcon from "../../Icons/CircleIcon";

/**The **IconButton** component renders an icon button.  */
export default {
  title: 'Atoms/IconButtons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    children: 'Specifies the content of the button in an icon format.',
  }
}

/**This is the default version of **IconButton** component: */
export const Default = {
  args: {
    children: <CircleIcon fillColor="text-primary-50" size="16" />
  }
}
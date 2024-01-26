import React from 'react';
import NavbarListItem from './NavbarListItem';
import CircleIcon from '../../../atoms/Icons/CircleIcon';

/** The **NavbarListItem** component renders a list item of the navegation bar part. */
export default {
  title: 'Patterns/Navbar/NavbarListItem',
  component: NavbarListItem,
  tags: ['autodocs'],
  argTypes: {
    iconChild: {
      description: 'Specifies the icon of the component in a React element format.',
    },
    textChild: {
      description: 'Specifies the text content of the component in a string format.',
      control: 'text',
    },
    isActive: {
      description: 'Specifies whether the component is active or not in a boolean format.',
      control: 'boolean',
    }
  },
}

/**This is the default version of NavbarListItem component:*/
export const Default = {
  args: {
    iconChild: <CircleIcon fillColor="text-secondary-15" width="w-[1.375rem]" height="h-[1.375rem]" />,
    textChild: "Home",
    isActive: false,
  },
}

/**This is the active version of NavbarListItem component:*/
export const Active = {
  args: {
    iconChild: <CircleIcon fillColor="text-secondary-15" width="w-[1.375rem]" height="h-[1.375rem]" />,
    textChild: "Home",
    isActive: true,
  },
}
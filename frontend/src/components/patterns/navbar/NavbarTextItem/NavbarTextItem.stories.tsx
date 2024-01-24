import NavbarTextItem from './NavbarTextItem';

/**The **NavbarTextItem** component renders the text correspond to the Navbars items. */
export default {
  title: 'Patterns/Navbar/NavbarTextItem',
  component: NavbarTextItem,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of text in a string format.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the text in a string format.',
      control: 'text',
    },
    isActive: {
      description: 'Specifies whether the font-weight is normal or semibold in a boolean format.',
      control: 'boolean',
    },
  }
}

/**This is the default version of **NavbarTextItem** component: */
export const Default = {
  args: {
    children: "Home",
    color: "text-secondary-15",
    isActive: false,
  }
}

/**This is the active version of **NavbarTextItem** component: */
export const Active = {
  args: {
    children: "Home",
    color: "text-secondary-15",
    isActive: true,
  }
}
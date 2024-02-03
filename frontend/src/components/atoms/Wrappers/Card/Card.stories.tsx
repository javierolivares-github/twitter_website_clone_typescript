import React from 'react';
import Card from './Card';

/** The **Card** component renders a card that only shows it when the screen size is 1280px or above. */
export default {
  title: 'Atoms/Wrappers/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: 'Specifies the content of the card.'
  },
}

/**This is the default version of Card component:*/
export const Default = {
  args: {
    children: <h2>This is the card component.</h2>
  },
}
import React from 'react';
import PageWrapper from './PageWrapper';

/** The **PageWrapper** component renders a wrapper for the main page. */
export default {
  title: 'Atoms/Wrappers/PageWrapper',
  component: PageWrapper,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Defines the content of the PageWrapper component.',
      control: 'object',
    },
  },
}

/**This is the default version of PageWrapper component:*/
export const Default = {
  args: {
    children: <h2>This is the PageWrapper component.</h2>
  },
}
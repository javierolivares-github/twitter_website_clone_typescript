import React from 'react';
import PageContainer from './PageContainer';

/** The **PageContainer** component renders a container for the content of the main page. */
export default {
  title: 'Atoms/Wrappers/PageContainer',
  component: PageContainer,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Defines the content of the PageContainer component.',
      control: 'object',
    },
  },
}

/**This is the default version of PageContainer component:*/
export const Default = {
  args: {
    children: <h2>This is the PageContainer component.</h2>
  },
}
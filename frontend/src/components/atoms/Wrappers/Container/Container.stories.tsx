import React from 'react';
import Container from './Container';

/** The **Container** component acts like a container for others elements. */
export default {
  title: 'Atoms/Wrappers/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    children: 'Specifies the content of the component.'
  },
}

/**This is the default version of Container component:*/
export const Default = {
  args: {
    children: <div>Heloo</div>
  },
}
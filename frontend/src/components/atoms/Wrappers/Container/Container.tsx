import React from 'react';
import '/src/index.css';

type ContainerProps = {
  children: any;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div data-testid="container" className={`w-full flex items-center justify-between gap-2`}>
      {children}
    </div>
  )
}

export default Container;



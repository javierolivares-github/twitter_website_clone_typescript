import React from 'react';
import '/src/index.css';

type PageWrapperProps = {
  children: React.JSX.Element;
}

const PageWrapper = ({children}: PageWrapperProps) => {
  return (
    <div data-testid="page-wrapper" className={`w-full flex justify-center`}>
      {children}
    </div>
  )
}

export default PageWrapper;



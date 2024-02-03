import React from 'react';
import '/src/index.css';

type PageContainerProps = {
  children: any;
}

const PageContainer = ({children}: PageContainerProps) => {
  return (
    <div data-test-id="page-container" className={`w-full max-w-[86.25rem] flex`}>
      {children}
    </div>
  )
}

export default PageContainer;



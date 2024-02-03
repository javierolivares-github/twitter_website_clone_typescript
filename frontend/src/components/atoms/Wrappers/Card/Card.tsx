import React from 'react';
import '/src/index.css';

type CardProps = {
  children: React.JSX.Element;
}

const Card = ({children}) => {
  return (
    <div data-testid="card" className="w-full max-w-[23.75rem] flex justify-center items-center p-4 rounded-2xl bg-secondary-98 hover:bg-secondary-95">
      {children}
    </div>
  )
}

export default Card;



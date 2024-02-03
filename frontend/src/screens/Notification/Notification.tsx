import React from 'react';
import '/src/index.css';
import Heading1 from '../../components/atoms/Typography/Heading1';

const Notification = () => {
  return (
    <div data-testid="notification-wrapper" className="py-7 px-4">
      <Heading1 weight="font-bold" color="text-secondary-15">This is the Notification page. Coming soon.</Heading1>
    </div>
  )
}

export default Notification;


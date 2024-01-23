import React from 'react';
import '/src/index.css';
import Caption2 from '../Typography/Caption2';

type ErrorMessageProps = {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="p-4">
      <Caption2 weight="font-semibold" color="text-red-600">{message}</Caption2>
    </div>
  )
}

export default ErrorMessage;

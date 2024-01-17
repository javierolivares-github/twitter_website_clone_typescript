import React from 'react'

const Error = ({ message = "Something went wrong"}) => {
  return (
    <div
      data-testid="message-container"
    >
      {message}
    </div>
  )
}

export default Error
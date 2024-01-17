import React from "react";

type ButtonProps = {
  onClick: () => number;
}

export default function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Click me</button>;
}
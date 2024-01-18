import React from 'react'

type Heading1Props = {
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-gray-100";
}

export default function Heading1({ weight, color }: Heading1Props) {
  return (
    <h2 className={`text-[1.125rem] leading-[1.125rem] sm:text-[1.25rem] sm:leading-[1.25rem] ${color} ${weight}`}>Heading1</h2>
  )
}


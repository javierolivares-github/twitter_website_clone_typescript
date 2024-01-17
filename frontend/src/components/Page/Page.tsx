import React from "react";
import Button from "../Button/Button.tsx";

export default function Home() {
  const onClick = () => {
    return 5;
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button onClick={onClick} />
    </main>
  )

}
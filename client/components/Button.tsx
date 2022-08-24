import React from "react";

interface ButtonProps {
  icon: React.ReactNode;
  onClickFunc: () => void;
}

export default function Button({ icon, onClickFunc }: ButtonProps) {
  return (
    <button onClick={onClickFunc}>{icon}</button>
  )
}
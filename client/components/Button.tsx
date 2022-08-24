import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ButtonProps {
  icon: IconProp;
  onClickFunc: () => void;
  iconClass?: string;
  btnClass?: string;
}

export default function Button({ icon, btnClass, iconClass, onClickFunc }: ButtonProps) {
  return (
    <button className={ btnClass } onClick={onClickFunc}><FontAwesomeIcon icon={ icon } className={ iconClass }></FontAwesomeIcon></button>
  )
}
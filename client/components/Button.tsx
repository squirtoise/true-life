import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ActionButton = styled.button`
  margin: 0 5px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: 0;
  :hover {
    opacity: 0.8;
  }
`

interface ButtonProps {
  icon: IconProp;
  onClickFunc: () => void;
  iconClass?: string;
  btnClass?: string;
}

export default function Button({
  icon,
  btnClass,
  iconClass,
  onClickFunc,
}: ButtonProps) {
  return (
    <ActionButton className={ btnClass } onClick={onClickFunc}><FontAwesomeIcon icon={ icon } className={ iconClass }></FontAwesomeIcon></ActionButton>
  )
}

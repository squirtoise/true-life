import { jsx as _jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
const ActionButton = styled.button `
  margin: 0 5px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: 0;
  :hover {
    opacity: 0.8;
  }
`;
export default function Button({ icon, btnClass, iconClass, onClickFunc, }) {
    return (_jsx(ActionButton, { className: btnClass, onClick: onClickFunc, children: _jsx(FontAwesomeIcon, { icon: icon, className: iconClass }) }));
}

import { Link } from "react-router-dom";
import styled from "styled-components";
export const SForm = styled.form `
    width: 100%;
    background: 847e75;
    border-radius: 5px;
    padding: 20px;
`;
export const SFormTitle = styled.span `
    font-size: 24px;
    font-weight: 600;
`;
export const SFormControl = styled.div `
    :first-of-type {
        margin-top: 10px;
    }
    :not(:last-of-type) {
        margin-bottom: 10px;
    }
`;
export const SLabel = styled.label `
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
`;
export const SInput = styled.input `
    outline: none;
    border: 1px solid;
    width: 100%;
    font-size: 14px;
`;
export const SButton = styled.button `
    width: 100%;
    background: #eb7a30;
    color: black;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
`;
export const SRedirect = styled.div `
    font-size: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
export const SRedirectLabel = styled.span `
    color: #eb7a30;
`;
export const SRedirectLink = styled(Link) `
    color: #eb7a30;
`;

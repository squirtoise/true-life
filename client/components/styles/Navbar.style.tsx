import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavbarContainerProps  {
    extendNavbar: boolean;
};

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    @media (max-width: 860px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;
export const TrueLifeMobileLink = styled(Link)`
    width: 40px;
    height: 40px;
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (min-width: 861px) {
        display: none;
    }
`;

// profile img /icon
export const UserProfile = styled.img`
    border-color: white;
    border: solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavbarContainer = styled.nav<NavbarContainerProps>`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? '30vh' : '80px')};
    background-color: black;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex: 50%;
    align-items: center;
    justify-content: center;
    // padding-left: 5%;
    background-color: black;
`;
export const CenterContainer = styled.div`
    display: flex;
    flex: 40%;
    align-items: center;
    justify-content: center;
    color: white;
    // padding-right: 10%;
    background-color: black;
`;
export const RightContainer = styled.div`
    display: flex;
    flex: 30%;
    justify-content: center;
    // padding-right: 150px;
    background-color: black;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-between;
`;
export const MenuButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 861px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 861px) {
        display: none;
    }
`;

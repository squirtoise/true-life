import styled from 'styled-components';
import { Link } from 'react-router-dom';
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

export const determinedColor = randomColor;
interface NavbarContainerProps {
    extendNavbar: boolean;
    streak: number;
}

interface NavbarClickableItemProp {
    onClick: () => void;
}

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    :hover {
        color: ${randomColor};
    }
    @media (max-width: 860px) {
        display: none;
    }
`;
export const NavbarLinkBadge = styled.button<NavbarClickableItemProp>`
    position: absolute;

    max-width: 100%;
    background-color: white;
    color: ${randomColor};
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 25px 0px 25px 0px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        border-color: ${randomColor};
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    :hover {
        color: ${randomColor};
    }
`;
export const TrueLifeMobileLink = styled(Link)`
    width: 40px;
    height: 40px;
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    :hover {
        color: ${randomColor};
    }

    @media (min-width: 861px) {
        display: none;
    }
`;

// profile img /icon
export const UserProfile = styled.img<NavbarClickableItemProp>`
    max-width: 100%;
    border-color: white;
    color: white;
    border: solid;
    border-radius: 50%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
        border: solid;
        border-color: ${randomColor};
    }
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
    flex: 30%;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1%;
    background-color: black;
`;
export const CenterContainer = styled.div`
    display: flex;
    flex: 40%;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
`;
export const RightContainer = styled.div`
    display: flex;
    flex: 30%;
    justify-content: flex-end;
    padding-right: 1%;
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
    :hover {
        color: ${randomColor};
    }

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

export const BodyLayout = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100vh;
`;
export const BodyLayoutv2 = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    height: 100vh;
`;

import React, { useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    MenuButton,
    CenterContainer,
    NavbarLink,
    NavbarLinkExtended,
    TrueLifeMobileLink,
    NavbarLinkBadge,
    UserProfile,
} from './styles/Navbar.style';

export interface NavbarProps {
    children: ReactNode;
}
// not sure if using TS correctly to allow children - will se if any issues come up
export function Navbar() {
    // set up React Context for state management of user - include streak in the context
    const [streak, setUseStreak] = useState<number>(1);
    const [extendNavbar, setExtendNavbar] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <NavbarContainer extendNavbar={extendNavbar} streak={streak}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        {/* Navbar links / buttons */}

                        <NavbarLink to="/feed"> Home </NavbarLink>

                        <NavbarLink to="/friends"> Friends </NavbarLink>
                        <NavbarLink to="/">SignOut </NavbarLink>
                        <MenuButton
                            onClick={() => {
                                setExtendNavbar((prev) => !prev);
                            }}
                        >
                            {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
                        </MenuButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <CenterContainer>
                    <NavbarLink to="/feed"> TrueLife </NavbarLink>
                    <TrueLifeMobileLink to="/feed">TL</TrueLifeMobileLink>
                </CenterContainer>
                <RightContainer>
                    {/* Profile Icon/Img - need to be a button?*/}
                    <NavbarLinkBadge onClick={() => navigate('/myProfile')}>{streak}</NavbarLinkBadge>
                    <UserProfile
                        onClick={() => navigate('/myProfile')}
                        src="img/avatar_icon.png"
                    ></UserProfile>
                    {/* <img src="img/TrueLife_icon.jpg" /> */}
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended
                        onClick={() => {
                            setExtendNavbar((prev) => !prev);
                        }}
                        to="/feed"
                    >
                        {' '}
                        Home{' '}
                    </NavbarLinkExtended>
                    <NavbarLinkExtended
                        onClick={() => {
                            setExtendNavbar((prev) => !prev);
                        }}
                        to="/friends"
                    >
                        {' '}
                        Friends{' '}
                    </NavbarLinkExtended>

                    <NavbarLinkExtended
                        onClick={() => {
                            setExtendNavbar((prev) => !prev);
                        }}
                        to="/"
                    >
                        Sign Out{' '}
                    </NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

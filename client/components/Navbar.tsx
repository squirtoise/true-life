import React, { useState } from 'react';

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
    UserProfile,
} from './styles/Navbar.style';

export function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState<boolean>(false);
    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        {/* Navbar links / buttons */}

                        <NavbarLink to="/friends"> Friends </NavbarLink>
                        <NavbarLink to="/myProfile"> Profile </NavbarLink>
                        <MenuButton
                        
                            onClick={() => {
                                setExtendNavbar((prev) => !prev);
                            }}
                        >
                            {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
                        </MenuButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <CenterContainer >
                    <NavbarLink to="/"> TrueLife </NavbarLink>
                    <TrueLifeMobileLink to="/">TL</TrueLifeMobileLink>
                </CenterContainer>
                <RightContainer>
                    {/* Profile Icon/Img */}
                    <UserProfile src="img/avatar_icon.png"/>
                    <img src="img/TrueLife_icon.jpg" />
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/friends"> Friends </NavbarLinkExtended>
                    <NavbarLinkExtended to="/streak">Streak </NavbarLinkExtended>
                    <NavbarLinkExtended to="/myProfile"> Profile </NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

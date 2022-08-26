import React, { useState } from 'react';
import styled from 'styled-components';

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
  TrueLifeMobileLink,
  UserProfile,
} from './styles/Navbar.style';

export function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState<boolean>(false);
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {/* Navbar links / buttons */}

            <NavbarLink to='/friends'> Friends </NavbarLink>
            <NavbarLink to='/streak'>Streak </NavbarLink>
            <NavbarLink to='/myProfile'> Profile </NavbarLink>
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
          <NavbarLink to='/'> TrueLife </NavbarLink>
          <TrueLifeMobileLink to='/'>TL</TrueLifeMobileLink>
        </CenterContainer>
        <RightContainer>
          {/* Profile Icon/Img */}
          <UserProfile src='#'></UserProfile>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}

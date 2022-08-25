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
} from './Nav2.style';

export function Nav2() {
  const [extendNavbar, setExtendNavbar] = useState<boolean>(false);
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {/* Navbar links / buttons */}
            <MenuButton
              onClick={() => {
                setExtendNavbar((prev) => !prev);
              }}
            >
              {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
            </MenuButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <CenterContainer></CenterContainer>
        <RightContainer>{/* Profile Icon/Img */}</RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}

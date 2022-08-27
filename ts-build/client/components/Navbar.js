import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, MenuButton, CenterContainer, NavbarLink, NavbarLinkExtended, TrueLifeMobileLink, UserProfile, } from './styles/Navbar.style';
export function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (_jsxs(NavbarContainer, { extendNavbar: extendNavbar, children: [_jsxs(NavbarInnerContainer, { children: [_jsx(LeftContainer, { children: _jsxs(NavbarLinkContainer, { children: [_jsx(NavbarLink, { to: "/friends", children: " Friends " }), _jsx(NavbarLink, { to: "/myProfile", children: " Profile " }), _jsx(MenuButton, { onClick: () => {
                                        setExtendNavbar((prev) => !prev);
                                    }, children: extendNavbar ? _jsx(_Fragment, { children: " \u2715 " }) : _jsx(_Fragment, { children: " \u2261 " }) })] }) }), _jsxs(CenterContainer, { children: [_jsx(NavbarLink, { to: "/", children: " TrueLife " }), _jsx(TrueLifeMobileLink, { to: "/", children: "TL" })] }), _jsxs(RightContainer, { children: [_jsx(UserProfile, { src: "img/avatar_icon.png" }), _jsx("img", { src: "img/TrueLife_icon.jpg" })] })] }), extendNavbar && (_jsxs(NavbarExtendedContainer, { children: [_jsx(NavbarLinkExtended, { to: "/friends", children: " Friends " }), _jsx(NavbarLinkExtended, { to: "/streak", children: "Streak " }), _jsx(NavbarLinkExtended, { to: "/myProfile", children: " Profile " })] }))] }));
}

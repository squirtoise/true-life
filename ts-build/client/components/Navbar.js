import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, MenuButton, CenterContainer, NavbarLink, NavbarLinkExtended, TrueLifeMobileLink, NavbarLinkBadge, UserProfile, Searchbar, } from './styles/Navbar.style';
// not sure if using TS correctly to allow children - will se if any issues come up
export function Navbar() {
    // set up React Context for state management of user - include streak in the context
    const [streak, setUseStreak] = useState(1);
    const [extendNavbar, setExtendNavbar] = useState(false);
    const navigate = useNavigate();
    return (_jsxs(NavbarContainer, { extendNavbar: extendNavbar, streak: streak, children: [_jsxs(NavbarInnerContainer, { children: [_jsx(LeftContainer, { children: _jsxs(NavbarLinkContainer, { children: [_jsx(NavbarLink, { to: "/feed", children: " Home " }), _jsx(NavbarLink, { to: "/friends", children: " Friends " }), _jsx(NavbarLink, { to: "/", children: "SignOut " }), _jsx(MenuButton, { onClick: () => {
                                        setExtendNavbar((prev) => !prev);
                                    }, children: extendNavbar ? _jsx(_Fragment, { children: " \u2715 " }) : _jsx(_Fragment, { children: " \u2261 " }) })] }) }), _jsxs(CenterContainer, { children: [_jsx(NavbarLink, { to: "/feed", children: " TrueLife " }), _jsx(TrueLifeMobileLink, { to: "/feed", children: "TL" })] }), _jsxs(RightContainer, { children: [_jsx(Searchbar, { children: _jsx("input", { type: "text", placeholder: "Search..." }) }), _jsx(NavbarLinkBadge, { onClick: () => navigate('/myProfile'), children: streak }), _jsx(UserProfile, { onClick: () => navigate('/myProfile'), src: "img/avatar_icon.png" })] })] }), extendNavbar && (_jsxs(NavbarExtendedContainer, { children: [_jsxs(NavbarLinkExtended, { onClick: () => {
                            setExtendNavbar((prev) => !prev);
                        }, to: "/feed", children: [' ', "Home", ' '] }), _jsxs(NavbarLinkExtended, { onClick: () => {
                            setExtendNavbar((prev) => !prev);
                        }, to: "/friends", children: [' ', "Friends", ' '] }), _jsxs(NavbarLinkExtended, { onClick: () => {
                            setExtendNavbar((prev) => !prev);
                        }, to: "/", children: ["Sign Out", ' '] })] }))] }));
}

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './components/pages/Home';
import Post from './components/Post';
export function App() {
    return (_jsxs(_Fragment, { children: [_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Home, {}) }), _jsx(Route, { path: '/friends' }), _jsx(Route, { path: '/streak' }), _jsx(Route, { path: '/myProfile' }), _jsx(Route, { path: '/friendProfile' })] })] }), _jsxs("div", { children: [_jsx("h1", { children: "TEST." }), _jsx(Post, { imageURI: "https://is.mediadelivery.fi/img/658/3dde460c031641508c85e03e3858af14.jpg.webp", user: "testUser", timeStamp: "8/26/2022 4:56AM" })] })] }));
}

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './components/pages/FeedPage';
import FriendsListPage from './components/pages/FriendsListPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import FriendsFeedPage from './components/pages/FriendsFeedPage';
import MyProfilePage from './components/pages/MyProfilePage';
import CameraSnapPage from './components/pages/CameraSnapPage';
import Layout from './components/Layout';
// import Upload from './components/Upload';
export function App() {
    return (_jsx(_Fragment, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUpPage, {}) }), _jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { path: "/feed", element: _jsx(FeedPage, {}) }), _jsx(Route, { path: "/friends", element: _jsx(FriendsListPage, {}) }), _jsx(Route, { path: "/friends/:id", element: _jsx(FriendsFeedPage, {}) }), _jsx(Route, { path: "/streak" }), _jsx(Route, { path: "/myProfile", element: _jsx(MyProfilePage, {}) }), _jsx(Route, { path: "/camera", element: _jsx(CameraSnapPage, {}) })] })] }) }) }));
}

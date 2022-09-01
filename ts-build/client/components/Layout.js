import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { BodyLayout } from './styles/Navbar.style';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
function Layout() {
    const navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs(BodyLayout, { children: [_jsx(Outlet, {}), _jsx("br", {}), _jsx(Button, { icon: faCamera, onClickFunc: () => navigate('/camera') })] })] }));
}
export default Layout;

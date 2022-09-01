import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate();
    return (_jsxs("div", { children: [_jsx("h1", { children: "Login Page" }), _jsx("h3", { children: "CLICK HEART to go to feed" }), _jsx("p", { children: "- temp until auth in place" }), _jsx(Button, { icon: faHeart, onClickFunc: () => navigate('/feed') })] }));
}
export default LoginPage;

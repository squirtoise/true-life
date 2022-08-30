import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { BodyLayout } from './styles/Navbar.style';
import Button from './Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar></Navbar>
            <BodyLayout>
                <Outlet />
            </BodyLayout>

            {/* camera button / footer? */}
            <Button icon={faHeart} onClickFunc={() => navigate('/camera')} />
        </>
    );
}

export default Layout;

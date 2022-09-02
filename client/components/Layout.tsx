import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { BodyLayout } from './styles/Navbar.style';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { faCamera, faHeart,  } from '@fortawesome/free-solid-svg-icons';

function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar></Navbar>
            <BodyLayout>
                <Outlet />
                <br />
                <Button icon={faCamera} onClickFunc={() => navigate('/camera')}></Button>
                
            </BodyLayout>

            {/* camera button / footer? */}
            {/* <Button icon={faHeart} onClickFunc={() => navigate('/camera')} /> */}
        </>
    );
}

export default Layout;

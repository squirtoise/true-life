import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { BodyLayout } from './styles/Navbar.style';

function Layout() {
    return (
        <>
            <Navbar></Navbar>
            <BodyLayout>
                <Outlet />
            </BodyLayout>

            {/* camera button / footer? */}
        </>
    );
}

export default Layout;

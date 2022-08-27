import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
        </>
    );
}

export default Layout;

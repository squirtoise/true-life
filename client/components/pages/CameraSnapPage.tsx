import React from 'react';
import Canvas from '../Canvas';
import { Navbar } from '../Navbar';
import { BodyLayoutv2 } from '../styles/Navbar.style';

function CameraSnapPage() {
    return (
        <BodyLayoutv2>
            <Navbar></Navbar>
            <Canvas />
        </BodyLayoutv2>
    );
}

export default CameraSnapPage;

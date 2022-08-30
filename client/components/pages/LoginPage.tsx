import React from 'react';
import Button from '../Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login Page</h1>
            {/* Button here as temp way to get to homepage without auth */}
            <h3>CLICK HEART to go to feed</h3>
            <p>- temp until auth in place</p>
            <Button icon={faHeart} onClickFunc={() => navigate('/feed')} />
        </div>
    );
}

export default LoginPage;

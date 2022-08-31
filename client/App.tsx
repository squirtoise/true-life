import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import FeedPage from './components/pages/FeedPage';
import FriendsListPage from './components/pages/FriendsListPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import FriendsFeedPage from './components/pages/FriendsFeedPage';
import MyProfilePage from './components/pages/MyProfilePage';
import CameraSnapPage from './components/pages/CameraSnapPage';
import Layout from './components/Layout';
import Post from './components/Post';
import { Navbar } from './components/Navbar';
// import Upload from './components/Upload';

export function App() {
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<LoginPage />} />

                    {/* FILE UPLOAD TEST */}
                    {/* <Route path='/upload' element={<Upload/>}/> */}

                    <Route path="/signup" element={<SignUpPage />} />
                    <Route element={<Layout />}>
                        <Route path="/feed" element={<FeedPage />} />
                        <Route path="/friends" element={<FriendsListPage />} />
                        <Route path="/friends/:id" element={<FriendsFeedPage />} />
                        <Route path="/streak" />
                        <Route path="/myProfile" element={<MyProfilePage />} />
                    </Route>
                    <Route path="/camera" element={<CameraSnapPage />} />
                </Routes>
            </Router>
            {/* <div>
                <h1>TEST.</h1>
                <Post
                    imageURI="https://is.mediadelivery.fi/img/658/3dde460c031641508c85e03e3858af14.jpg.webp"
                    user="testUser"
                    timeStamp="8/26/2022 4:56AM"
                />
            </div> */}
        </>
    );
}

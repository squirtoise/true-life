import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './components/Navbar';
import Home from './components/pages/Home';
import Post from './components/Post';

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/friends' />
          <Route path='/streak' />
          <Route path='/myProfile' />
          <Route path='/friendProfile' />
        </Routes>
      </Router>
      <div>
        <h1>TEST.</h1>
        <Post 
          imageURI="https://is.mediadelivery.fi/img/658/3dde460c031641508c85e03e3858af14.jpg.webp"
          user="testUser"
          timeStamp="8/26/2022 4:56AM"
        />
      </div>
    </>
  );
}

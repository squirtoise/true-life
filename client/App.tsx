import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './components/Navbar';
import Home from './components/pages/Home';

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
        <Button
          icon={faHeart}
          onClickFunc={() => console.log('Button clicked!')}
        />
      </div>
    </>
  );
}

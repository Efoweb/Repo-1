import React, { useEffect, useState } from 'react';
import './App.css';
//import './other.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import Leaderboards from './components/pages/Leaderboards';
import Profile from './components/pages/Profiles';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';





function App() {
  return (
  <>
  <Router>
    <NavBar />
      <Routes>
        <Route exact path='/'  element={< Home/>}/>
        <Route exact path='/Games'  element={< Games/>}/>
        <Route exact path='/Leaderboards'  element={< Leaderboards/>}/>
        <Route exact path='/Profile'  element={< Profile/>}/>
        <Route exact path='/SignIn'  element={< SignIn/>}/>
        <Route exact path='/SignUp'  element={< SignUp/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;


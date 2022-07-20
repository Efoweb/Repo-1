import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import Home from './components/pages/Home';





function App() {
  return (
  <>
  <Router>
    <NavBar />
      <Routes>
        <Route exact path='/'  element={< Home/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;


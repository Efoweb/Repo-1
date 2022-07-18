import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Axios from 'axios';

function App() {

  const getCar = () => {
    Axios.get("/customer/viewCars").then((response) => {
        console.log(response)
    });
  };
  return (
  <>
  <Router>
    <NavBar />
      <Routes>
        <Route exact path='/home' />
    </Routes>
  </Router>
  <div>
      <button onClick={getCar}>View Cars</button>
  </div>
  </>
  );
}

export default App;


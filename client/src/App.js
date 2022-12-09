import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Admin from './pages/admin';

function App() {
  return (
    <div>
    	<Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;


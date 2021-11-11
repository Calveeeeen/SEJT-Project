import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Routes>
       </div>
    </Router>
  );
}

export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import Services from './Services';
import AboutUsPage from './AboutUsPage';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/services"  element={<Services/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/about" element={<AboutUsPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

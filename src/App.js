// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import Services from './Services';
import AboutUsPage from './AboutUsPage';
import Footer from './Footer';
import Book from './Book';
import ContactUs from './ContactUs';
import Menu from './Menu';


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
          <Route path="/book" element={<Book/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

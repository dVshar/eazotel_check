import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import AuthContext from "../context/AuthProvider.js";
import Logo from '../assets/logo.png'

import '../style/AuthNav.css';

const AuthNav = () => {
  const [click, setClick] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const handleOnClick = () => {
    setClick(!click);
  };

  const handleMenuClick = () => {
    setClick(!click);
  };

  const handleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
    navigate('/');
  };

  const handlePasswordChange = () => {
    navigate('/resetpassword');
  };

  return (
      <div className="shadow shadow-bottom header">
      <div>
        <li>
          <Link to="/">
            <h1 className="logo">
            <img
                src={Logo}
                height="35"
                width="35"
                alt="Ez Logo"
                loading="lazy"/>
            </h1>
          </Link>
        </li>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={handleMenuClick}>
          <Link to="/">Home</Link>
        </li>
        
        
        <li onClick={handleMenuClick}>
          <Link to="/services">Services</Link>
        </li>
        
        <li onClick={handleMenuClick}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={()=>setClick(!click)}>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li onClick={handleMenuClick}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li onClick={handleMenuClick}>
          <a href="https://wa.me/919119059286">Support</a>
        </li>
        <div className="profile-icon" onClick={handleProfileDropdown}>
        <CgProfile size="30" style={{ color: "#ffffff" }} />
        {profileDropdown && (
          <ul className="profile-dropdown p-3 bg-dark">
            <li>
              <Link className='text-light' to="/setting">Setting</Link>
            </li>
            <li>
            <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        )}
      </div>
      </ul>
      <div className="hamburger " onClick={handleOnClick}>
        {click ? (
          <FaTimes size="30" style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size="30" style={{ color: "#ffffff" }} />
        )}
      </div>
      
    </div>
  );
};

export default AuthNav;

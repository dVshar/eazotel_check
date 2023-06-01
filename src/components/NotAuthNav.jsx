import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import '../style/NotAuthNav.css'
import { set } from 'react-hook-form'
import Logo from '../assets/logo.png'

const Header = () => {

  const navigate= useNavigate();

  const handleLogin=()=>{
    navigate('/login')
  }

  const [click, setClick]=useState(false);
  const handleOnClick=()=>setClick(!click);


  const [color,setColor]=useState(false);
  const changeColor=()=>{
      if(window.scrollY>=100){
          setColor(true);
      }
      else{
          setColor(false);
      }
  };

  window.addEventListener("scroll",changeColor)

  return (
   
        <div className="container">
            <div className={color ? "header header-bg":"header"}>
    
    <div>
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
    </div>
    
    <ul className={click ? "nav-menu active" : "nav-menu"} >
        <li onClick={()=>setClick(!click)}>
            <Link to="/">Home</Link>
        </li>
        <li onClick={()=>setClick(!click)}>
            <Link to="/services">Features</Link>
        </li>

        <li onClick={()=>setClick(!click)}>
            <Link to="/about">About</Link>
        </li>

        <li onClick={()=>setClick(!click)}>
            <Link to="/contact">Contact Us</Link>
        </li>
        <li onClick={()=>setClick(!click)}>
            <Link to="/dashboard">Dashboard</Link>
        </li>
        
        <li onClick={()=>setClick(!click)}>
            <a href='https://wa.me/919119059286'>Support</a>
        </li>        
        
        <button style={{backgroundColor:"#ff4500"}} className=' loginContainer border-0 ' onClick={()=>setClick(!click)} ><Link to='/login' activeClassName='active' className='loginButton' >Log In</Link></button>

      
    </ul>
    <div className='hamburger' onClick={handleOnClick}>
    {click ?(<FaTimes size="30" style={{color:"#ffffff"}}/>
    ) : (
        <FaBars size="30" style={{color:"#ffffff"}}/>
    )}
    </div>
    </div>
        </div>
  )
}

export default Header
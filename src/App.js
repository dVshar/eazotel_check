import React,{useEffect,useContext} from "react";
import {Route,Routes,useLocation} from 'react-router-dom';
import NotAuthNav from "./components/NotAuthNav";
import Home from "./components/Home";
import RegistrationForm from "./components/Registration";
import Login from "./components/Login";
import AuthNav from "./components/AuthNav";
import ResetPassword from "./components/ResetPassword";
import AuthContext from "./context/AuthProvider.js";
import AuthHome from "./components/AuthHome";
import OtpPage from '../src/components/OtpPage'
import Test from '../src/components/Test'
import Dashboard from '../src/pages/Dashboard'
import CongratsModal from './components/CongratulationModal'
import './App.css'
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import { Helmet } from "react-helmet";



function App() {
  
  // Context-> Auth Provider.js 
  const { auth, setAuth } = useContext(AuthContext);
  const location = useLocation();

  useEffect(()=>{
    if(localStorage.length !== 0)
    {
     setAuth(true);
    }
  },[auth,setAuth])

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Eazotel | Home';
      case '/about':
        return 'Eazotel | About';
      case '/login':
        return 'Eazotel | Login';
      case '/signup':
        return 'Eazotel | Signup';
      case '/services':
        return 'Eazotel | Services';
      case '/dashboard':
        return 'Eazotel | Dashboard';
      case '/contact':
        return 'Eazotel | Contact';
      case '/test':
        return 'Eazotel | Test';
      case '/resetpassword':
        return 'Eazotel | Reset Password';
      default:
        return 'Eazotel';
    }
  };

   return (
    <>
        <Helmet>
          <title>{getPageTitle()}</title>
        </Helmet>
       <>
        
        {auth ? <AuthNav/> : <NotAuthNav/>}
         <div style={{marginTop:"5em"}}>
        </div>
      </>
     <Routes>
       {/* {auth ? <Route path='/' element={<AuthHome/>} /> : <Route path='/' element={<Home/>} />}      
       
       <Route path='/authhome' element={<AuthHome/>} /> */}
       <Route path='/' element={<Home/>}/>
       <Route path='/resetpassword' element={<ResetPassword/>} />
       <Route path='/verification' element={<OtpPage/>} />
       <Route path='/test' element={<Test/>} />
       <Route path='/ready' element={<CongratsModal/>} />
       <Route path='/signup' element={<RegistrationForm/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/contact' element={<ContactUs/>} />
       <Route path='/services' element={<Services/>} />
       <Route path="/templates" element={<AuthHome/>} />
     </Routes>
     <Footer/>
    </>       
  );
}

export default App;

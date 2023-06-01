import React, { useContext } from 'react'
import '../style/Banner.css'
import HomeImg from '../assets/img1.jpg'
import AuthContext from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
const Banner = () => {

  const {auth,setAuth} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleOnClick=()=>{
    if(auth){
      navigate("/test")
    }
    else{
      navigate("/login")
    }
  }

  return (

    <div className='banner'>
            <div className='container content'>
                <div className='left-content'>
                <h1 className='text-muted'>Build your Website<br />
                  in just 40 sec.</h1>
                    <h2 className='text-warning mt2'>Transform Your Workflow with our Integrated Dashboard 
                    and Inspiring Templates.
                    </h2>
                    
                    {auth ? (
                      <button className='btn-getstarted mt-4' onClick={handleOnClick}>Create your website</button>

                      ) : (
                      <button className='btn-getstarted mt-4' onClick={handleOnClick}>Generate your website</button>

                      )}
                    <h5 className='text-warning mt-2'>Unleash Seamless Efficiency 
                    and Achieve Stunning Results.</h5>
                </div>
                <div className='right-content'>
                    <img src={HomeImg} alt='Content img here'/>
                </div>
            </div>
            
            
    </div>
  )
}

export default Banner
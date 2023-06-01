import React from 'react';
import AboutImg from '../assets/img3.png'

const About = () => {
  return (
    <div className="container pt-4 mt-5">
      <h1 className="pt-4 pb-4">About Eazotel</h1>
      <div className="row m-1 mt-4">
        <div className="col-lg-6">
            <div className="w-100 h-100">
            <img
              src={AboutImg}
              alt="Company Logo"
              className="rounded img-fluid w-100 h-100"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className='mt-2'>Our Story</h2>
          <p style={{fontSize:"1.1rem"}}>
          At our website, we offer a seamless integration experience 
          along with a comprehensive dashboard and a wide range of 
          professionally designed templates. We understand the importance
           of providing you with a {`(UFI)`} user-friendly interface that 
           allows you to effortlessly manage your tasks and projects.
          </p>
          <p style={{fontSize:"1.1rem"}}>
          Our integrated dashboard empowers you to access all the tools
          and features you need in one centralized location. From managing
           your data to analyzing key metrics, our dashboard provides 
           real-time insights and actionable information to drive your success.
          </p>
          <p style={{fontSize:"1.1rem"}}>
          With our website, you can elevate your productivity, 
          streamline your workflow, and deliver impressive results. 
          Experience the convenience of integration and the power of 
          professionally designed templates in just a few clicks.
          </p>
          <p style={{fontSize:"1.1rem"}}>
          Join us now and unlock the potential of our integrated platform. 
          Start creating, collaborating, and achieving your goals with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

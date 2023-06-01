import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../style/Home.css'
import { AiOutlineDown, AiFillGift } from 'react-icons/ai'
import axios from 'axios';
import Chatbot from './Chatbot';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../style/React-card-carousal.css'
import Banner from './Banner'
import AuthNav from './AuthNav'
import NotauthNav from './NotAuthNav'
import Service from './Service'
import About from './About'
import Tweet from './Tweet'
const api_id = '232e49032846b11960eab70af9dd8899';

const Home = () => {

  const [weatherData, setWeatherData] = useState({
    sys: { country: 'IN' },
    weather: [{
      description: "broken clouds",
      icon: "04d"
    }],
    main: { temp: 35 }
  });
  const [location, setLocation] = useState('');
  const [active, setActive] = useState(false);

  const handledropdown = () => {
    setActive(!active);
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        let lat, lon;
        if (location && location.trim() !== '') {
          // Use the stored location if it exists and is not empty
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=232e49032846b11960eab70af9dd8899&units=metric`
          );
          lat = response.data.coord.lat;
          lon = response.data.coord.lon;
        }
        else {
          // Get the user's current location
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          lat = position.coords.latitude;
          lon = position.coords.longitude;

          // Use the API location as the default location
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=232e49032846b11960eab70af9dd8899&units=metric`
          );
          setLocation(response.data.name);
        }
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=232e49032846b11960eab70af9dd8899&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
    console.log(weatherData);
  }, [location]);


  return (
    <div>
      <Banner />

      <Chatbot />

      {/* Promotional container code */}
      {/* 
      <div className="promotion-wrapper">
        <a onClick={handledropdown} className='promo-btn'>
          <span className='promo-text'>Offers </span>
          <div style={{ 'display': 'flex' }}>
            <span className='promo-text' style={{ 'margin-right': '14px', 'font-size': '20px', 'transform': 'rotate(90deg)' }}  ><AiFillGift /> </span>
            <span className={active ? 'transform-promo-close' : 'promo-close'}>
              <i> <AiOutlineDown /> </i>
            </span>
          </div>
        </a>
        <div className={active ? "promo-div" : "invisible"}>
          <Carousel autoPlay showThumbs={false} infiniteLoop interval={3000}>
            <div className="promo-details">
              <p className='promo-paragraph' > Special Offer 1 </p>
              <p className='promo-paragraph'> Grab this offer at any time just come here and get this amazing deal. </p>
            </div>
            <div className="promo-details">
              <p className='promo-paragraph'> Special Offer 2 </p>
              <p className='promo-paragraph'> Grab this offer at any time just come here and get this amazing deal. </p>
            </div>
            <div className="promo-details">
              <p className='promo-paragraph'> Special Offer 3 </p>
              <p className='promo-paragraph'> Grab this offer at any time just come here and get this amazing deal. </p>
            </div>
          </Carousel>
        </div>
      </div> */}


      {/* weather container code */}


      {/* <div className="weather-wrapper">
        <div className="weather-div">
          <div className="" >
            <img id='weather-icon' src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          </div>
          <div className="weather-details">
            <section>{weatherData.main.temp} °C</section>
            <section>{weatherData.weather[0].description}</section>
            <section>{weatherData.name}</section>
          </div>
        </div>
      </div> */}


      <div className='home-card1 mt-5 pb-2'>
        <Container  >
          <Row>
            <Col xs={12} >
              <div className='home-card1-row1-div' >
                <h1 className="pb-4">
                  One platform
                  infinite <br /> possibilities
                </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={4}> <div className="home-card1-row2-div">

              <div id='home-hr' />
              <h4>Unlimited creation</h4>
              <section className='home-card1-row2-div-section' >Create a website with a complete suite of advanced functionalities and bring your vision to life.</section>
            </div>
            </Col>

            <Col xs={12} sm={12} md={4}><div className="home-card1-row2-div">

              <div id='home-hr' />
              <h4>Powerful infrastructure</h4>
              <section className='home-card1-row2-div-section'>Get an enterprise-grade foundation, engineered for your limitless scalability and peace of mind.</section>
            </div>
            </Col>

            <Col xs={12} sm={12} md={4}><div className="home-card1-row2-div">

              <div id='home-hr' />
              <h4>The place for growth</h4>
              <section className='home-card1-row2-div-section'>Convert and scale seamlessly with built-in marketing and business solutions.</section>
            </div>
            </Col>
          </Row>

          <Row> <div id="home-card1-row2-div3">
            <Button id='nav-btn2' >Get Started</Button></div>
          </Row>

        </Container>

      </div>
      {/* Aboutpage */}

      <About />

      {/* carousal */}

      <Service />

      {/* Tweet Card */}
      {/* <Tweet/> */}
      {/* <div id='home-card3'>
        <Container>

          <div id="home-card3-div-title">
            <section>
              Take your business where it needs to go
            </section>
          </div>

          <Row id='row-gap'>
            <Col className='home-card3-col' lg={6}>
              <div className='home-card3-div'>

                <img className="home-card3-img-div" src="https://static.wixstatic.com/media/0784b1_d9e692b9c6d04f6c9a02af740c8e29db~mv2.jpg/v1/fill/w_563,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Online%20shop%20-%20image.jpg" />

                <div className="home-card3-details-div">
                  <div className='details-heading'> eCommerce </div>
                  <div className='details-desrp'> Sell online and manage your business with powerful eCommerce solutions.</div>
                </div>
              </div>
            </Col>
            <Col className='home-card3-col' lg={6}>
              <div className='home-card3-div'>
                <img className="home-card3-img-div" src="https://static.wixstatic.com/media/0784b1_d98f3b72879248c8801212b43b2f7e73~mv2.jpg/v1/fill/w_563,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f-1.jpg" />

                <div className="home-card3-details-div">
                  <div className='details-heading'> Blog </div>
                  <div className='details-desrp'> Create a free blog, grow a loyal audience and monetize your content.</div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>


      <div id='home-card2'>
        <Container>
          <Row id='row-direction-change'>

            <Col md={12} lg={6}>
              <div id='home-card2-data-div'>
                <h1> Build more than a website</h1>
                <p> Design and simplicity are at the core of our website builder. Easily create, customize, and promote a stunning website that's search engine ready all on your own with the power of Ezotal’s platform.</p>
                <div id='home-card2-btn-div'>
                  <Button id='home-card2-btn' variant="warning">Get Started</Button>
                </div>
              </div>
            </Col>

            <Col md={12} lg={6} >
              <div id='home-card2-imagediv'>
                <img src="https://eep.io/images/yzco4xsimv0y/1jLvkI1ssXliXkyATh9h5D/3765c84774f2dae75d78ded45b5e26f8/AUI_Website-Builder_01-Hero.png?w=1520&fm=webp&q=70" />
              </div>
            </Col>



          </Row>
        </Container>
      </div> */}

      {/* <Footer /> */}
    </div>
  )
}

export default Home

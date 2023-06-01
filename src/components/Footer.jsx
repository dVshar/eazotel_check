import React from 'react'
import '../style/Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
   
    <div className='bg-dark'>
        <div className='footer'>
        <div className=" container footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/">Web design</a></li>
                            <li><a href="/">Development</a></li>
                            <li><a href="/">Hosting</a></li>
                            <li><a href="/">Hotel Website</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/">Company</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="/">Job openings</a></li>
                            <li><a href="/">Hiring</a></li>
                            <li><a href="/">Employee success</a></li>
                            <li><a href="/">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social">
                        <a href="https://www.linkedin.com/company/fielmente/" target="_blank" rel="noopener noreferrer"><FaFacebook size={40} style={{marginBottom:"8px"}}/></a>
                        <a href="https://www.linkedin.com/company/fielmente/" target="_blank" rel="noopener noreferrer"><FaTwitter size={40} style={{marginBottom:"8px"}}/></a>
                        <a href="https://www.linkedin.com/company/fielmente/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} style={{marginBottom:"8px"}}/> </a>
                        <a href="https://www.linkedin.com/company/fielmente/" target="_blank" rel="noopener noreferrer"><FaInstagram size={40} style={{marginBottom:"8px"}}/></a>
                        <p className="copyright">Eazotel © 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        </div>

    </div>
    </div>
  )
}

export default Footer

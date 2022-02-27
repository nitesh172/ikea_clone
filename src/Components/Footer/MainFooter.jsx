import React from 'react';
import {Link} from 'react-router-dom'
import './MainFooter.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


export const MainFooter = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__info">
                    <h3>Join IKEA Family</h3>
                    <p>
                    Get exclusive offers, inspiration, and lots more to help bring your ideas to life. 
                    All for free.
                    </p>
                    <Link to="/login" className="footer__infoLink">
                        <button className="footer_btn">Join us</button>
                    </Link>
                </div>
                <div className="footer__infoList">
                    <ul>


                     <li className="footer__infoLi">
                     <h5>IKEA Family</h5>
                     <div className="footer__infoLinks">
                        <a>Log in</a>
                        <a>join IKEA Family</a>
                        <a>Member offers</a>
                        <a>Workshop & Events</a>
                        
                     </div>
                     </li>

                     
                     
                      
                        <li className="footer__infoLi">
                            <h5 className="footer__infoListTitle"> Services</h5>
                            <div className="footer__infoLinks">
                                <a>Design your room</a>
                                <a>Delivery service</a>
                                <a>My orders</a>
                                <a>Returns &amp; claims</a>
                                <a>Delivery</a>
                                <a>Stock information</a>
                                <a>Kitchen Planning</a>
                                <a>Recalls</a>
                                <a>Personal advice</a>
                                <a>Track your orders</a>
                            </div>
                        </li>
                       

                        <li className="footer__infoLi">
                            <h5>Shopping at IKEA</h5>
                            <div className="footer__infoLinks">
                                <a>Opening hours</a>
                                <a>All stores</a>
                                <a>Offers</a>
                                <a>Restaurant</a>
                                <a>Swedish Food Market</a>
                                <a>IKEA App</a>
                                <a>Gift card</a>
                            </div>
                        </li>

                        <li className="footer__infoLi">
                        <h5>About IKEA</h5>
                        <div className="footer__infoLinks">
                       
                       <a>This is IKEA</a>
                       <a>Working at IKEA</a>
                       <a>Newsroom</a>
                       <a>Sustainability</a>
                       <a>Ideas</a>
                       <a>IKEA stores</a>
                       <a>IKEA Restaurant</a>
                       <a>IKEA for Business</a>
                         </div>
                       </li>
                       
                    </ul>
                </div>
               
            </div>
            <div className="footer__social">
                <div className="footer__links">
                    <div className="footer__socialIcons">
                        <FacebookRoundedIcon fontSize="large" className='social'/>
                    </div>

                    <div className="footer__socialIcons">
                        <InstagramIcon fontSize="large" className='social'/>
                    </div>

                    <div className="footer__socialIcons">
                         <TwitterIcon fontSize="large" className='social'/>
                    </div>
                   
                    <div className="footer__socialIcons">
                         <YouTubeIcon fontSize="large" className='social'/>
                    </div>
                </div>

                <div className="footer__buttons">
                    <button>
                        
                        <p className="button__name"> Change country</p>
                    </button>
                    
                </div>
                

            </div>
            <hr className="footer__line"/>
            <div className="footer__bottom">
                <p>&copy; Inter IKEA Systems B.V. 2000-2022</p>
                <div className="footer__bottomTags">
                    <a>Privacy policy</a>
                    <a>Cookie policy</a>
                    <a>Cookie settings</a>
                    <a>Terms and conditions</a>
                   
                </div>
            </div>
        </div>
    )
}


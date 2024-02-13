import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.svg';
import BigBtnArrow from '../../Images/big-btn-arrow.svg';
import TwitterIcon from '../../Images/twitter-icon.svg';
import InstaIcon from '../../Images/insta-icon.svg';
import LinkedinIcon from '../../Images/in-icon.svg';
import BeIcon from '../../Images/be-icon.svg';
import DribbleIcon from '../../Images/dribble-icon.svg';
import './style.css'
import MainHeader from './MainHeader';
import FooterMenuList from './FooterMenuList';

let quickLinks={
    heading:'Quick Links',
    menuList:[
        {title:"About Us",link:"/"},
        {title:"Pricing Table",link:"/"},
        {title:"Contact Us",link:"/"},
        {title:"Meet Our Team",link:"/"},
        {title:"Latest News",link:"/"},
    ]
}

let companyLinks={
    heading:'Company',
    menuList:[
        {title:"Case Studies",link:"/"},
        {title:"FAQ’s",link:"/"},
        {title:"Services",link:"/"},
        {title:"Customer Support",link:"/"},
    ]
}

let legalLinks={
    heading:'Legal',
    menuList:[
        {title:"Privacy Policy",link:"/"},
        {title:"Terms of Use",link:"/"},
    ]
}


const FooterComponent = () => {
    
    return (
        <>
            {/* <section className='cta-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cta-wrap text-center'>
                                <span>TELL US ABOUT YOUR PROJECT</span>
                                <h2>Let’s Make Something<br />Great Together!</h2>
                                <Link to={"/"} className="big-btn">Contact Us<img src={BigBtnArrow}></img></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <MainHeader title={`Let’s Make Something<br />Great Together!`} btnText={'Contact Us'} btnLink={"/"}/>

            <footer className='footer-section'>
                <div className='container'>
                    <div className='footer-top'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='ft-row'>
                                    <div className='ft-box ft-logo-outer'>
                                        <div className='footer-logo'>
                                            <Link to={"/"}>
                                                <img src={Logo}></img>
                                            </Link>
                                        </div>
                                        <div className='footer-socials'>
                                            <ul>
                                                <li>
                                                    <Link to={"/"}>
                                                        <img src={TwitterIcon}></img>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/"}>
                                                        <img src={InstaIcon}></img>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/"}>
                                                        <img src={LinkedinIcon}></img>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/"}>
                                                        <img src={BeIcon}></img>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/"}>
                                                        <img src={DribbleIcon}></img>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <FooterMenuList footerContent={quickLinks} />
                                    <FooterMenuList footerContent={companyLinks} />
                                    <FooterMenuList footerContent={legalLinks} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p> © 2023 Web Olympus. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;

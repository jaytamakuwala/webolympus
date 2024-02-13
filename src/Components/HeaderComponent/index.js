import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.svg';
import LogoBlack from '../../Images/logo-black.svg';
import BtnArrow from '../../Images/btn-arrow.svg';
import Close from '../../Images/close.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
const HeaderComponent = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-3 col-8'>
                            <div className='header-logo'>
                                <Link to={"/"}>
                                    <img src={Logo}></img>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-6 col-4'>
                            <div className='header-menu'>
                                <Navbar expand="lg" className="p-0 justify-content-end">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav"><img src={Close}></img></Navbar.Toggle>
                                        <Nav className="mx-auto">
                                            <div className='menu-logo d-lg-none'>
                                                <Link to={"/"}>
                                                    <img src={LogoBlack}></img>
                                                </Link>
                                            </div>
                                            <Link to={"/"}>SERVICES</Link>
                                            <Link to={"/"}>PORTFOLIO</Link>
                                            <Link to={"/"}>ABOUT US</Link>
                                            <Link className='d-lg-none' to={"/"}>CONTACT US</Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </div>
                        </div>
                        <div className='col-lg-3 text-end d-lg-block d-none'>
                            <Link className='common-button' to={"/"}>
                                CONTACT US
                                <img src={BtnArrow}></img>
                            </Link>
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default HeaderComponent;

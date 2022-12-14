import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import themeContext from '../../Context/Context';

function Header(props) {
    const theme = useContext(themeContext)
    
    console.log(theme.theme)
    return (
        <div className="main-header">
            <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <button onClick={()=>
                    {theme.toogle_theme(theme.theme)}}>
                            change theme
                    </button>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                      
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                {/* <a className="nav-link scrollto active" href="index.html">Home</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/departments.html">Departments</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/departments"}>Department</NavLink>

                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/doctors.html">Doctors</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/doctors"} >Doctors</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto " href="./pages/about.html">About</a> */}
                                <NavLink exact className="nav-link scrollto " to={"/about"} >About</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/contect"} >Contect </NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/medisin"} >medisin </NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* <a href="./pages/appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</a> */}
                    <NavLink to={"/bookappointment"} className="appointment-btn scrollto">makeanappointment</NavLink>

                    <a href="#" className="appointment-btn scrollto">
                        <NavLink to={"/login"} className="appointment-btn scrollto">Login/signup</NavLink>
                        {/* <span className="d-none d-md-inline">Login/ Signup</span> */}

                    </a>

                </div>
            </header>
        </div>

    );
}

export default Header;
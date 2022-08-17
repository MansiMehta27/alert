import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import Alert from '../Alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../Redux/Action/auth.action';

function Header(props) {
    const theme = useContext(ThemeContext)
    console.log(theme.theme);

    let auth = useSelector(state => state.auth)
    console.log(auth);

    const dispatch = useDispatch()

    const hendallogout = () => {
        dispatch(logoutAction())
    }
    return (
        <div className="main-header">
            <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <button onClick={() => { theme.toogle_theme(theme.theme) }}>
                        Change Theme
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
                                <NavLink exact className="nav-link scrollto" to={"/departments"}>Departments</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/doctors.html">Doctors</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/doctors"}>Doctors</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/about.html">About</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/contact"}>Contact</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/medicine"}>Medicine</NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* <a href="./pages/appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</a> */}
                    <NavLink exact to={"/bookappointment"} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make An</span> Appointment</NavLink>
                    {/* <a href="#" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </a> */}
                    {
                        auth.user === null ?
                            <NavLink to={"/login"} className="appointment-btn scrollto">
                                <span className="d-none d-md-inline">Login/ Signup</span>
                            </NavLink>
                        :
                            <NavLink onClick={() => hendallogout()} to={"/login"} className="appointment-btn scrollto">
                                <span className="d-none d-md-inline">Logout</span>
                            </NavLink>
                    }
                    <Alert />
                </div>
            </header>
        </div>

    );
}

export default Header;
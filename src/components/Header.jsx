
import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import Logo from '../../public/assets/img/logo/logo-light.png'
const Header = () => {
    // const [isSearchActive, setIsSearchActive] = useState(false);
    // useEffect(() => {
    //     if (isSearchActive) {
    //     document.body.classList.add('search-active');
    //     } else {
    //     document.body.classList.remove('search-active');
    //     }

    //     // cleanup
    //     return () => {
    //     document.body.classList.remove('search-active');
    //     };
    // }, [isSearchActive]);
    const [isSearchActive, setIsSearchActive] = useState(false);

    useEffect(() => {
        if (isSearchActive) {
            document.body.classList.add('search-active');
        }else{
            document.body.classList.remove('search-active');
        }

        return () => {
            document.body.classList.remove('search-active')
        };
    }, [isSearchActive])


    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrap">
                        <div className="header-top-left">
                            <div className="header-top-social">
                                <span>Follow Us: </span>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className="header-top-right">
                            <div className="header-top-contact">
                                <ul>
                                    <li>
                                        <a href="#"><i className="far fa-location-dot"></i> 25/B Milford Road, New York</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@example.com"><i className="far fa-envelopes"></i> info@example.com</a>
                                    </li>
                                    <li>
                                        <a href="tel:+21236547898"><i className="far fa-phone-volume"></i> +2 123 654 7898</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container position-relative">
                        <Link className="navbar-brand" to="/">
                            <img src="assets/img/logo/logo.png" alt="logo" />
                        </Link>
                        <div className="mobile-menu-right">
                            <div className="search-btn">
                                <button type="button" className="nav-right-link search-box-outer"><i
                                        className="far fa-search"></i></button>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-mobile-icon"><i className="far fa-bars"></i></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown">Home</a>
                                    <ul className="dropdown-menu fade-down">
                                        <li><a className="dropdown-item" href="index.html">Home Page 01</a></li>
                                        <li><a className="dropdown-item" href="index-2.html">Home Page 02</a></li>
                                        <li><a className="dropdown-item" href="index-3.html">Home Page 03</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">About Us</Link>
                                    <ul className="dropdown-menu fade-down">
                                        <li><Link className="dropdown-item" to="/">Founder and CEO</Link></li>
                                        <li><Link className="dropdown-item" to="/terms-and-conditions">Terms & Conditions</Link></li>
                                        <li><Link className="dropdown-item" to="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link className="dropdown-item" to="/who-we-are">Who We Are?</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item mega-menu dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Academics</a>
                                    <div className="dropdown-menu fade-down">
                                        <div className="mega-content">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-12 col-sm-4 col-md-3">
                                                        <h5>About Us</h5>
                                                        <div className="menu-about">
                                                            <Link to="/" className="menu-about-logo">
                                                                <img src={Logo} alt="site logo" />
                                                            </Link>
                                                            <p>
                                                                We are many variations of passages available but the majority
                                                                have suffered alteration in some form by injected humour
                                                                words injected humour believable.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-4 col-md-3">
                                                        <h5>Kids Section</h5>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <Link className="dropdown-item" to="/course-single">
                                                                    Kids Level 1 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/course-single">
                                                                    Kids Level 2 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/course-single">
                                                                    Kids Level 3 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/course-single">
                                                                    Kids Level 4 (Online)
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-sm-4 col-md-3">
                                                        <h5>Basic Section</h5>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <Link 
                                                                    className="dropdown-item"
                                                                    to="/course-single"
                                                                >
                                                                    Basic Level 1 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    className="dropdown-item"
                                                                    to="/course-single"
                                                                >
                                                                    Basic Level 2 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    className="dropdown-item"
                                                                    to="/course-single"
                                                                >
                                                                    Basic Level 3 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    className="dropdown-item"
                                                                    to="/course-single"
                                                                >
                                                                    Basic Level 4 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    className="dropdown-item"
                                                                    to="/course-single"
                                                                >
                                                                    Basic Level 5 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    className="dropdown-item"
                                                                    to="/course-single"
                                                                >
                                                                    Basic Level 6 (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link 
                                                                    className="dropdown-item"
                                                                    to="/course-single"
                                                                >
                                                                    Basic Level 7 (Online)
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-3">
                                                        <h5>Teen Section</h5>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <Link className="dropdown-item" to="/course-single">
                                                                    Pre 0 Level (Online)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/course-single">
                                                                    O-Level Grade 10 (Online) 
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/course-single">
                                                                    AS Level
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                                    <ul className="dropdown-menu fade-down">
                                        <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                        <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Events</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="event.html">Events</a></li>
                                                <li><a className="dropdown-item" href="event-single.html">Event Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Portfolio</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="portfolio.html">Portfolio</a></li>
                                                <li><a className="dropdown-item" href="portfolio-single.html">Portfolio
                                                        Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Teachers</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="teacher.html">Teachers One</a></li>
                                                <li><a className="dropdown-item" href="teacher-2.html">Teachers Two</a></li>
                                                <li><a className="dropdown-item" href="teacher-single.html">Teachers Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="gallery.html">Gallery</a></li>
                                        <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="login.html">Login</a></li>
                                                <li><a className="dropdown-item" href="register.html">Register</a></li>
                                                <li><a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="pricing.html">Pricing Plan</a></li>
                                        <li><a className="dropdown-item" href="faq.html">Faq</a></li>
                                        <li><a className="dropdown-item" href="testimonial.html">Testimonials</a></li>
                                        <li><a className="dropdown-item" href="404.html">404 Error</a></li>
                                        <li><a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                        <li><a className="dropdown-item" href="terms.html">Terms Of Service</a></li>
                                        <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">Admissions</Link>
                                    <ul className="dropdown-menu fade-down">
                                        <li><Link className="dropdown-item" to="/application-form">Application Form</Link></li>
                                        <li><Link className="dropdown-item" to="/courses">Courses</Link></li>
                                        <li><Link className="dropdown-item" to="/how-to-apply">How To Apply</Link></li>
                                        {/* <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Our Campus</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="campus-tour.html">Campus Tour</a></li>
                                                <li><a className="dropdown-item" href="campus-life.html">Campus Life</a></li>
                                                <li><a className="dropdown-item" href="notice-board.html">Notice Board</a></li>
                                                <li><a className="dropdown-item" href="student-activities.html">Student
                                                        Activities</a></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Our Facilities</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="facility.html">Facilities</a></li>
                                                <li><a className="dropdown-item" href="facility-single.html">Facility Single</a>
                                                </li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Our Research</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="research.html">Research</a></li>
                                                <li><a className="dropdown-item" href="research-single.html">Research Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a className="dropdown-item dropdown-toggle" href="#">Our Clubs</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="club.html">Our Clubs</a></li>
                                                <li><a className="dropdown-item" href="club-single.html">Club Single</a></li>
                                            </ul>
                                        </li> */}
                                        <li><Link className="dropdown-item" to="/scholarship">Scholarships</Link></li>
                                        <li><Link className="dropdown-item" to="/tuition-fee">Tuition Fees</Link></li>
                                        
                                        {/* <li><a className="dropdown-item" href="our-fund.html">Our Fund</a></li>
                                        <li><a className="dropdown-item" href="athletics.html">Athletics</a></li>
                                        <li><a className="dropdown-item" href="health-care.html">Health Care</a></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">Registration</Link>
                                    <ul className="dropdown-menu fade-down">
                                        <li><Link className="dropdown-item" to="/registration">IGCSE Cambridge</Link></li>
                                        <li><Link className="dropdown-item" to="/registration">As Level Registration</Link></li>
                                        <li><Link className="dropdown-item" to="/registration">Registration To Be a Teacher</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                            <div className="nav-right">
                                <div className="search-btn">
                                    {/* <button type="button" className="nav-right-link search-box-outer" onClick={() => setIsSearchActive(true)}><i
                                            className="far fa-search"></i></button> */}
                                    <button 
                                        type="button" 
                                        className="nav-right-link search-box-outer"
                                        onClick={() => setIsSearchActive(true)}
                                    >
                                        <i className="far fa-search"></i>
                                    </button>

                                    {/* popup search */}
                                    {isSearchActive && (
                                        <div className="search-popup">
                                            <button 
                                                className="close-search"
                                                onClick={() => setIsSearchActive(false)}
                                            >
                                                <span className="far fa-times"></span>
                                            </button>
                                            <form action="#">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Search Here..." required />
                                                    <button type="submit"><i className="far fa-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    )}

                                </div>
                                <div className="nav-right-btn mt-2">
                                    <Link to="/login" className="theme-btn">
                                        <span className="fal fa-pencil"></span>Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
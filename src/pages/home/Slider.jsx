import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider1 from "../../../public/assets/img/slider/slider1.jpg"
import Slider2 from "../../../public/assets/img/slider/slider2.jpg"
import Slider3 from "../../../public/assets/img/slider/slider3.jpg"
const Slider = () => {
    // hero slider
    const options = {
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
        "<i class='far fa-long-arrow-left'></i>",
        "<i class='far fa-long-arrow-right'></i>"
        ],
    };
    return (
        <div className="hero-section">
            <OwlCarousel className="hero-slider owl-carousel owl-theme" {...options}>
                <div className="hero-single" style={{ backgroundImage: `url(${Slider1})` }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-7">
                                <div className="hero-content">
                                    <h6 className="hero-sub-title" data-animation="fadeInDown" data-delay=".25s">
                                        <i className="far fa-book-open-reader"></i>Welcome To Eduka!
                                    </h6>
                                    <h1 className="hero-title" data-animation="fadeInRight" data-delay=".50s">
                                        Start Your Beautiful And <span>Bright</span> Future
                                    </h1>
                                    <p data-animation="fadeInLeft" data-delay=".75s">
                                        There are many variations of passages orem psum available but the majority have
                                        suffered alteration in some repeat predefined chunks form
                                        injected humour.
                                    </p>
                                    <div className="hero-btn" data-animation="fadeInUp" data-delay="1s">
                                        <a href="about.html" className="theme-btn">About More<i
                                                className="fas fa-arrow-right-long"></i></a>
                                        <a href="contact.html" className="theme-btn theme-btn2">Learn More<i
                                                className="fas fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-single" style={{ backgroundImage: `url(${Slider2})` }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-7">
                                <div className="hero-content">
                                    <h6 className="hero-sub-title" data-animation="fadeInDown" data-delay=".25s">
                                        <i className="far fa-book-open-reader"></i>Welcome To Eduka!
                                    </h6>
                                    <h1 className="hero-title" data-animation="fadeInRight" data-delay=".50s">
                                        Start Your Beautiful And <span>Bright</span> Future
                                    </h1>
                                    <p data-animation="fadeInLeft" data-delay=".75s">
                                        There are many variations of passages orem psum available but the majority have
                                        suffered alteration in some repeat predefined chunks form
                                        injected humour.
                                    </p>
                                    <div className="hero-btn" data-animation="fadeInUp" data-delay="1s">
                                        <a href="about.html" className="theme-btn">About More<i
                                                className="fas fa-arrow-right-long"></i></a>
                                        <a href="contact.html" className="theme-btn theme-btn2">Learn More<i
                                                className="fas fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-single" style={{ backgroundImage: `url(${Slider3})` }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-7">
                                <div className="hero-content">
                                    <h6 className="hero-sub-title" data-animation="fadeInDown" data-delay=".25s">
                                        <i className="far fa-book-open-reader"></i>Welcome To Eduka!
                                    </h6>
                                    <h1 className="hero-title" data-animation="fadeInRight" data-delay=".50s">
                                        Start Your Beautiful And <span>Bright</span> Future
                                    </h1>
                                    <p data-animation="fadeInLeft" data-delay=".75s">
                                        There are many variations of passages orem psum available but the majority have
                                        suffered alteration in some repeat predefined chunks form
                                        injected humour.
                                    </p>
                                    <div className="hero-btn" data-animation="fadeInUp" data-delay="1s">
                                        <a href="about.html" className="theme-btn">About More<i
                                                className="fas fa-arrow-right-long"></i></a>
                                        <a href="contact.html" className="theme-btn theme-btn2">Learn More<i
                                                className="fas fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}
export default Slider
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Slider1 from "../../../public/assets/img/slider/slider1.jpg";
import Slider2 from "../../../public/assets/img/slider/slider2.jpg";
import Slider3 from "../../../public/assets/img/slider/slider3.jpg";

const Slider = () => {
    const slides = [Slider1, Slider2, Slider3];

    return (
        <div className="hero-section">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop={true}
                className="hero-slider"
            >
                {slides.map((bgImage, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero-single" style={{ backgroundImage: `url(${bgImage})` }}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 col-lg-7">
                                        <div className="hero-content">
                                            <h6 className="hero-sub-title" data-aos="fade-down">
                                                <i className="far fa-book-open-reader"></i>Welcome To Eduka!
                                            </h6>
                                            <h1 className="hero-title" data-aos="fade-right" data-aos-delay="300">
                                                Start Your Beautiful And <span>Bright</span> Future
                                            </h1>
                                            <p data-aos="fade-left" data-aos-delay="700">
                                                There are many variations of passages orem psum available but the majority have
                                                suffered alteration in some repeat predefined chunks form
                                                injected humour.
                                            </p>
                                            <div className="hero-btn" data-aos="fade-up" data-aos-delay="1000">
                                                <a href="about.html" className="theme-btn">About More<i className="fas fa-arrow-right-long"></i></a>
                                                <a href="contact.html" className="theme-btn theme-btn2">Learn More<i className="fas fa-arrow-right-long"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="swiper-button-prev">
                    <i className="far fa-long-arrow-left"></i>
                </div>
                <div className="swiper-button-next">
                    <i className="far fa-long-arrow-right"></i>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;

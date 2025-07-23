import BreadcrumbImage from '../../../public/assets/img/breadcrumb/01.jpg'
const WhoWeAre = () => {
    return (
        <main className="main">

            {/* breadcrumb */}
            {/*  */}
            <div className="site-breadcrumb" style={{ backgroundImage: `url(${BreadcrumbImage})` }}>
                <div className="container">
                    <h2 className="breadcrumb-title">Who We Are</h2>
                    <ul className="breadcrumb-menu">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">About Us</li>
                    </ul>
                </div>
            </div>
            {/* breadcrumb end */}


            {/* about area */}
            <div className="about-area py-120">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                                <div className="about-img">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <img className="img-1" src="assets/img/about/01.jpg" alt="" />
                                            <div className="about-experience mt-4">
                                                <div className="about-experience-icon">
                                                    <img src="assets/img/icon/exchange-idea.svg" alt="" />
                                                </div>
                                                <b className="text-start">30 Years Of <br/> Quality Service</b>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="img-2" src="assets/img/about/02.jpg" alt="" />
                                            <img className="img-3 mt-4" src="assets/img/about/03.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right wow fadeInRight" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> About Us</span>
                                    <h2 className="site-title">
                                        Our Edukation System <span>Inspires</span> You More.
                                    </h2>
                                </div>
                                <p className="about-text">
                                    There are many variations of passages available but the majority have suffered
                                    alteration in some form by injected humour randomised words which don't look even
                                    slightly believable. If you are going to use passage.
                                </p>
                                <div className="about-content">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="about-item">
                                                <div className="about-item-icon">
                                                    <img src="assets/img/icon/open-book.svg" alt="" />
                                                </div>
                                                <div className="about-item-content">
                                                    <h5>Edukation Services</h5>
                                                    <p>It is a long established fact that reader will to using content.</p>
                                                </div>
                                            </div>
                                            <div className="about-item">
                                                <div className="about-item-icon">
                                                    <img src="assets/img/icon/global-education.svg" alt="" />
                                                </div>
                                                <div className="about-item-content">
                                                    <h5>International Hubs</h5>
                                                    <p>It is a long established fact that reader will to using content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="about-quote">
                                                <p>It is a long established fact that a reader will be distracted by the
                                                    content of
                                                    a page when looking at its reader for the long words layout.</p>
                                                <i className="far fa-quote-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-bottom">
                                    <a href="about.html" className="theme-btn">Discover More<i
                                            className="fas fa-arrow-right-long"></i></a>
                                    <div className="about-phone">
                                        <div className="icon"><i className="fal fa-headset"></i></div>
                                        <div className="number">
                                            <span>Call Now</span>
                                            <h6><a href="tel:+21236547898">+2 123 654 7898</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}


            {/* counter area */}
            <div className="counter-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="icon">
                                    <img src="assets/img/icon/course.svg" alt="" />
                                </div>
                                <div>
                                    <span className="counter" data-count="+" data-to="500" data-speed="3000">500</span>
                                    <h6 className="title">+ Total Cources </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="icon">
                                    <img src="assets/img/icon/graduation.svg" alt="" />
                                </div>
                                <div>
                                    <span className="counter" data-count="+" data-to="1900" data-speed="3000">1900</span>
                                    <h6 className="title">+ Our Students</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="icon">
                                    <img src="assets/img/icon/teacher-2.svg" alt="" />
                                </div>
                                <div>
                                    <span className="counter" data-count="+" data-to="750" data-speed="3000">750</span>
                                    <h6 className="title">+ Skilled Lecturers</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-box">
                                <div className="icon">
                                    <img src="assets/img/icon/award.svg" alt="" />
                                </div>
                                <div>
                                    <span className="counter" data-count="+" data-to="30" data-speed="3000">30</span>
                                    <h6 className="title">+ Win Awards</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter area end */}


            {/* testimonial area */}
            <div className="testimonial-area bg py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="site-heading text-center">
                                <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Testimonials</span>
                                <h2 className="site-title">What Our Students <span>Say's</span></h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of
                                    a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider owl-carousel owl-theme">
                        <div className="testimonial-item">
                            <div className="testimonial-rate">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-quote">
                                <p>
                                    There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.
                                </p>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-author-img">
                                    <img src="assets/img/testimonial/01.jpg" alt="" />
                                </div>
                                <div className="testimonial-author-info">
                                    <h4>Anthony Nicoll</h4>
                                    <p>Student</p>
                                </div>
                            </div>
                            <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-rate">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-quote">
                                <p>
                                    There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.
                                </p>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-author-img">
                                    <img src="assets/img/testimonial/02.jpg" alt="" />
                                </div>
                                <div className="testimonial-author-info">
                                    <h4>Richard Lock</h4>
                                    <p>Student</p>
                                </div>
                            </div>
                            <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-rate">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-quote">
                                <p>
                                    There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.
                                </p>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-author-img">
                                    <img src="assets/img/testimonial/03.jpg" alt="" />
                                </div>
                                <div className="testimonial-author-info">
                                    <h4>Randal Grand</h4>
                                    <p>Student</p>
                                </div>
                            </div>
                            <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-rate">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-quote">
                                <p>
                                    There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.
                                </p>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-author-img">
                                    <img src="assets/img/testimonial/04.jpg" alt="" />
                                </div>
                                <div className="testimonial-author-info">
                                    <h4>Edward Miles</h4>
                                    <p>Student</p>
                                </div>
                            </div>
                            <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-rate">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-quote">
                                <p>
                                    There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.
                                </p>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-author-img">
                                    <img src="assets/img/testimonial/05.jpg" alt="" />
                                </div>
                                <div className="testimonial-author-info">
                                    <h4>Ninal Gordon</h4>
                                    <p>Student</p>
                                </div>
                            </div>
                            <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial area end */}


            {/* team-area */}
            <div className="team-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="site-heading text-center">
                                <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Our Teachers</span>
                                <h2 className="site-title">Meet With Our <span>Teachers</span></h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of
                                    a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                                <div className="team-img">
                                    <img src="assets/img/team/01.jpg" alt="thumb" />
                                </div>
                                <div className="team-social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                                <div className="team-content">
                                    <div className="team-bio">
                                        <h5><a href="#">Angela T. Vigil</a></h5>
                                        <span>Associate Professor</span>
                                    </div>
                                </div>
                                <span className="team-social-btn"><i className="far fa-share-nodes"></i></span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                                <div className="team-img">
                                    <img src="assets/img/team/02.jpg" alt="thumb" />
                                </div>
                                <div className="team-social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                                <div className="team-content">
                                    <div className="team-bio">
                                        <h5><a href="#">Frank A. Mitchell</a></h5>
                                        <span>Associate Professor</span>
                                    </div>
                                </div>
                                <span className="team-social-btn"><i className="far fa-share-nodes"></i></span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                                <div className="team-img">
                                    <img src="assets/img/team/03.jpg" alt="thumb" />
                                </div>
                                <div className="team-social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                                <div className="team-content">
                                    <div className="team-bio">
                                        <h5><a href="#">Susan D. Lunsford</a></h5>
                                        <span>CEO & Founder</span>
                                    </div>
                                </div>
                                <span className="team-social-btn"><i className="far fa-share-nodes"></i></span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="team-item wow fadeInUp" data-wow-delay="1s">
                                <div className="team-img">
                                    <img src="assets/img/team/04.jpg" alt="thumb" />
                                </div>
                                <div className="team-social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                                <div className="team-content">
                                    <div className="team-bio">
                                        <h5><a href="#">Dennis A. Pruitt</a></h5>
                                        <span>Associate Professor</span>
                                    </div>
                                </div>
                                <span className="team-social-btn"><i className="far fa-share-nodes"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* team-area end */}


            {/* partner area */}
            <div className="partner-area bg pt-50 pb-50">
                <div className="container">
                    <div className="partner-wrapper partner-slider owl-carousel owl-theme">
                        <img src="assets/img/partner/01.png" alt="thumb" />
                        <img src="assets/img/partner/02.png" alt="thumb" />
                        <img src="assets/img/partner/03.png" alt="thumb" />
                        <img src="assets/img/partner/04.png" alt="thumb" />
                        <img src="assets/img/partner/01.png" alt="thumb" />
                        <img src="assets/img/partner/02.png" alt="thumb" />
                        <img src="assets/img/partner/04.png" alt="thumb" />
                    </div>
                </div>
            </div>
            {/* partner area end */}

        </main>
    )
}
export default WhoWeAre
import CounterBox from "../../components/CounterBox"
import CourseCard from "../../components/CourseCard"
import FeatureCard from "../../components/FeatureCard"
import SectionTitle from "../../components/SectionTitle"
import TeamCard from "../../components/TeamCard"
import Video from "../../components/Video"
import AboutUsSec from "./AboutUsSec"
import BlogArea from "./BlogArea"
import ChooseArea from "./ChooseArea"
import DepartmentArea from "./DepartmentArea"
import Enrollment from "./Enrollment"
import Events from "./Events"
import GalleryArea from "./GalleryArea"
import Slider from "./Slider"
import TestimonialArea from "./TestimonialArea"

import Image1 from '../../../public/assets/img/course/01.jpg'
import Image2 from '../../../public/assets/img/course/02.jpg'
import Image3 from '../../../public/assets/img/course/03.jpg'
import Image4 from '../../../public/assets/img/course/04.jpg'
import Image5 from '../../../public/assets/img/course/05.jpg'
import Image6 from '../../../public/assets/img/course/06.jpg'

const data = [
    {
        title: "Acting And Drama",
        image: Image1,
        tag: "Art",
        lessons: 10,
        rating: 1,
        description: "Learn the art of acting and drama.",
        seats: 30,
        duration: 2,
        price: 199
        },
    {
        title: "Music Theory",
        image: Image2,
        tag: "Music",
        lessons: 8,
        rating: 3.5,
        description: "Understand the fundamentals of music theory.",
        seats: 25,
        duration: 1,
        price: 149
    },
    {
        title: "Advanced Mathematics",
        image: Image3,
        tag: "Math",
        lessons: 12,
        rating: 4.8,
        description: "Dive deep into advanced mathematical concepts.",
        seats: 20,
        duration: 3,
        price: 299
    },
    {
        title: "Introduction to Psychology",
        image: Image4,
        tag: "Psychology",
        lessons: 10,
        rating: 4.6,
        description: "Explore the fundamentals of psychology.",
        seats: 30,
        duration: 2,
        price: 199
    },
    {
        title: "Web Development",
        image: Image5,
        tag: "Technology",
        lessons: 15,
        rating: 4.7,
        description: "Learn how to build modern websites.",
        seats: 40,
        duration: 4,
        price: 249
    },
    {
        title: "Graphic Design",
        image: Image6,
        tag: "Design",
        lessons: 10,
        rating: 4.5,
        description: "Master the principles of graphic design.",
        seats: 35,
        duration: 2,
        price: 179
    }   
]

// import React, { useEffect, useState } from "react";
const Home = () => {


    return (
        <main className="main">
            <Slider />
            {/* feature area */}
            <div className="feature-area fa-negative">
                <div className="col-xl-9 ms-auto">
                    <div className="feature-wrapper">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <FeatureCard />
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <FeatureCard />
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <FeatureCard />
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <FeatureCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature area end */}


            {/* about area */}
            <AboutUsSec />
            {/* about area end */}


            {/* counter area */}
            <div className="counter-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <CounterBox />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <CounterBox />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <CounterBox />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <CounterBox />
                        </div>
                    </div>
                </div>
            </div>
            {/* counter area end */}


            {/* course-area */}
            <div className="course-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <SectionTitle
                                title="Let's Check Our"
                                colortext="Courses"
                                subtitle="Our Courses"
                                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                            />
                        </div>
                    </div>
                    <div className="row">
                       {
                        data.map((course, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <CourseCard data={course} />
                            </div>
                        ))
                       }
                    </div>
                </div>
            </div>
            {/* course-area */}


            {/* video-area */}
            <div className="video-area">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".25s">
                            <div className="site-heading mb-3">
                                <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Latest Video</span>
                                <h2 className="site-title">
                                    Let's Check Our <span>Latest</span> Video
                                </h2>
                            </div>
                            <p className="about-text">
                                There are many variations of passages available but the majority have suffered
                                alteration in some form by injected humour look even slightly believable.
                            </p>
                            <a href="about.html" className="theme-btn mt-30">Learn More<i className="fas fa-arrow-right-long"></i></a>
                        </div>
                        <div className="col-lg-8 wow fadeInRight" data-wow-delay=".25s">
                            <Video />
                        </div>
                    </div>
                </div>
            </div>
            {/* video-area end */}
            

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
                            <TeamCard />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <TeamCard />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <TeamCard />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <TeamCard />
                        </div>
                    </div>
                </div>
            </div>
            {/* team-area end */}
            

            {/* choose-area */}
            <ChooseArea />
            {/* choose-area end */}


            {/* gallery-area */}
            <GalleryArea />
            {/* gallery-area end */}


            {/* cta-area */}
            <div className="cta-area">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-5 ms-lg-auto">
                                <div className="cta-content">
                                    <h1>Our 20% Offer Running - Join Today For Your Course</h1>
                                    <p>There are many variations of passages available but the majority have suffered
                                        alteration in some form by injected humour randomised words which don't look even
                                        slightly believable.</p>
                                    <div className="cta-btn">
                                        <a href="application-form.html" className="theme-btn">Apply Now<i
                                                className="fas fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta-area end */}


            {/* event area */}
            <Events />
            {/* event area end */}


            {/* enroll area*/}
            <Enrollment />
            {/* enroll area end */}


            {/* department area */}
            <DepartmentArea /> 
            {/* department area end */}


            {/* testimonial area */}
            <TestimonialArea />
            {/* testimonial area end */}


            {/* blog area */}
            <BlogArea />
            {/* blog area end */}


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
export default Home
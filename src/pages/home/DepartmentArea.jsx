import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DepartmentArea = () => {
    const departments = [
        {
            icon: "assets/img/icon/monitor.svg",
            title: "Business And Finance",
            desc: "There are many variations of passages the majority have some injected humour.",
            link: "academic-single.html"
        },
        {
            icon: "assets/img/icon/law.svg",
            title: "Law And Criminology",
            desc: "There are many variations of passages the majority have some injected humour.",
            link: "academic-single.html"
        },
        {
            icon: "assets/img/icon/data.svg",
            title: "IT And Data Science",
            desc: "There are many variations of passages the majority have some injected humour.",
            link: "academic-single.html"
        },
        {
            icon: "assets/img/icon/health.svg",
            title: "Health And Medicine",
            desc: "There are many variations of passages the majority have some injected humour.",
            link: "academic-single.html"
        },
        {
            icon: "assets/img/icon/art.svg",
            title: "Art And Design",
            desc: "There are many variations of passages the majority have some injected humour.",
            link: "academic-single.html"
        },
    ];

    return (
        <div className="department-area slider-wrapper bg py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center">
                            <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Department</span>
                            <h2 className="site-title">Browse Our <span>Department</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>

                <Swiper
                    className="department-slider slider-control"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }}
                >
                    {departments.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="department-item">
                                <div className="department-icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className="department-info">
                                    <h4 className="department-title">
                                        <a href={item.link}>{item.title}</a>
                                    </h4>
                                    <p>{item.desc}</p>
                                    <div className="department-btn">
                                        <a href={item.link}>Read More<i className="fas fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default DepartmentArea;

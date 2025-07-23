import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Events = () => {
    const eventsData = [
        {
            id: 1,
            img: "assets/img/event/01.jpg",
            location: "25/B Milford Road, New York",
            date: "16 June, 2024",
            time: "10.00AM - 04.00PM",
            title: "High School Program 2024",
            description: "There are many variations of passages the majority have some injected humour."
        },
        {
            id: 2,
            img: "assets/img/event/02.jpg",
            location: "25/B Milford Road, New York",
            date: "16 June, 2024",
            time: "10.00AM - 04.00PM",
            title: "High School Program 2024",
            description: "There are many variations of passages the majority have some injected humour."
        },
        {
            id: 3,
            img: "assets/img/event/03.jpg",
            location: "25/B Milford Road, New York",
            date: "16 June, 2024",
            time: "10.00AM - 04.00PM",
            title: "High School Program 2024",
            description: "There are many variations of passages the majority have some injected humour."
        },
        {
            id: 4,
            img: "assets/img/event/04.jpg",
            location: "25/B Milford Road, New York",
            date: "16 June, 2024",
            time: "10.00AM - 04.00PM",
            title: "High School Program 2024",
            description: "There are many variations of passages the majority have some injected humour."
        },
    ];

    return (
        <div className="event-area slider-wrapper bg py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center">
                            <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Events</span>
                            <h2 className="site-title">Our Upcoming <span>Events</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="event-slider slider-control">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {eventsData.map(event => (
                            <SwiperSlide key={event.id}>
                                <div className="event-item">
                                    <div className="event-location">
                                        <span><i className="far fa-map-marker-alt"></i> {event.location}</span>
                                    </div>
                                    <div className="event-img">
                                        <img src={event.img} alt="" />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-meta">
                                            <span className="event-date"><i className="far fa-calendar-alt"></i> {event.date}</span>
                                            <span className="event-time"><i className="far fa-clock"></i> {event.time}</span>
                                        </div>
                                        <h4 className="event-title"><a href="event-single.html">{event.title}</a></h4>
                                        <p>{event.description}</p>
                                        <div className="event-btn">
                                            <a href="event-single.html" className="theme-btn">Join Event<i
                                                className="fas fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Events;

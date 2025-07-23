import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TestimonialBg from "../../../public/assets/img/testimonial/bg.jpg"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anthony Nicoll",
    role: "Student",
    image: "assets/img/testimonial/01.jpg",
    quote: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
  },
  {
    name: "Richard Lock",
    role: "Student",
    image: "assets/img/testimonial/02.jpg",
    quote: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
  },
  {
    name: "Randal Grand",
    role: "Student",
    image: "assets/img/testimonial/03.jpg",
    quote: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
  },
  {
    name: "Edward Miles",
    role: "Student",
    image: "assets/img/testimonial/04.jpg",
    quote: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
  },
  {
    name: "Ninal Gordon",
    role: "Student",
    image: "assets/img/testimonial/05.jpg",
    quote: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
  },
];

const TestimonialArea = () => {
  return (
    <div className="testimonial-area slider-wrapper ts-bg pt-80 pb-80" style={{ backgroundImage: `url(${TestimonialBg})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="far fa-book-open-reader"></i> Testimonials
              </span>
              <h2 className="site-title text-white">
                What Our Students <span>Say's</span>
              </h2>
              <p className="text-white">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          className="testimonial-slider slider-control"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            992: { slidesPerView: 4}
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="testimonial-rate">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <div className="testimonial-quote">
                  <p>{item.quote}</p>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
                <span className="testimonial-quote-icon">
                  <i className="far fa-quote-right"></i>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialArea;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partnerLogos = [
  "assets/img/partner/01.png",
  "assets/img/partner/02.png",
  "assets/img/partner/03.png",
  "assets/img/partner/04.png",
  "assets/img/partner/01.png",
  "assets/img/partner/02.png",
  "assets/img/partner/04.png"
];

const OurPartner = () => {
  return (
    <div className="partner-area bg pt-50 pb-50">
      <div className="container">
        <Swiper
          className="partner-wrapper partner-slider"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={6}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 6 }
          }}
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt={`partner-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartner;

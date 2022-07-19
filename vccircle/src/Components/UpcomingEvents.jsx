import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "swiper/css/bundle";

export default function UpcomingEvents(props) {
  return (
    <div className="container ">
      <div className="up-events-none">
      <div className="up-headers">
        <p className="up-headingone">Upcoming Events</p>
        <p className="carousel-heading-two">
          View More <FaAngleRight className="angle-right" />{" "}
        </p>
      </div>
      <div className="cara-container upcoming-container">
      <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >



        <div className="up-card">
          
            {props.upImage.map((item) => {
            
              
                return (
                  <SwiperSlide>
                    <div className="up-cardone">
                      <img src={item.src} alt="" className="up-img" />
                      
                      <div className="up-details">
                      <p className="up-title">{item.heading}</p>
                      <p className="up-para">{item.para}</p>
                      </div>
            
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>


        
      </div>
      <hr/>
      </div>
    </div>
  );
}

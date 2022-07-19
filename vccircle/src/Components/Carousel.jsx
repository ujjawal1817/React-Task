import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "swiper/css/bundle";
import { useState } from "react";
import { useRef } from "react";
export default function Carousel(props) {
  const inpRef=useRef(null);
  const cls=inpRef.current;
  
  
  
  const scrollCard = () => {};
  return (
    <div className="container">
      <div className="carouselheader">
        <p className="carousel-heading-one">{props.cheading}</p>
        <p className="carousel-heading-two">
          View More <FaAngleRight className="angle-right" />{" "}
        </p>
      </div>

      <div className="cara-container">
        <Swiper
        
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("Card movinf")}
        >
          <div className="carousel-card">
            {   props.caraDataOne.map((item)=>{
              return(
               
                <SwiperSlide>
                <div className="car-card-one ">
                  <div className="premium-container">
                    <img src={item.src} className="cara-img" />

                <span className="premium-text-carousel">PREMIUM</span>
                  </div>
                    <p className="cara-desc">{item.para}</p>
                    <p className="cara-author">{item.author}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        
      </div>
    </div>
  );
}

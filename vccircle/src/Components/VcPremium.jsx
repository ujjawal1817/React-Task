import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "swiper/css/bundle";

export default function VcPremium(props) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="vcpre-header">
          <div className="vc-pre-logo">
          <p className="vcpre-headingone">
            VCCircle Premium 
          </p>
          <img src="./Images/crown.png" className="res-crown crown" alt=""/>
          </div>
          <div className="deskSub">
            
          <button className="vcpre-btn ">Subscribe</button>
          </div>
        </div>
        
        <div className="cara-container">

        <Swiper
            // install Swiper modules
            breakpoints={{
              340:{
                slidesPerView:1,
                spaceBetween:20,
              },
              768:{
                slidesPerView:2,
                spaceBetween:20,
              },
              1024:{
                slidesPerView:4,
                spaceBetween:50,
              }
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >



        <div className="vc-card">
          
            {props.preImg.map((item) => {
            
              
                return (
                  <SwiperSlide>
                        <div className="vc-cardone ">
                          <div className="premium-container">

                        <span className="premium-vccpre">PREMIUM</span>
                          <img src={item.src} alt="" className="premium-img" />
                          </div>
                      
                      <p className="premium-title">{item.heading}</p>
                      <p className="premium-para">{item.para}</p>
                      <p className="premium-author">{item.author}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          
        </div>

        <div className="res-btnSub">
        <button className="vcpre-btn ">Subscribe</button>
        </div>
          
      </div>
    </div>
  );
}

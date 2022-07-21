import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function UpcomingEventsResponsive() {
  return (
    <div className="container ">
      <div className="res-upcomingevents">
      <div className="up-re-headers">
        <p className="re-headerone">Upcoming</p>
        <div className="view-more-res">
          <p className="re-headertwo">View More</p>
          <div >
            <FaAngleRight className="angle-right"/>
          </div>
        </div>
      </div>

      <div className="res-up-cards ">
        <div className="card-layout">
          <div className="img-card">
            <img
              src="./Images/upcoming-img1.png"
              alt=""
              className="upcoming-img-res"
            />
          </div>
          <div className="card-text">
            <p className="card-text-title">4 October, 2021</p>
            <p className="card-text-desc">Limited Partners Summit 2022</p>
            <p className="card-text-author">
              Hyatt Regency, New Delhi | New Hybrid Masterclass.
            </p>
          </div>
        </div>

        <div className="card-layout">
          <div className="img-card">
            <img
              src="./Images/upcoming-img2.png"
              alt=""
              className="upcoming-img-res"
            />
          </div>
          <div className="card-text">
            <p className="card-text-title">4 October, 2021</p>
            <p className="card-text-desc">Cloud- The Digital Infrastructure</p>
            <p className="card-text-author">
              Hyatt Regency, New Delhi | New Hybrid Masterclass.
            </p>
          </div>
        </div>
        <div className="card-layout">
          <div className="img-card">
            <img
              src="./Images/upcoming-img3.png"
              alt=""
              className="upcoming-img-res"
            />
          </div>
          <div className="card-text">
            <p className="card-text-title">4 October, 2021</p>
            <p className="card-text-desc">SEMINAR - FUTURE OF TRUST</p>
            <p className="card-text-author">
              Hyatt Regency, New Delhi | New Hybrid Masterclass.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

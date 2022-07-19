import React from "react";
import { FaAngleRight, FaPlay } from "react-icons/fa";

export default function VccTv() {
  return (
    <div className="container">
      <div className="tv-bg">
        <div className="tv-header">
          <p className="tv-heading-one">VCC TV</p>
          <p className="tv-heading-two">
            View More <FaAngleRight className="angle-right" />
          </p>
        </div>

        <div className="tv-section">
          <div className="vcc_video">
            <iframe
              src="https://www.youtube.com/embed/Tn6-PIqc4UM"
              title="React in 100 Seconds"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="iframe"
            ></iframe>
          </div>
          <div className="tv-details">
            <p className="tv-heading">HEALTHCARE</p>
            <p className="tv-title">
              How can we harness data for healthcare and safegaurd ourselves
              from cyber threats?
            </p>
            <p className="tv-para">
              The global healthcare data is expected to grow at a CAGR of 36% by
              2025. To make healthcare more equitable, affordable and
              accessible, there is a need to find ways to unite and generate
              actionable insights from data. How collaborations and strategic
              partnerships can harness the data to tackle the issues faced by
              the sector?
            </p>
            <p className="tv-author">30 September . Madhurima Nandy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

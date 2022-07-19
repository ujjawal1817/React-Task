import React from "react";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="footer-mosiac-img">
          <img src="./Images/Mosaic-digital.png" alt="footer-img"  className="res-footer-img"/>
        </div>
        <div className="social-media-icons">
          <div className="fb">
            <img src="./Images/facebook.png" alt="facebook" className="social-res-footer"/>
          </div>
          <div className="twitter">
            <img src="./Images/twitter.png" alt="twitter" className="social-res-footer"/>
          </div>
          <div className="lkdn">
            <img src="./Images/linkedin.png" alt="linkedin" className="social-res-footer"/>
          </div>
        </div>

        <div className="footer-list-one">
            <ul className="footer-ul-list">
                <li className="footer-li-list">About Us</li>
                <li className="footer-li-list">Advertise with us</li>
                <li className="footer-li-list">Contact Us</li>
                <li className="footer-li-list">Copyright</li>
                <li className="footer-li-list">Privacy Policy</li>
                <li className="footer-li-list">Terms of use</li>
                <li className="footer-li-list">Company Listing</li>
                <li className="footer-li-list">Tag Listing</li>
            </ul>
        </div>
        <div className="footer-list-two">
            <ul className="footer-ul-list">
                <li className="footer-li-list-second">Our Products :</li>
                <li className="footer-li-list-second">VCCircle</li>
                <li className="footer-li-list-second">TechCircle</li>
                <li className="footer-li-list-second">Events</li>
                <li className="footer-li-list-second">Training</li>
                <li className="footer-li-list-second">VCCEdge</li>
                <li className="footer-li-list-second">SalesEdge</li>
                <li className="footer-li-list-second">PartnerEdge</li>
                <li className="footer-li-list-second">Edge Insights</li>
            </ul>
        </div>
        <div className="footer-copyright">
            <p className="copyright-para">Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures Pvt. Ltd.</p>
        </div>
      </div>
      
    </div>
  );
}

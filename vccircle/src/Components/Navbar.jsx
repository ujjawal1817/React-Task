import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const inpRef = useRef(null);

  const show = () => {
    setMenu(!menu);
    if (menu === false) {
      document.body.style.overflow = "hidden";
    } else if (menu === true) {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <>
      <div className="container">
        <div className="nav-container">
          <div className="navbar res-navbar">
            <div className="hamburger-menu">
              <div>
                <a href="/#" onClick={show}>
                  <HiMenu />
                </a>
              </div>
              <img
                src="./Images/vccircle.png"
                alt="logo-vccircle"
                className="logo-img res-logo-img"
              />
            </div>
            {/* <a href="#" onClick={show}>
                <HiMenu />
              </a>
            </div>
            <img
              src="./Images/vccircle.png"
              alt="logo-vccircle"
              className="logo-img res-logo-img"
            /> */}
            <ul className="res-nav-subscribe-ul">
              <li className="sub-nav-li sub-nav-li-hide">
                <span>
                  <img
                    src="./Images/crown.png"
                    alt="glass-icon"
                    className="nav-img menu-nav-img"
                  />
                </span>{" "}
                <p className="para-sub">Subscribe</p>
              </li>
            </ul>

            <div className="nav-list-none">
              <img
                src="./Images/vccircle.png"
                alt="logo-vccircle"
                className="logo-img res-logo-img"
              />
            </div>

            <ul className="nav-ul">
              <li className="nav-li">
                <img
                  src="./Images/magnifyingglass.png"
                  alt="glass-icon"
                  className="nav-img"
                />
                Search
              </li>
              <li className="nav-li">
                <img
                  src="./Images/crown.png"
                  alt="glass-icon"
                  className="nav-img"
                />
                Subscribe
              </li>
              <li className="nav-li">
                <img
                  src="./Images/Path 2168.png"
                  alt="glass-icon"
                  className="nav-img"
                />
                Sign In
              </li>
            </ul>
          </div>
          <div className={menu ? "sub-nav res-subnav" : "sub-nav"} ref={inpRef}>
            <div className="txt_cntr">
              <span>
                <img
                  src="./Images/vccircle.png"
                  alt="logo-vccircle"
                  className="logo-img res-logo-img"
                />
              </span>

              <span className=" flt-right">
                <a href="/#" onClick={show}>
                  <AiOutlineClose className="close-btn" />
                </a>
              </span>
            </div>
            <ul className="sub-ul-nav">
              <li className="sub-nav-li sub-nav-li-hide-home nav-border">
                Home
              </li>
              <li className="sub-nav-li sub-nav-li-hide-home nav-border">
                Sign In
              </li>
              <li className="sub-nav-li hide-menu nav-border">
                <img
                  src="./Images/crown.png"
                  alt="glass-icon"
                  className="nav-img menu-nav-img"
                />
                Subscribe
              </li>
              <li className="sub-nav-li extra-menu-one nav-border">
                Private Equity
              </li>
              <li className="sub-nav-li nav-border">Venture Capital</li>
              <li className="sub-nav-li nav-border">M&A</li>
              <li className="sub-nav-li nav-border">
                Industry
                <img
                  src="./Images/dropdown.png"
                  alt="dropdwon"
                  className="nav-drop-img"
                />
              </li>
              <li className="sub-nav-li nav-border">Stressed Assests</li>
              <li className="sub-nav-li nav-border">Limited Partner</li>
              <li className="sub-nav-li nav-border">Founder</li>
              <li className="sub-nav-li extra-menu nav-border">About Us</li>
              <li className="sub-nav-li extra-menu nav-border">Tag Listing</li>
              <li className="sub-nav-li extra-menu nav-border">
                Advertise With Us
              </li>
              <li className="sub-nav-li extra-menu nav-border">Contact Us</li>
              <li className="sub-nav-li extra-menu ">VCC Mobile APP</li>
            </ul>
            <ul>
              <li className="sub-nav-li sub-nav-li-custom">
                Customize
                <img
                  src="./Images/dropdown.png"
                  alt="dropdown"
                  className="nav-drop-img"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="none-border" />
    </>
  );
}

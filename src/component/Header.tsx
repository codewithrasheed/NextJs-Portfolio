"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
const Header = () => {
  const [menuItem, setMenuItem] = useState(false);
//   const [isSidebar, setIsSidebar] = useState(false);
  const handleMenu = () => {
    setMenuItem(!menuItem);
  };


  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <div className={`links ${menuItem ? "show" : ""}`}>
            <div className="navlinks">

            
          <h3>
            <a className="nav-link" href="#home">
              Home
            </a>
          </h3>
          <h3>
            <a className="nav-link" href="#about">
              About
            </a>
          </h3>
          <h3>
            <a className="nav-link" href="#services">
              Services
            </a>
          </h3>
          <h3>
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </h3>
          <h3>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </h3>
          </div>
          <div className="btns">
            <button className="hireme-btn">Hire Me</button>
          </div>
        </div>





        {/* mobile view navbar   */}
        <div onClick={handleMenu} className="menuButton">
          {menuItem ? (
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path
                d="M 10,10 L 30,30 M 30,10 L 10,30"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="menuIcon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              ></path>
            </svg>
          )}
          <div
            className={`sidebarOverlay ${menuItem ? "active" : ""}`}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Header;

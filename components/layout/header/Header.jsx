"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import logo from "@/public/images/logo/logo.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("sticky-header");
      if (window.scrollY > 120) {
        header.classList.add("sticky-menu");
      } else {
        header.classList.remove("sticky-menu");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="ep-header-section w-100" id="sticky-header">
      <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
        <div className="container header-one-container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" width={180} height={40} priority />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu />
            <div className="call-us">
              <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                <span className="icon d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-phone blinking-phone-icon "></i>
                </span>
                <div className="info">
                  <span className="title">Need help?</span>
                  <h5 className="number">+91 72660-06663</h5>
                </div>
              </a>
              <style jsx>{`
                .icon {
                  border-radius: 50%;
                  padding: 12px;
                  background-color: #09b850;
                  width: 45px;
                  height: 45px;
                  transition: all 0.3s ease;
                }
                
                .blinking-phone-icon {
                  color: white;
                  animation: blink-pulse 0.5s linear infinite;
                }
                
                @keyframes blink-pulse {
                  0%, 50% { 
                    transform: scale(1);
                    opacity: 3;
                  }
                  51%, 100% { 
                    transform: scale(1.1);
                    opacity: 0.8;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile navbar part start */}
      <MobileMenu/>
      {/* mobile navbar part end */}
    </header>
  )
}

export default Header

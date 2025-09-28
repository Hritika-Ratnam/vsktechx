"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import logo from "@/public/images/logo/logo2.svg";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const HeaderTwo = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("sticky-header");
      const headerFixedHeight = document.getElementById("header-fixed-height");
      if (window.scrollY > 120) {
        header.classList.add("sticky-menu");
        headerFixedHeight.classList.add("active-height");
      } else {
        header.classList.remove("sticky-menu");
        headerFixedHeight.classList.remove("active-height");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="header-fixed-height"></div>
      <header className="ep-header-section ep-header-section-two w-100" id="sticky-header">
        <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Menu />
              <div className="call-us">
                <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                  <span className="icon d-flex justify-content-center
               align-items-center">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div className="info">
                    <span className="title">Need help?</span>
                    <h5 className="number">+91 72660-06663</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* mobile navbar part start */}
        <MobileMenu/>
        {/* mobile navbar part end */}
      </header>
    </>
  )
}

export default HeaderTwo

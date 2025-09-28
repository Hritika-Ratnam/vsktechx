import logo from "@/public/images/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "#",
    submenu: [
      { id: 1, title: "Mobile Application", link: "/services?category=Mobile%20Application" },
      { id: 2, title: "Web Development", link: "/services?category=Web%20Development" },
      { id: 3, title: "Software Development", link: "/services?category=Software%20Development" },
      { id: 4, title: "Digital Marketing", link: "/services?category=Digital%20Marketing" },
    ],
  },
  {
    id: 4,
    title: "Technologies",
    link: "/technologies",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 7,
    title: "Careers",
    link: "/carrers",
  },
];

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenuId(null);
  };

  // Toggle submenu visibility with smooth transition
  const toggleSubmenu = (id) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  return (
    <div className="mobile-menu-area d-block d-xl-none">
      <div className="container">
        <div className="mobile-topbar">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="logo" priority/>
              </Link>
            </div>
            <div className="bars" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Main */}
      <div className={`mobile-menu-main ${isMenuOpen ? "active" : ""}`}>
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="close-mobile-menu" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </div>
        <div className="menu-body">
          <div className="menu-list">
            <ul className="list-unstyled">
              {menus.map((menu) => (
                <li className="sub-mobile-menu" key={menu.id}>
                  {menu.submenu ? (
                    <>
                      <Link
                        href="#"
                        onClick={() => toggleSubmenu(menu.id)}
                      >
                        {menu.title}{" "}
                        <i
                          className={`fas float-end ${openSubmenuId === menu.id ? "fa-chevron-up" : "fa-chevron-down"}`}
                        ></i>
                      </Link>
                      <ul
                        className={`submenu ${openSubmenuId === menu.id ? "open" : ""}`}
                      >
                        {menu.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link href={submenu.link} onClick={closeMenu} className="text-start">
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={menu.link} onClick={closeMenu}>
                      {menu.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="call-us p-4">
          <a
            href="tel:+1234567890"
            className="call-us-btn d-flex align-items-center gap-3"
          >
            <span className="icon d-flex justify-content-center align-items-center">
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
  );
};

export default MobileMenu;
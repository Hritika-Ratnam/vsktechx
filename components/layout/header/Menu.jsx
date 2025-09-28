"use client";
import Link from "next/link"

const Menu = () => {
  return (
    <ul className="navbar-nav mx-auto mb-lg-0">
      {/* Home */}
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="/">
          Home
        </Link>
      </li>
      {/* Services */}
      <li className="nav-item">
        <Link className="nav-link" href="/services">
          Services
        </Link>
      </li>
      {/* Technologies */}
      <li className="nav-item">
        <Link className="nav-link" href="/technologies">
          Technologies
        </Link>
      </li>
      {/* Blog */}
      <li className="nav-item">
        <Link className="nav-link" href="/blog">
          Blog
        </Link>
      </li>
      {/* Contact */}
      <li className="nav-item">
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
      </li>
      {/* About Us */}
      <li className="nav-item">
        <Link className="nav-link" href="/about">
          About Us
        </Link>
      </li>
      {/* Careers */}
      <li className="nav-item">
        <Link className="nav-link" href="/carrers">
          Careers
        </Link>
      </li>
    </ul>
  )
}

export default Menu
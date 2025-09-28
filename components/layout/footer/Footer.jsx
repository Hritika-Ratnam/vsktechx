import Link from 'next/link'
import footerIcon1 from '@/public/images/icons/footer-short-icon-1.svg';
import footerIcon2 from '@/public/images/icons/footer-short-icon-2.svg';
import footerIcon3 from '@/public/images/icons/footer-short-icon-3.svg';
import serviceIcon1 from '@/public/images/icons/service-icon-1.svg';
import logo2 from '@/public/images/logo/logo2.svg';
import Image from 'next/image';
import ScrollToTop from '../ScrollProgressButton';
import ScrollProgressButton from '../ScrollProgressButton';

const Footer = () => {
  return (
    <>
      {/* scroll to top start */}
      <ScrollProgressButton />
      {/* scroll to top end */}
      <footer className="ep-footer-section pt-120 bg-white">
        <div className="footer-bg">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <Image priority src={footerIcon1} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Mobile App Development</h4>
                    {/* <p>Band creation and all kinds of animations</p> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <Image priority src={footerIcon2} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Software Development</h4>
                    {/* <p>Other digital technologies to store place network</p> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <Image priority src={footerIcon3} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Digital Marketing</h4>
                    {/* <p>The rapid advancement of technology continuously</p> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <Image priority src={footerIcon3} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Web Development</h4>
                    {/* <p>Creating responsive and dynamic websites</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget footer-about">
                    <div className="logo">
                      {/* <Link href="/">
                        <Image priority src={logo2} alt="logo2" />
                      </Link> */}
                    </div>
                    <div className="short-info">
                      <p>Drives innovation within the IT sector, making it a dynamic </p>
                    </div>
                    <div className="contact-info">
                      <ul className="list-unstyled">
                        <li>
                          <div className="d-flex align-items-center gap-2">
                            <div className="icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h4 className="title">Address </h4>
                          </div>
                          <p>45 Airport Avenue, New Delhi, UP 110037</p>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2">
                            <div className="icon">
                              <i className="fas fa-envelope"></i>
                            </div>
                            <h4 className="title">Email </h4>
                          </div>
                          <a href="mailto:contact@kripaluinnovations.com">contact@kripaluinnovations.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget footer-links services-widget">
                    <h4 className="footer-title">Services</h4>
                    <ul className="list-unstyled">
                      <li><Link href="/services"><i className="fas fa-chevron-right"></i> Website Development</Link></li>
                      <li><Link href="/services"><i className="fas fa-chevron-right"></i> Software Development</Link></li>
                      <li><Link href="/services"><i className="fas fa-chevron-right"></i> Digital Marketing</Link></li>
                      <li><Link href="/services"><i className="fas fa-chevron-right"></i> Mobile Application</Link></li>
                      {/* <li><Link href="/services"><i className="fas fa-chevron-right"></i> ByteForce Solutions</Link></li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-6">
                  <div className="footer-widget footer-links links-widget">
                    <h4 className="footer-title">Link</h4>
                    <ul className="list-unstyled">
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/services">Services</Link></li>
                      <li><Link href="/technologies">Technologies</Link></li>
                      <li><Link href="/blog">Blog And News</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget recent-post-widget">
                    <h4 className="footer-title">Recent Post</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/blog">
                          <span className="title">
                            Crafting Tomorrow’s Digital World
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            October 19, 2024
                          </small>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <span className="title">
                            Technology That Powers the Future
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            October 19, 2024
                          </small>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row g-2">
                  <div className="col-lg-6">
                    <div className="footer-copyright text-center text-lg-start">
                      <p>© VSKTechX Powered by Kripalu Inovation 2025 | All Rights Reserved</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="footer-menu text-center text-lg-end">
                      <ul className="list-unstyled">
                        <li className="d-inline-block"><Link href="#">Terms & Condition</Link></li>
                        <li className="d-inline-block"><Link href="#">Privacy Policy</Link></li>
                        <li className="d-inline-block"><Link href="/blog">Blog</Link></li>
                        <li className="d-inline-block"><Link href="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

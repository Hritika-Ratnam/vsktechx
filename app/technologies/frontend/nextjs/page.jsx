"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";

export default function NextJSPage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div
        className="container-fluid"
        style={{ 
          minHeight: "80vh", 
          marginTop: "100px", 
          padding: "0 5%",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="row w-100 align-items-center">
          {/* Left Text Section */}
          <div className="col-lg-7 col-md-12">
            <div className="hero-content">
              <h1
                className="hero-title mb-4"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  marginBottom: "24px",
                  color: "#1a1a1a"
                }}
              >
                Next.JS Development Company
              </h1>
              
              <p
                className="hero-description"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "#666",
                  maxWidth: "580px",
                  marginBottom: "0px"
                }}
              >
                Leverage our expert Next.js development services to build
                lightning-fast, SEO-optimized, and scalable web apps. As a top
                Next.js development company, we deliver custom solutions tailored to
                your business goals.
              </p>


            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
            <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
              <Image
                src="/images/nextjs-company.png"
                alt="Next.js Development Illustration"
                width={480}
                height={320}
                style={{ 
                  maxWidth: "100%", 
                  height: "auto",
                  borderRadius: "12px"
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by section - centered below hero */}
      <div className="container-fluid" style={{ padding: "0 5%", marginTop: "40px" }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h3 
              style={{ 
                fontSize: '18px', 
                fontWeight: 600, 
                margin: '0 0 8px 0',
                color: '#1a1a1a'
              }}
            >
              Trusted by Top Brands
            </h3>
            <p 
              style={{ 
                fontSize: '16px', 
                margin: 0,
                color: '#1D1E22'
              }}
            >
              Including Leading Fortune Enterprises
            </p>
          </div>
        </div>
      </div>

      {/* Services Section with Black Box */}
      <div className="container-fluid" style={{ padding: "0 5%", marginTop: "60px" }}>
        <div className="row">
          <div className="col-12">
            <div style={{ 
              background: "#fff", 
              padding: "50px 40px"
            }}>
              <div className="row">
                <div className="col-lg-6">
                  <h2 style={{ 
                    fontSize: "39px",
                    fontWeight: "600",
                    marginBottom: "0 0 20px",
                    lineHeight: "1.2",
                    color: "#1D1E22"
                  }}>
                    Trusted Next.js Development <br />Services
                  </h2>
                  <p style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    color: "#1D1E22",
                    maxWidth: "520px",
                    marginBottom: "0 0 30px"
                  }}>
                    Partner with a leading Next.js development company offering top-rated development services for speed, scalability, and SEO.{" "}
                    <a href="#" style={{ 
                      color: "#000", 
                      textDecoration: "underline",
                      fontWeight: "500"
                    }}>
                      Hire best Next.js developers
                    </a>
                    {" "}to build future-ready digital products that drive results.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div style={{
                    background: "#000",
                    color: "#FFFFFF",
                    padding: "40px",
                    borderRadius: "20px",
                    height: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}>
                    <h3 style={{ 
                      fontSize: "26px",
                      fontWeight: "600",
                      marginBottom: "0px 0px 15px"
                    }}>
                      Next.js Server-Side Rendered<br />(SSR) App Development
                    </h3>
                    <p style={{ 
                      fontSize: "20px",
                      lineHeight: "1.6",
                      padding: "16px 0 0",
                      color: "#fff",
                      opacity: "0.9"
                    }}>
                      Achieve top-tier speed, SEO performance, and smooth interactivity with our expert
                      SSR development in Next.js. We build pre-rendered pages with dynamic routing to
                      ensure faster load times, better indexing, and exceptional UX.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Next.js Development Section */}
      <div className="container-fluid" style={{ padding: "80px 5%" }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 style={{ 
              fontSize: "48px",
              fontWeight: "600",
              marginBottom: "24px",
              lineHeight: "1.2",
              maxWidth: "1000px",
              margin: "0 auto 20px"
            }}>
              Why Next.js Development is ideal<br />
              for animations & immersive <br />
              experiences
              
            </h2>
            <p style={{ 
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#1D1E22",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "0 20px"
            }}>
              Use Next.js development capabilities to craft fluid animations,<br />
              dynamic UI layers, and real-time interactions that captivate,<br />
              users and elevate frontend impact.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Boxes Section */}
      <div className="container-fluid" style={{ padding: "40px 5% 80px" }}>
        <div className="row">
          {/* Optimized Performance Box */}
          <div className="col-lg-6 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "34px",
              height: "100%",
              border: "5px solid #eee",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}>
              <h3 style={{
                fontSize: "28px",
                fontWeight: "500",
                marginBottom: "24px",
                color: "#1d1e22"
              }}>
                Optimized Performance with Next.js
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Next.js uses code splitting and static site generation for faster page loads,
                ensuring smooth animations and quick interactions.
              </p>
            </div>
          </div>

          {/* React Ecosystem Integration Box */}
          <div className="col-lg-6 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "34px",
              height: "100%",
              border: "5px solid #eee",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}>
              <h3 style={{
                fontSize: "28px",
                fontWeight: "500",
                marginBottom: "24px",
                color: "#1d1e22"
              }}>
                React Ecosystem Integration with Next.js
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Seamlessly integrate libraries like Framer Motion to create stunning,
                dynamic animations with minimal effort.
              </p>
            </div>
          </div>

          {/* Dynamic Imports Box */}
          <div className="col-lg-6 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "34px",
              height: "100%",
              border: "5px solid #eee",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}>
              <h3 style={{
                fontSize: "28px",
                fontWeight: "500",
                marginBottom: "24px",
                color: "#1d1e22"
              }}>
                Dynamic Imports in Next.js
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Load animation components only when needed, keeping initial load
                times fast while enhancing user experience.
              </p>
            </div>
          </div>

          {/* ISR Box */}
          <div className="col-lg-6 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "34px",
              height: "100%",
              border: "5px solid #eee",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}>
              <h3 style={{
                fontSize: "28px",
                fontWeight: "500",
                marginBottom: "24px",
                color: "#1d1e22"
              }}>
                Incremental Static Regeneration (ISR) in Next.js
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Update content and animations in real-time without full rebuilds, ensuring
                responsiveness and consistency.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-content {
          padding-right: 20px;
        }
        
        .trusted-section {
          border-left: 4px solid #e91e63;
          padding-left: 20px;
          margin-top: 0px;
        }

        @media (max-width: 991px) {
          .hero-content {
            padding-right: 0;
            text-align: center;
            margin-bottom: 20px;
          }
          
          .trusted-section {
            border-left: none;
            border-top: 4px solid #e91e63;
            padding-left: 0;
            padding-top: 20px;
            text-align: center;
          }
          
          .trusted-section h3,
          .trusted-section p {
            text-align: center !important;
          }
        }

        @media (max-width: 768px) {
          .container-fluid {
            margin-top: 80px !important;
            padding: 0 4% !important;
          }
          
          .hero-title {
            font-size: 42px !important;
            margin-bottom: 20px !important;
          }
          
          .hero-description {
            font-size: 16px !important;
            margin-bottom: 35px !important;
          }
          
          .image-container {
            margin-top: 30px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 36px !important;
            line-height: 1.1 !important;
          }
          
          .hero-description {
            font-size: 15px !important;
            margin-bottom: 30px !important;
          }
          
          .trusted-section {
            margin-top: 20px;
            padding-top: 15px;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
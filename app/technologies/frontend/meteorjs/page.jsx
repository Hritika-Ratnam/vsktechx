"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";
export default function MeteorJSPage() {
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
                  color: "#1d1e22"
                }}
              >
                Meteor.js <br/>Development <br/>Services
              </h1>
              
              <p
                className="hero-description"
                style={{
                  fontSize: "20px",
                  lineHeight: 1.6,
                  color: "#1d1e22",
                  maxWidth: "680px",
                  marginBottom: "0px"
                }}
              >
                As a leading Meteor.JS development company,<br/>
                we build real-time, scalable, and modern web<br/>
                apps using cutting-edge technologies<br/>
                for seamless digital performance.
              </p>


            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
            <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
              <Image
                src="/images/meteor.png"
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
                fontWeight: 500, 
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
                    fontWeight: "500",
                    marginBottom: "0 0 40px",
                    lineHeight: "1.2",
                    color: "#1D1E22"
                  }}>
                    Meteor JS Development Services from Trusted Experts
                  </h2>
                  <p style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    color: "#1D1E22",
                    maxWidth: "520px",
                    marginBottom: "0 0 30px"
                  }}>
                    Partner with a top Meteor JS development company offering scalable, real-time, and secure Meteor JS development services that deliver unmatched digital experiences.
                    {/* <a href="#" style={{ 
                      color: "#000", 
                      textDecoration: "underline",
                      fontWeight: "500"
                    }}>
                      Hire best Next.js developers
                    </a>
                    {" "}to build future-ready digital products that drive results. */}
                  </p>
                </div>
                <div className="col-lg-6">
                  <div style={{
                    background: "#000",
                    color: "#FFFFFF",
                    padding: "40px",
                    borderRadius: "40px",
                    height: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}>
                    <h3 style={{ 
                      fontSize: "26px",
                      fontWeight: "500",
                      marginBottom: "0px 0px 15px"
                    }}>
                      MeteorJS Consultation
                    </h3>
                    <p style={{ 
                      fontSize: "20px",
                      lineHeight: "1.6",
                      padding: "16px 0 0",
                      color: "#fff",
                      opacity: "0.9"
                    }}>
                      Leverage our Meteor JS consulting services to define architecture, tech stack, and project scope that ensure long-term scalability and real-time capabilities. Our experts provide technical guidance to align Meteor JS app strategies with your unique business goals and market expectations.
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
              We've Designed & Developed MeteorJS Applications for Diverse Industries
              
            </h2>
            <p style={{ 
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#1D1E22",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "0 20px"
            }}>
              We craft MeteorJS solutions to tackle unique challenges
              and create value for businesses across various sectors.
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
                Effortless Scaling with Meteor JS
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Scale modern apps with Meteor’s dynamic modules and built-in reactivity. 
                Deploy updates with zero downtime and manage content dynamically with ease. 
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
                Cross-Platform Web Apps
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Create apps for web, mobile, and desktop with a single Meteor JS codebase.
                Reduce time-to-market, enhance maintainability, and improve scalability across platforms.
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
                Caching & Performance Boost
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Meteor’s smart caching minimizes data fetch delays and improves app speed. Enjoy reduced server load and lightning-fast interactions for a better user experience. This approach directly boosts SEO rankings and real-time user satisfaction.
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
                fontWeight: "600",
                marginBottom: "24px",
                color: "#1d1e22"
              }}>
                Built on Community Innovation
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Leverage 50,000+ Meteor JS modules developed by a thriving open-source ecosystem. 
                Speed up development with reusable packages, real-time support, and proven patterns.
                This empowers your business to stay lean, adaptive, and ahead of the curve.
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
"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";
export default function NestJSPage() {
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
                NestJS
                Development
                Services
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
                Powering scalable, high-performance web apps with expert<br/>
                NestJS development services built for modern businesses.
              </p>


            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
            <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
              <Image
                src="/images/nestjs.png"
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
                    marginBottom: "20px",
                    lineHeight: "1.2",
                    color: "#1D1E22"
                  }}>
                    NestJS Development Services by Top Experts
                  </h2>
                  <p style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    color: "#1D1E22",
                    maxWidth: "520px",
                    marginBottom: "30px"
                  }}>
                    Partner with {" "}
                    <a href="#" style={{ 
                      color: "#000", 
                      textDecoration: "underline",
                      fontWeight: "500"
                    }}>
                      IT Services India
                    </a>
                    {" "}to build robust,<br/> scalable applications using NestJS. 
                    We deliver<br/> high-performance backend solutions tailored to <br/>modern business needs.
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
                      marginBottom: "15px",
                      textDecoration: "underline"
                    }}>

                      NestJS Consulting Services
                    </h3>
                    <p style={{ 
                      fontSize: "20px",
                      lineHeight: "1.6",
                      padding: "16px 0 0",
                      color: "#fff",
                      opacity: "0.9"
                    }}>
                      Align your backend architecture with real-<br/>world market demands. 
                      We help you plan, <br/>validate, and scale NestJS solutions to 
                      ensure <br/>future-ready performance and sustainable <br/>business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Performance NestJS Development Section */}
      <div className="container-fluid" style={{ padding: "80px 5%" }}>
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12">
            <h2 style={{
              fontSize: "48px",
              fontWeight: "500",
              lineHeight: "1.2",
              marginBottom: "24px",
              color: "#1a1a1a"
            }}>
              High-Performance NestJS Development Services for Modern Enterprises
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#666",
              marginBottom: "24px"
            }}>
              Work with{" "}
              <a href="#" style={{
                color: "#000",
                textDecoration: "underline",
                fontWeight: "500"
              }}>
                top NestJS developers
              </a>
              {" "}to build powerful <br />backend applications that deliver unmatched <br />speed, scalability, and performance—tailored to<br /> your business goals.
            </p>

          </div>

          {/* Right Content - Feature Boxes */}
          <div className="col-lg-6 col-md-12">
            <div className="row">
              {/* Box Style Variables */}
              {[
                {
                  bg: "#FFB6C1",
                  text: "#000",
                  title: "Modular Architecture for Rapid Growth",
                  desc: "Build future-ready apps with NestJS's dynamic modules, optimizing authentication, logging, and middleware for effortless enterprise-level scalability."
                },
                {
                  bg: "#f5f5f5",
                  text: "#000",
                  title: "Cross-Platform App Engineering",
                  desc: "Develop powerful cross-platform applications with TypeScript-driven NestJS, unlocking consistent performance and generating up to 30x higher ROI."
                },
                {
                  bg: "#000",
                  text: "#fff",
                  title: "Real-Time Application Efficiency",
                  desc: "Utilize NestJS's event-driven architecture to streamline real-time I/O operations, delivering 70% faster performance and exceptional user engagement."
                }
              ].map((box, idx) => (
                <div className="col-12 mb-4" key={idx}>
                  <div style={{
                    background: box.bg,
                    color: box.text,
                    padding: "40px",
                    borderRadius: "4px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
                  }}>
                    <h3 style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "16px",
                      lineHeight: "1.3"
                    }}>
                      {box.title}
                    </h3>
                    <p style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                      margin: 0,
                      opacity: box.text === "#fff" ? "0.9" : "1"
                    }}>
                      {box.desc}
                    </p>
                  </div>
                </div>
              ))}
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
              lineHeight: "1.2",
              maxWidth: "1000px",
              margin: "0 auto 20px"
            }}>
              We Deliver High-Quality NestJS
              Solutions Across Industries
              
            </h2>
            <p style={{ 
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#1D1E22",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "0 20px"
            }}>
              Powerful NestJSsolutions designed to overcome industry-specific
challenges and generate value for businesses.
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
                Thriving Open-Source Ecosystem
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Access a wide range of NestJS libraries and modules supported by an active open source community to increase code quality and reduce development time and cost.
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
                Reliable Backend Maintenance
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Maintain server-side stability through efficient state retention, route handling, and seamless upgrades with robust NestJS maintenance workflows.
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
                Advanced Caching Strategies
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Accelerate app delivery with NestJS caching tools for reducing server load and improving 
                data retrieval speed by up to 85% for smooth user journeys.
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
                NestJS App Migration Services
              </h3>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#1d1e22",
                margin: 0
              }}>
                Switch to NestJS seamlessly. Our migration experts ensure zero downtime, 
                preserve app integrity, and upgrade legacy systems into modern, maintainable NestJS frameworks.
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
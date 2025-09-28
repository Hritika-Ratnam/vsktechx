"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";
export default function GatsbyJSPage() {
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
                Gatsby JS Development <br/>Service Company
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
                Best Gatsby JS Development Company crafting scalable,<br />
                fast websites. Hire the top Gatsby JS Development<br />
                Agency for seamless experiences.
              </p>


            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
            <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
              <Image
                src="/images/gatsby.png"
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
                    Top Gatsby JS <br/>Development Services by <br/>Elite Experts
                  </h2>
                  <p style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    color: "#1D1E22",
                    maxWidth: "520px",
                    marginBottom: "0 0 30px"
                  }}>
                    Partner with IT Services India to build blazing-fast, scalable web experiences using Gatsby JS. Our
                    <a href="#" style={{ 
                      color: "#1d1e22", 
                      textDecoration: "underline",
                      fontWeight: "400"
                    }}>
                      Gatsby.JS expert developers
                    </a>
                    {" "}combine innovation,<br/> performance, and security to turn your vision into <br/>digital success.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div style={{
                    background: "#1d1e22",
                    color: "#FFFFFF",
                    padding: "50px",
                    borderRadius: "30px",
                    height: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}>
                    <h3 style={{
                      fontSize: "26px",
                      fontWeight: "500",
                      marginBottom: "0px 0px 15px",
                      textDecoration: "underline"
                    }}>
                      Gatsby Website Development
                    </h3>
                    <p style={{ 
                      fontSize: "20px",
                      lineHeight: "1.6",
                      padding: "16px 0 0",
                      color: "#fff",
                      opacity: "0.9"
                    }}>
                      We design and develop high-performance <br/>Gatsby JS websites and apps from marketing <br/>sites to complex platforms, customized for <br/>speed, responsiveness, and SEO excellence.
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
              fontWeight: "500",
              marginBottom: "24px",
              lineHeight: "1.2",
              maxWidth: "1000px",
              margin: "0 auto 20px"
            }}>
              Why Choose Gatsby Js ?
              
            </h2>
            <p style={{ 
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#1D1E22",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "0 20px"
            }}>
              Gatsby JS powers modern brands with a high-performance<br/>
framework, delivering fast, scalable websites built<br/>
for growth and SEO success.
            </p>
          </div>
        </div>
      </div>

      {/* Problem/Solution Boxes Section */}
      <div className="container-fluid" style={{ padding: "40px 5% 80px" }}>
        <div className="row justify-content-center">
          {/* Problem Box */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "#f8f9fa",
              padding: "40px",
              borderRadius: "24px",
              height: "100%",
              border: "1px solid #e9ecef",
              position: "relative"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px"
              }}>
                <span style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#6c757d",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  ⚡ PROBLEM
                </span>
              </div>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#1a1a1a",
                lineHeight: "1.3"
              }}>
                Traditional stacks slow down at scale, affecting performance, UX, and SEO rankings.
              </h3>
            </div>
          </div>

          {/* Solution Box */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "#2d3748",
              padding: "40px",
              borderRadius: "24px",
              height: "100%",
              color: "#fff",
              position: "relative"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px"
              }}>
                <span style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#a0aec0",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  ✓ SOLUTION
                </span>
              </div>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fff",
                lineHeight: "1.3"
              }}>
                Gatsby JS delivers blazing speed and scalable architecture for high-traffic web platforms.
              </h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" style={{ marginTop: "30px" }}>
          {/* Second Problem Box */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "#f8f9fa",
              padding: "40px",
              borderRadius: "24px",
              height: "100%",
              border: "1px solid #e9ecef",
              position: "relative"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px"
              }}>
                <span style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#6c757d",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  ⚡ PROBLEM
                </span>
              </div>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#1a1a1a",
                lineHeight: "1.3"
              }}>
                Multi-source content delivery is messy and slows down traditional CMS performance.
              </h3>
            </div>
          </div>

          {/* Second Solution Box */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "40px",
              borderRadius: "24px",
              height: "100%",
              color: "#fff",
              position: "relative"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px"
              }}>
                <span style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "rgba(255,255,255,0.8)",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  ✓ SOLUTION
                </span>
              </div>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fff",
                lineHeight: "1.3"
              }}>
                Gatsby JS integrates headless CMSs and APIs to streamline omnichannel content flow.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Images Section */}
      <div className="container-fluid" style={{ padding: "40px 5% 80px", background: "#f8f9fa" }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2 style={{
              fontSize: "42px",
              fontWeight: "600",
              marginBottom: "24px",
              lineHeight: "1.2",
              color: "#1a1a1a",
              textDecoration: "underline"
            }}>
              Gatsby JS Features & Benefits
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              Discover why leading brands choose Gatsby JS for their web development needs
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Performance Feature */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              maxWidth: "400px",
              margin: "0 auto"
            }}>
              <div style={{ height: "140px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>⚡</div>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", margin: 0 }}>Lightning Fast</h4>
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#1a1a1a"
                }}>
                  Optimized Performance
                </h3>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#666",
                  margin: 0
                }}>
                  Gatsby uses code splitting and static site generation for faster page loads, ensuring smooth user experiences and quick interactions.
                </p>
              </div>
            </div>
          </div>

          {/* React Integration Feature */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              maxWidth: "400px",
              margin: "0 auto"
            }}>
              <div style={{ height: "140px", background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>⚛️</div>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", margin: 0 }}>React Powered</h4>
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#1a1a1a"
                }}>
                  React Ecosystem Integration
                </h3>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#666",
                  margin: 0
                }}>
                  Seamlessly integrate React libraries and components to create stunning, dynamic user interfaces with minimal effort.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" style={{ marginTop: "20px" }}>
          {/* GraphQL Feature */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              maxWidth: "400px",
              margin: "0 auto"
            }}>
              <div style={{ height: "140px", background: "linear-gradient(135deg, #2ed573 0%, #1e90ff 100%)", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔗</div>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", margin: 0 }}>GraphQL Data</h4>
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#1a1a1a"
                }}>
                  Unified Data Layer
                </h3>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#666",
                  margin: 0
                }}>
                  Pull data from multiple sources with GraphQL, creating a unified data layer for efficient content management.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Feature */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              maxWidth: "400px",
              margin: "0 auto"
            }}>
              <div style={{ height: "140px", background: "linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>🚀</div>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", margin: 0 }}>SEO Ready</h4>
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#1a1a1a"
                }}>
                  SEO Excellence
                </h3>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#666",
                  margin: 0
                }}>
                  Built-in SEO optimization with server-side rendering and automatic performance enhancements for better search rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Start Section */}
      <div className="container-fluid" style={{ padding: "80px 5%", background: "#fff" }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 style={{
              fontSize: "48px",
              fontWeight: "600",
              marginBottom: "24px",
              lineHeight: "1.2",
              color: "#1a1a1a",
              position: "relative",
              display: "inline-block"
            }}>
              Ready to Start Your Gatsby JS Project?
              <div style={{
                position: "absolute",
                bottom: "-8px",
                right: "0",
                width: "200px",
                height: "4px",
                background: "#ff6b6b",
                borderRadius: "2px"
              }}></div>
            </h2>
            <div style={{ marginTop: "40px" }}>
              <button style={{
                background: "#ad4f6fff",
                color: "#fff",
                border: "none",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "8px",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#c2185b";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#e91e63";
                e.target.style.transform = "translateY(0)";
              }}
              >
                Contact us
                <span style={{ fontSize: "18px" }}>→</span>
              </button>
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
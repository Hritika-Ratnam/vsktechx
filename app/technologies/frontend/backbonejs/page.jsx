"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";
export default function BackboneJSPage() {
  

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
                BackboneJS
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
                Backbone JS Development Company builds scalable,<br/>
fast web apps with modern tech for seamless experiences<br/>
via expert BackboneJS Development Services.
              </p>


            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
            <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
              <Image
                src="/images/backbone.png"
                alt="Backbone.js Development Illustration"
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
                    Top Backbone.js Development Services for Your Project
                  </h2>
                  <p style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    color: "#1D1E22",
                    maxWidth: "520px",
                    marginBottom: "0 0 30px"
                  }}>
                    Transform your Backbone.js structure with IT <br/>
                    Services India’s expertise. We dedicate over 300K <br/>
                    hours per project to deliver innovative and scalable <br/>solutions.
                    
                      
                    {/* {" "}combine innovation,<br/> performance, and security to turn your vision into <br/>digital success. */}
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
                      Backbone.js Web App Development
                    </h3>
                    <p style={{ 
                      fontSize: "20px",
                      lineHeight: "1.6",
                      padding: "16px 0 0",
                      color: "#fff",
                      opacity: "0.9"
                    }}>
                      We build single-page apps with Backbone.js <br/>using Models, 
                      Views, and Routers for a <br/>structured and impactful digital presence.</p>
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
              Why Choose Backbone Js ?
              
            </h2>
            <p style={{ 
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#1D1E22",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "0 20px"
            }}>
              Backbone JS powers modern brands with a high-performance<br/>
framework, delivering fast, scalable websites built<br/>
for growth and SEO success.
            </p>
          </div>
        </div>
      </div>

      {/* Backbone.js Development Services Section */}
      <div className="container-fluid" style={{ padding: "80px 5%", background: "#f8f9fa" }}>
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-7 col-md-12">
            <h2 style={{
              fontSize: "48px",
              fontWeight: "600",
              marginBottom: "30px",
              lineHeight: "1.2",
              color: "#1a1a1a"
            }}>
              Backbone.js Development Services by Industry-<br/>Leading Experts
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#666",
              maxWidth: "580px",
              marginBottom: "0"
            }}>
              Achieve exceptional scalability and performance <br/>
              for your Backbone.js applications with IT Services <br/>
              India. Our team dedicates 300K+ hours to deliver<br/>
               tailored, innovative results.
            </p>
          </div>

          {/* Right Pink Box */}
          <div className="col-lg-5 col-md-12">
            <div style={{
              background: "linear-gradient(135deg, #ff9a9e 0%, #eb79c7ff 50%, #fecfef 100%)",
              padding: "50px",
              borderRadius: "20px",
              color: "#1a1a1a",
              boxShadow: "0 10px 200px rgba(255, 154, 158, 0.3)"
            }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#1a1a1a"
              }}>
                Dynamic Scaling Modules
              </h3>
              <p style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#1a1a1a",
                margin: "0"
              }}>
                Scale web applications seamlessly with <br/>Backbone.js. Its modular architecture and <br/>
                easy integrations streamline processes like <br/>templating, authentication, and dynamic<br/>
                 updates for scalable growth.
              </p>
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
              Ready to Start Your Backbone JS Project?
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
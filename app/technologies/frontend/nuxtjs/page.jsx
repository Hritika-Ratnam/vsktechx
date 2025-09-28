"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";
import { useState } from "react";

// Nuxt JS Services Section Component
function NuxtJSServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      {
        title: "Nuxt 3 Development",
        description: "Empower your digital platforms with Nuxt 3—faster build times, native TypeScript support, and hybrid rendering for maximum performance and flexibility."
      },
      {
        title: "Headless CMS Integration",
        description: "Connect Nuxt.js with headless CMSs like Strapi, Sanity, or Contentful to build content-rich, decoupled web apps that are easier to scale and maintain."
      },
      {
        title: "Real-Time Web Apps",
        description: "Build responsive real-time experiences using Nuxt.js with WebSockets or GraphQL—perfect for live dashboards, marketplaces, or SaaS platforms."
      }
    ],
    [
      {
        title: "Nuxt.js for Jamstack",
        description: "Adopt the Jamstack approach with Nuxt.js for lightning-fast static sites, improved security, and seamless CI/CD integrations—ideal for modern businesses."
      },
      {
        title: "SEO-Friendly Architecture",
        description: "Implement built-in meta handling, schema markup, and pre-rendering with Nuxt.js to outrank competitors and boost visibility across search engines."
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container-fluid" style={{ padding: "80px 5%", background: "#f8f9fa" }}>
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-5">
          <h2 style={{
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "24px",
            lineHeight: "1.2",
            color: "#1a1a1a",
            maxWidth: "900px",
            margin: "0 auto 24px"
          }}>
            Nuxt JS Development Company for<br/>
            Animated, Immersive Web Experiences
          </h2>
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#1d1e22",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Deliver rich, interactive UI with Nuxt JS using SSR,<br/>
            lazy loading, and dynamic visual performance.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        {slides[currentSlide].map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div style={{
              background: "#73f3c6ff",
              padding: "30px 20px",
              borderRadius: "4px",
              height: "100%",
              boxShadow: "0 4px 20px rgba(9, 236, 119, 0.08)",
              textAlign: "left"
            }}>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "16px",
                color: "#1d1e22"
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: "14px",
                lineHeight: "1.5",
                color: "#1d1e22",
                margin: 0
              }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="row justify-content-center" style={{ marginTop: "40px" }}>
        <div className="col-12 text-center">
          <div style={{ display: "inline-flex", gap: "12px" }}>
            <button
              onClick={prevSlide}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px"
              }}
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px"
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NuxtJSPage() {
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
                Top Nuxt JS Development Company
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
                Build blazing-fast, production-ready web apps with<br/>
Our best-in-class Nuxt JS Development Services.
              </p>


            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
            <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
              <Image
                src="/images/nuxt.png"
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
                    Best Nuxt.js Development Services Tailored for <br/>Growth
                  </h2>
                  <p style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    color: "#1D1E22",
                    maxWidth: "520px",
                    marginBottom: "0 0 30px"
                  }}>
                    Leverage top-rated Nuxt.js development services <br/>
                    to build fast, secure, and scalable web applications.</p>
                </div>
                <div className="col-lg-6">
                  <div style={{
                    background: "#1d1e22",
                    color: "#FFFFFF",
                    padding: "50px",
                    borderRadius: "20px",
                    height: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}>
                    <h3 style={{
                      fontSize: "26px",
                      fontWeight: "500",
                      marginBottom: "0px 0px 15px",
                      textDecoration: "underline"
                    }}>
                      Custom Nuxt.js App <br/>Development
                    </h3>
                    <p style={{
                      fontSize: "20px",
                      lineHeight: "1.6",
                      padding: "16px 0 0",
                      color: "#fff",
                      opacity: "0.9"
                    }}>
                      Get tailored single-page and server-rendered <br/>applications with Nuxt.js that
                      boost UX,<br/> speed, and conversions. We specialize in <br/>creating custom,
                      business-driven web apps <br/>that scale and perform across devices.</p>
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
              Raise Capital with Nuxt JS MVPs

            </h2>
            <p style={{
              fontSize: "20px",
              lineHeight: "1.4",
              color: "#1D1E22",
              maxWidth: "700px",
              margin: "0 auto",
              padding: "0 20px"
            }}>
              Impress investors with top-tier Nuxt JS Development Services—build<br/>
fast, scalable MVPs that highlight performance, SEO value, and<br/>
seamless user experience to accelerate funding and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Nuxt JS Development Company Section */}
      <NuxtJSServicesSection />






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
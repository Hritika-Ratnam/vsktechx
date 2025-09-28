"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function laravelPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ padding: '120px 0 40px', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 600,
                  color: '#1d1e22',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                  letterSpacing: '-1px'
                }}>
                  CodeIgniter <br/>Development Services
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#1d1e22',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  lineHeight: 1.6
                }}>
                  Leverage the power of CodeIgniter with our top CodeIgniter web development services.<br/>
Our skilled team creates fully-functional PHP solutions based on MVC architecture,<br/>
compatible with diverse hosting environments.
                </p>
                <button style={{
                  background: '#ff1493',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Describe Your Future Project
                </button>
              </div>
            </div>
          </div>
        </section>

{/* Laravel Development Partner Section */}
        <section style={{ padding: '40px 0', background: '#f8f9fa' }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column - Text Content */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 style={{
                  fontWeight: 600,
                  fontSize: '2.6rem',
                  color: '#1d1e22',
                  marginBottom: '24px',
                  lineHeight: 1.4
                }}>
                  Robust CodeIgniter web development services to drive your business growth
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  CodeIgniter web development company, flexible services.


                </p>

              </div>

              {/* Right Column - Image */}
              <div className="col-lg-6">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  minHeight: '300px'
                }}>
                  <img
                    src="/images/technologies/person.png"
                    alt="Laravel Development Services"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      maxHeight: '400px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top PHP CodeIgniter Web Development Expert Services Section */}
        <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 600,
                  color: '#1d1e22',
                  marginBottom: '20px',
                  lineHeight: 1.3
                }}>
                  Top PHP CodeIgniter Web<br/>
                  Development Expert Services
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto 60px',
                  lineHeight: 1.6
                }}>
                  As a top CodeIgniter web development company, we provide feature-rich,<br/>
                  user-friendly applications with strong performance to elevate your business<br/>
                  processes.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Left Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {/* Rich collection of libraries */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Rich collection of libraries for enhanced functionality.
                    </p>
                  </div>

                  {/* Open-source framework */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Open-source framework with access to public libraries.
                    </p>
                  </div>

                  {/* No restrictive coding limitations */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      No restrictive coding limitations for developers.
                    </p>
                  </div>

                  {/* Outstanding performance */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Outstanding performance for high-speed apps.
                    </p>
                  </div>

                  {/* Lightweight design */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Lightweight design for efficient performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {/* RESTful resource controllers */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Supports RESTful resource controllers for seamless integration.
                    </p>
                  </div>

                  {/* MVC architecture */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      MVC architecture provides flexibility and easy management.
                    </p>
                  </div>

                  {/* Compatible with multiple PHP versions */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Compatible with multiple PHP versions and configurations.
                    </p>
                  </div>

                  {/* No need to learn separate template language */}
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1493',
                      marginTop: '8px',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      No need to learn a separate template language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is CodeIgniter Section */}
        <section style={{ padding: '40px 0', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div style={{
                  border: '2px solid #ff1493',
                  borderRadius: '22px',
                  padding: '40px',
                  marginBottom: '40px',
                  background: '#ffffff'
                }}>
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <h3 style={{
                        fontWeight: 600,
                        fontSize: '2rem',
                        color: '#1d1e22',
                        marginBottom: '20px',
                        lineHeight: 1.4
                      }}>
                        What is CodeIgniter web development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        CodeIgniter is a lightweight, <strong>open-source PHP web framework</strong> designed for building
                        dynamic web applications with simplicity and speed. Created by EllisLab, CodeIgniter follows the
                        Model-View-Controller (MVC) pattern and provides developers with a rich set of libraries for
                        common tasks, making it ideal for rapid web development with minimal configuration.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  border: '2px solid #ff1493',
                  borderRadius: '22px',
                  padding: '40px',
                  background: '#ffffff'
                }}>
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <h3 style={{
                        fontWeight: 600,
                        fontSize: '2rem',
                        color: '#1d1e22',
                        marginBottom: '20px',
                        lineHeight: 1.4
                      }}>
                        Why choose CodeIgniter for web development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        CodeIgniter offers exceptional simplicity and performance with its
                        small footprint, easy installation, and straightforward configuration.
                        Its flexible MVC architecture, extensive library collection, and
                        excellent documentation make it perfect for developers who need
                        to build robust web applications quickly without complex setup
                        or steep learning curves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        


      </main>

      <style jsx>{`
        /* Responsive styles for orange curvy underlines and spacing */
        .hero-paragraph {
          margin-top: 60px;
        }

        .expertise-underline {
          max-width: 280px;
          min-width: 200px;
        }

        /* Feature card hover effects */
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
        }

        /* Getting started card hover effects */
        .getting-started-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15) !important;
        }

        @media (max-width: 768px) {
          .hero-underline {
            top: 50px !important;
            max-width: 280px !important;
          }

          .section-underline {
            max-width: 100px !important;
            margin-top: -5px !important;
          }

          .expertise-underline {
            max-width: 220px !important;
            min-width: 180px !important;
            margin-top: 5px !important;
          }

          .hero-paragraph {
            margin-top: 50px !important;
          }
        }

        @media (max-width: 576px) {
          .hero-underline {
            top: 45px !important;
            max-width: 240px !important;
          }

          .section-underline {
            max-width: 80px !important;
            margin-top: -3px !important;
          }

          .expertise-underline {
            max-width: 180px !important;
            min-width: 140px !important;
            margin-top: 3px !important;
          }

          .hero-paragraph {
            margin-top: 40px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-underline {
            top: 40px !important;
            max-width: 200px !important;
          }

          .expertise-underline {
            max-width: 150px !important;
            min-width: 120px !important;
            margin-top: 2px !important;
          }

          .hero-paragraph {
            margin-top: 35px !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}

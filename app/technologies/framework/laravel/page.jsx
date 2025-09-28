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
                  Laravel Development<br/>
                  Services for Web Apps
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#666',
                  maxWidth: '700px',
                  margin: '0 auto 40px',
                  lineHeight: 1.6
                }}>
                  Enhance your web app using our Laravel Development<br/>
                  Company—quick, high-quality, and versatile.
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

        {/* Outstanding Skills Section */}
        <section style={{ padding: '40px 0', background: '#f8f9fa' }}>
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
                  Outstanding Skills in<br/>
                  Laravel Development
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: 1.6
                }}>
                  Develop feature-rich, visually appealing Laravel web experiences with<br/>
                  reliable load-bearing capacities to optimize business processes and drive<br/>
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Laravel Section */}
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
                        What is Laravel web development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Laravel is a powerful, <strong>open-source PHP web framework</strong> designed for building
                        modern web applications with elegant syntax and robust features. Created by Taylor Otwell,
                        Laravel provides developers with tools for routing, authentication, sessions, caching, and
                        database management, making it ideal for rapid application development.
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
                        Why choose Laravel for web development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Laravel offers exceptional developer productivity with its
                        expressive syntax, built-in ORM (Eloquent), comprehensive
                        testing tools, and extensive ecosystem. Its MVC architecture,
                        security features, and scalability make it perfect for
                        everything from small websites to enterprise-level
                        applications with complex business logic.
                      </p>
                    </div>
                  </div>
                </div>
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
                  Your Laravel Development Partner for Visionary Businesses
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  Work with our expert Laravel developers <br/>free for 3 days—no commitment.
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

        {/* Laravel Features Section */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 style={{
                  fontWeight: 600,
                  fontSize: '2.8rem',
                  color: '#1d1e22',
                  marginBottom: '20px',
                  lineHeight: 1.4
                }}>
                  Laravel Framework Features
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Discover the powerful features that make Laravel the perfect choice for modern web development
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Elegant Syntax */}
              <div className="col-lg-3 col-md-6">
                <div style={{
                  padding: '40px 30px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }} className="feature-card">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    ✨
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    Elegant Syntax
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Write clean, expressive code with Laravel's intuitive syntax that makes development enjoyable and productive.
                  </p>
                </div>
              </div>

              {/* MVC Architecture */}
              <div className="col-lg-3 col-md-6">
                <div style={{
                  padding: '40px 30px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }} className="feature-card">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    🏗️
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    MVC Architecture
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Build scalable applications with Laravel's Model-View-Controller pattern for organized, maintainable code.
                  </p>
                </div>
              </div>

              {/* Eloquent ORM */}
              <div className="col-lg-3 col-md-6">
                <div style={{
                  padding: '40px 30px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }} className="feature-card">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    🗄️
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    Eloquent ORM
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Work with databases using beautiful, simple ActiveRecord implementation for managing data relationships.
                  </p>
                </div>
              </div>

              {/* Security Features */}
              <div className="col-lg-3 col-md-6">
                <div style={{
                  padding: '40px 30px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }} className="feature-card">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    🔒
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    Security Features
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Built-in protection against common vulnerabilities like SQL injection, CSRF, and XSS attacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outstanding Skills in Laravel Development Section */}
        <section style={{ padding: '40px 0', background: '#f8f9fa' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 style={{
                  fontWeight: 600,
                  fontSize: '2.8rem',
                  color: '#1d1e22',
                  marginBottom: '20px',
                  lineHeight: 1.3
                }}>
                  Outstanding Skills in<br/>
                  Laravel Development
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  lineHeight: 1.6
                }}>
                  Develop feature-rich, visually appealing Laravel web experiences with<br/>
                  reliable load-bearing capacities to optimize business processes and drive<br/>
                  growth.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Left Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {/* Sophisticated Template Engines */}
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
                      <strong>Sophisticated Template Engines for Dynamic Content.</strong>
                    </p>
                  </div>

                  {/* Optimized Routing Systems */}
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
                      <strong>Optimized Routing Systems for Smooth Data Flow.</strong>
                    </p>
                  </div>

                  {/* Seamless Package Management */}
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
                      <strong>Seamless Package Management Solutions.</strong>
                    </p>
                  </div>

                  {/* Robust Caching Mechanisms */}
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
                      <strong>Robust Caching Mechanisms.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {/* RESTful Controllers */}
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
                      <strong>RESTful Controllers for Resource Management.</strong>
                    </p>
                  </div>

                  {/* Secure Authentication */}
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
                      <strong>Secure Authentication for User Connections.</strong>
                    </p>
                  </div>

                  {/* Database Migration Management */}
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
                      <strong>Database Migration Management Systems.</strong>
                    </p>
                  </div>

                  {/* Comprehensive Email Handling */}
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
                      <strong>Comprehensive Email Handling Systems.</strong>
                    </p>
                  </div>

                  {/* Efficient Session Control */}
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
                      <strong>Efficient Session Control Mechanisms.</strong>
                    </p>
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

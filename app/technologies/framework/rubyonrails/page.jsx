"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function rubyonrailsPage() {
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
                  Ruby on Rails <br/>Development Services
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#1d1e22',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  lineHeight: 1.6
                }}>
                  Harness the power of Ruby on Rails with our expert Rails web development services.<br/>
Our experienced team builds scalable, secure Ruby web applications following<br/>
the "Convention over Configuration" philosophy for rapid development.
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

{/* Ruby on Rails Development Partner Section */}
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
                  Professional Ruby on Rails web development services to accelerate your digital transformation
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  Leading Ruby on Rails development company delivering scalable, secure, and maintainable Ruby web applications.


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
                    alt="Ruby on Rails Development Services"
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

        {/* Top Ruby on Rails Web Development Expert Services Section */}
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
                  Expert Ruby on Rails Web<br/>
                  Development Services
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto 60px',
                  lineHeight: 1.6
                }}>
                  As a leading Ruby on Rails development company, we deliver robust,<br/>
                  scalable web applications with clean architecture and rapid development<br/>
                  to transform your business operations.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Left Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {/* Convention over Configuration */}
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
                      Convention over Configuration for faster development with sensible defaults.
                    </p>
                  </div>

                  {/* MVC Architecture */}
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
                      Model-View-Controller (MVC) architecture for clean code organization.
                    </p>
                  </div>

                  {/* Active Record ORM */}
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
                      Active Record ORM for intuitive database interactions.
                    </p>
                  </div>

                  {/* DRY Principle */}
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
                      DRY (Don't Repeat Yourself) principle for maintainable code.
                    </p>
                  </div>

                  {/* Built-in Testing */}
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
                      Built-in testing framework for reliable application development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {/* RESTful APIs */}
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
                      Built-in support for RESTful API development and JSON responses.
                    </p>
                  </div>

                  {/* Scaffolding */}
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
                      Powerful scaffolding for rapid prototyping and development.
                    </p>
                  </div>

                  {/* Gems Ecosystem */}
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
                      Rich ecosystem of gems for extending functionality.
                    </p>
                  </div>

                  {/* Security Features */}
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
                      Built-in security features protecting against common web vulnerabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Ruby on Rails Section */}
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
                        What is Ruby on Rails web development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Ruby on Rails is a server-side <strong>Ruby web framework</strong> that follows the
                        Model-View-Controller (MVC) architectural pattern. Built with the philosophy of
                        "Convention over Configuration" and "Don't Repeat Yourself" (DRY), Rails enables
                        rapid development of database-backed web applications with elegant, readable code.
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
                        Why choose Ruby on Rails for web development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Ruby on Rails offers exceptional developer productivity with its convention-driven approach,
                        comprehensive built-in features, and vibrant ecosystem. Its Active Record ORM, scaffolding
                        capabilities, testing framework, and security features make it ideal for building
                        scalable web applications rapidly while maintaining clean, maintainable code.
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

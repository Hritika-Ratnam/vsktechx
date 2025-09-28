"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function kotlinPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '90vh', marginTop: 120 }}>
          <div className="w-100 text-center" style={{ position: 'relative' }}>
            <h1
              style={{
                fontSize: '6vw',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: -30,
                letterSpacing: '-2px',
              }}
            >
              Top <span style={{ position: 'relative', display: 'inline-block' }}>
                kotlin
                <svg
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '240px',
                    height: '80px',
                    zIndex: -1
                  }}
                  viewBox="0 0 140 80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="70"
                    cy="40"
                    rx="105"
                    ry="25"
                    fill="none"
                    stroke="#4facfe"
                    strokeWidth="4"
                    opacity="0.8"
                  />
                </svg>
              </span> App <br/>Development Company
            </h1>
            
          </div>
          <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
              A modern, statically typed programming language for building high-performance Android apps, cross-platform mobile solutions, and enterprise applications with concise, expressive code.
</p>
          </div>
        </div>

        {/* What is Section */}
        <section style={{ padding: '40px 0', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div style={{
                  border: '2px solid #52f840ff',
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
                        What is Kotlin app development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Kotlin is a modern, statically typed programming language developed by JetBrains.
                        It's <strong>100% interoperable with Java</strong> and officially supported by Google for
                        Android development. Kotlin enables developers to build robust, high-performance mobile
                        applications with concise, expressive code and enhanced safety features.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  border: '2px solid #52f840ff',
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
                        Why choose Kotlin for mobile app development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Kotlin offers 100% Java interoperability, null safety,
                        and concise syntax that reduces boilerplate code by up to 40%.
                        As Google's preferred language for Android development,
                        Kotlin provides better performance, enhanced readability,
                        and seamless integration with existing Java codebases,
                        making it the ideal choice for modern mobile applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build Strong PHP Development Solutions Section */}
        <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
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
                  We Are a Full-Cycle Kotlin App Development Partner for Global Enterprises
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  Kick off your Kotlin app journey with a 3-day free trial.
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
                    alt="PHP Development Services"
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

        {/* Open Source Features Section */}
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
                  Kotlin Key Features
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Discover the powerful features that make Kotlin the perfect choice for modern mobile development
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Performant */}
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
                    ⚡
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    Null Safety
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Eliminates null pointer exceptions at compile time, making your apps more stable and reliable.
                  </p>
                </div>
              </div>

              {/* Cross-platform */}
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
                    📱
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    Java Interoperability
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    100% compatible with Java, allowing seamless integration with existing Java libraries and frameworks.
                  </p>
                </div>
              </div>

              {/* React, Angular, or Vue */}
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
                    ⚛️
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    React, Angular, or Vue
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Built-in support for JavaScript Frameworks, or use without any framework at all.
                  </p>
                </div>
              </div>

              {/* Light & Dark mode */}
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
                    🌓
                  </div>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#1d1e22',
                    marginBottom: '16px'
                  }}>
                    Coroutines Support
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Built-in support for asynchronous programming with coroutines for efficient, non-blocking operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to dive in Section */}
        <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 style={{
                  fontWeight: 700,
                  fontSize: '3rem',
                  color: '#1d1e22',
                  marginBottom: '20px',
                  lineHeight: 1.3
                }}>
                  Ready to dive in?
                </h2>
                <p style={{
                  fontSize: '1.3rem',
                  color: '#666',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.5
                }}>
                  Here's how to get started building apps with Kotlin
                </p>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              {/* Install */}
              <div className="col-lg-4 col-md-6">
                <div style={{
                  padding: '50px 40px',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }} className="getting-started-card">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: '#e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 30px',
                    fontSize: '32px'
                  }}>
                    ⬇️
                  </div>
                  <h3 style={{
                    fontWeight: 600,
                    fontSize: '1.8rem',
                    color: '#1d1e22',
                    marginBottom: '20px'
                  }}>
                    Setup
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Install Android Studio and configure Kotlin plugin to start building powerful mobile applications.
                  </p>
                </div>
              </div>

              {/* Guides */}
              <div className="col-lg-4 col-md-6">
                <div style={{
                  padding: '50px 40px',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }} className="getting-started-card">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 30px',
                    fontSize: '32px',
                    color: 'white'
                  }}>
                    📖
                  </div>
                  <h3 style={{
                    fontWeight: 600,
                    fontSize: '1.8rem',
                    color: '#1d1e22',
                    marginBottom: '20px'
                  }}>
                    Learn
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Master Kotlin fundamentals and Android development patterns through comprehensive tutorials and examples.
                  </p>
                </div>
              </div>

              {/* Components */}
              <div className="col-lg-4 col-md-6">
                <div style={{
                  padding: '50px 40px',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }} className="getting-started-card">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 30px',
                    fontSize: '32px',
                    color: 'white'
                  }}>
                    🧩
                  </div>
                  <h3 style={{
                    fontWeight: 600,
                    fontSize: '1.8rem',
                    color: '#1d1e22',
                    marginBottom: '20px'
                  }}>
                    Build
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Create your first Kotlin Android app using modern development tools and best practices.
                  </p>
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

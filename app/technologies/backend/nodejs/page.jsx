"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";
export default function NodePage() {
  return (
    <>
      <Header />
      <main>
        <div className="container" style={{ minHeight: '90vh', marginTop: 120, paddingTop: '80px' }}>
          <div className="row align-items-center" style={{ minHeight: '70vh' }}>
            {/* Left Column - Text Content */}
            <div className="col-lg-7 col-md-6">
              <h1
                style={{
                  fontSize: 'clamp(2rem, 6vw, 6rem)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  marginBottom: '32px',
                  letterSpacing: '-1px',
                  color: '#1d1e22'
                }}
              >
                Node.js<br />
                Development<br />
                Company
              </h1>

              <p style={{
                fontSize: '1.1rem',
                maxWidth: '500px',
                margin: '0',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '40px'
              }}>
                Build fast, scalable web applications with Node.js,<br/>
                    powering millions of websites, real-time apps,<br/>
                    APIs, and robust backend systems.
              </p>
            </div>
              {/* Right Image Section */}
                        <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
                          <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
                            <Image
                              src="/images/node.png"
                              alt="Express.js Development Illustration"
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
                  We serve as a complete partner for ambitious enterprises worldwide
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.8
                }}>
                  Experience our expertise with a three-day <br/>free trial.
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


  <section className="py-5" style={{ background: 'transparent', paddingLeft: '18vw', paddingRight: '12vw' }}>
          <div className="container" style={{ maxWidth: '1100px' }}>
            <div className="row align-items-start mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 style={{ fontWeight: 600, fontSize: '2.4rem', lineHeight: 1.2 }}>
                  Node.js Development Services
                  <p>IT Services India offers scalable Node.js solutions backed by 17+ years of expertise and 3,000+ successful projects, making us your trusted partner.</p>
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '42px 38px' }}>
                      <h4 style={{ fontWeight: 600 }}>Node.js for Backend Development</h4>
                      <p style={{ marginBottom: 0 }}>
                        Optimize your backend with Node.js for high traffic and data-heavy operations. 
                        Our solutions ensure reliable performance and robust scalability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: '#1d1e22', color: '#fff', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 600 }}>Node.js API Development</h4>
                  <p style={{ marginBottom: 0 }}>
                    Design secure, efficient APIs with Node.js. 
                    Enable seamless data exchange, real-time interactions, 
                    and scalable API solutions for your systems.
                    </p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Node.js Plugin Development</h4>
                  <p style={{ marginBottom: 0 ,linewidth: '1.5rem' }}>
                    Enhance apps with modular Node.js plugins. Our development services provide scalable, customizable plugins for improved functionality and usability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Experts in Solving AngularJS Development Challenges Section */}
        <section style={{ padding: '80px 0 40px 0', background: '#fff' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Section Header */}
                <div className="text-center mb-5">
                  <h2 style={{
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    color: '#1d1e22',
                    marginBottom: '24px',
                    lineHeight: 1.5
                  }}>
                    We Design & Develop Node.js Apps
Development for various industries
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#1d1e22',
                    maxWidth: '500px',
                    margin: '0 auto',
                    lineHeight: 1.8
                  }}>
                    Build scalable Node.js apps with innovative solutions to tackle
challenges and drive efficient business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mark Down Success with IT Services India Node.js Development Team Section */}
        <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Section Header */}
                <div className="text-center mb-5">
                  <h2 style={{
                    fontWeight: 700,
                    fontSize: '2.8rem',
                    color: '#1d1e22',
                    marginBottom: '24px',
                    lineHeight: 1.34                  }}>
                    Mark Down Success with IT Services<br />
                    India Node.js Development Team
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#666',
                    maxWidth: '700px',
                    margin: '0 auto 60px auto',
                    lineHeight: 1.7
                  }}>
                    Stay ahead in the dynamic tech landscape with our cutting-edge Node.js
                    solutions. Recommended by 98% of C-level executives, IT Services India is
                    your trusted partner for building scalable, high-performance applications.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="row g-4">
                  <div className="col-md-6">
                    <div style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '32px',
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <span style={{
                          color: '#007bff',
                          fontSize: '1.2rem',
                          marginRight: '12px',
                          marginTop: '2px'
                        }}>→</span>
                        <div>
                          <h4 style={{ fontWeight: 600, color: '#1d1e22', marginBottom: '8px' }}>
                            Expert Team:
                          </h4>
                          <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>
                            60% senior developers skilled in modern tech.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '32px',
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <span style={{
                          color: '#007bff',
                          fontSize: '1.2rem',
                          marginRight: '12px',
                          marginTop: '2px'
                        }}>→</span>
                        <div>
                          <h4 style={{ fontWeight: 600, color: '#1d1e22', marginBottom: '8px' }}>
                            Strategic Insights:
                          </h4>
                          <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>
                            Optimize investments with expert consultations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '32px',
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <span style={{
                          color: '#007bff',
                          fontSize: '1.2rem',
                          marginRight: '12px',
                          marginTop: '2px'
                        }}>→</span>
                        <div>
                          <h4 style={{ fontWeight: 600, color: '#1d1e22', marginBottom: '8px' }}>
                            Scalability:
                          </h4>
                          <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>
                            6X rapid scaling for diverse Node.js needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '32px',
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <span style={{
                          color: '#007bff',
                          fontSize: '1.2rem',
                          marginRight: '12px',
                          marginTop: '2px'
                        }}>→</span>
                        <div>
                          <h4 style={{ fontWeight: 600, color: '#1d1e22', marginBottom: '8px' }}>
                            Agile Development:
                          </h4>
                          <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>
                            Faster delivery with adaptive processes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '32px',
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <span style={{
                          color: '#007bff',
                          fontSize: '1.2rem',
                          marginRight: '12px',
                          marginTop: '2px'
                        }}>→</span>
                        <div>
                          <h4 style={{ fontWeight: 600, color: '#1d1e22', marginBottom: '8px' }}>
                            Modern Architectures:
                          </h4>
                          <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>
                            Microservices-ready for seamless scaling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '32px',
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <span style={{
                          color: '#007bff',
                          fontSize: '1.2rem',
                          marginRight: '12px',
                          marginTop: '2px'
                        }}>→</span>
                        <div>
                          <h4 style={{ fontWeight: 600, color: '#1d1e22', marginBottom: '8px' }}>
                            Unmatched Security:
                          </h4>
                          <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>
                            Robust protection at all development stages.
                          </p>
                        </div>
                      </div>
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
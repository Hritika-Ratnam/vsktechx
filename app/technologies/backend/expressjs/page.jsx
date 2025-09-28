"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Image from "next/image";
export default function ExpressPage() {
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
                Express.js<br />
                Development<br />
                Services
              </h1>

              <p style={{
                fontSize: '1.1rem',
                maxWidth: '500px',
                margin: '0',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '40px'
              }}>
                An Express.js development company delivers scalable,<br/>
                fast web applications using cutting-edge technologies<br/>
                for seamless digital solutions.
              </p>
            </div>
              {/* Right Image Section */}
                        <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
                          <div className="image-container" style={{ textAlign: "center", width: "100%" }}>
                            <Image
                              src="/images/expressjs.png"
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
                  Top-Quality Express.js Development by Professionals
                  <p>Collaborate with elite IT Services professionals in India to enhance your Express.js frameworks for superior performance and scalability. Our team focuses on delivering outstanding innovation and results.</p>
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '42px 38px' }}>
                      <h4 style={{ fontWeight: 500 }}>Manage I/O in Real-Time</h4>
                      <p style={{ marginBottom: 0 }}>
                        Harness Express.js’s non-blocking I/O and event-driven model to enhance real-time responsiveness, improving user experiences by 5x.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: '#1d1e22', color: '#fff', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Scale with Dynamic Modules</h4>
                  <p style={{ marginBottom: 0 }}>
                    Achieve zero downtime with Express's templating and middleware, 
                    simplifying tasks like authentication and logging.
                    </p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Cross-Platform Compatibility</h4>
                  <p style={{ marginBottom: 0 }}>
                    Use ExpressJS for multi-platform apps with a single codebase, 
                    delivering 18x ROI, reducing costs by 60%, and scaling efficiently.</p>
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
                    We Design & Develop Express.js Solutions for Various Industries
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#1d1e22',
                    maxWidth: '500px',
                    margin: '0 auto',
                    lineHeight: 1.8
                  }}>
                    Tailored technology solutions to tackle industry-
                    specific challenges and drive business value.
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
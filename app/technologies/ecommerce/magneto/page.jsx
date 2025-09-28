"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function magnetoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ padding: '120px 0 40px', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p>Magento E-commerce Development</p>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 600,
                  color: '#1d1e22',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                  letterSpacing: '-1px'
                }}>
                  #1 Magento Development <br/>Company
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#1d1e22',
                  maxWidth: '600px',
                  margin: '0 auto 40px',
                  lineHeight: 1.6
                }}>
                  Expert Magento development services for secure, scalable,
and visually-rich websites and eCommerce solutions
designed to deliver a superior shopping experience.
                </p>
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
                  Looking for Magento Web Development Sevices? 
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  Let’s Discuss your project and we will get
back to you soon with our insights.
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
                 From engaging user experiences<br/>
to streamlined customer channels
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#1d1e22',
                  maxWidth: '800px',
                  margin: '0 auto 60px',
                  lineHeight: 1.6
                }}>
                  Our design aim is to enhance your product's value, helping customers<br/>
to fully experience its benefits. This is how we assist you in
creating impactful marketing automation tools.
                </p>
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

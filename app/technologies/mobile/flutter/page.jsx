"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function iosPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '90vh', marginTop: 120 }}>
          <div className="w-100 text-center" style={{ position: 'relative' }}>
            <h1
              style={{
                fontSize: '5vw',
                fontWeight: 500,
                lineHeight: 1.0,
                marginBottom: -30,
                letterSpacing: '-2px',
              }}
            >
              Top Flutter App<br/>Development Company for<br/> Scalable Cross-Platform <br/>Solutions
            </h1>
            
          </div>
          <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
              As a leading flutter app development company, we have a proven<br/>
record of creating successful products, making us an ideal partner<br/>
for businesses seeking flutter app development services.
</p>
          </div>
        </div>

        {/* What is Flutter app development Section */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
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
                        What is Flutter app development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Flutter is an open-source, <strong>cross-platform app development</strong> framework, which uses
                        the programming language, Dart. Developed by Google, the Flutter
                        framework enables you to develop iOS and Android applications with a single
                        code to build native, performant apps.
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
                        How does Flutter compare to native app development ?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#1d1e22',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        Flutter allows you to write one codebase
                        for both iOS and Android, significantly
                        reducing development time and cost.
                        While native apps may offer slightly better
                        performance, Flutter's near-native
                        performance is usually sufficient for most
                        apps.
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
                  Your Flutter App Development Partner for Visionary Businesses
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  Work with our expert Flutter app developers <br/>free for 3 days—no commitment.
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

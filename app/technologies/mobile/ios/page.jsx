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
            <p>iOS Mobile App Development Services for Scalable Growth</p>
            <h1
              style={{
                fontSize: '7vw',
                fontWeight: 500,
                lineHeight: 1.1,
                marginBottom: -30,
                letterSpacing: '-2px',
              }}
            >
              #1 iOS App Development<br />Company
            </h1>
            
          </div>
          <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
              As a leading iOS app development company, we build scalable,<br/>
              secure, and high-performance iOS apps that elevate your<br/>
              brand and deliver real business value.
</p>
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
                  Build strong, adaptable IOS<br/>
                  Development solutions to<br/>
                  propel your business growth
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  Experience our services at no cost.
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
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="row align-items-start mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 style={{ fontWeight: 600, fontSize: '2.8rem', lineHeight: 1.3 }}>
                  Top iOS App Development Services You Can Trust
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '42px 38px' }}>
                      <h4 style={{ fontWeight: 500 }}>Trusted iOS Mobile App <br/>Consulting Services</h4>
                      <p style={{ marginBottom: 0 }}>
                        Our iOS experts evaluate your iOS app goals and provide tailored technical strategies for impactful mobile growth.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: '#1d1e22', color: '#fff', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>iOS App Code Review & Audit</h4>
                  <p style={{ marginBottom: 0 }}>
                    We perform deep source code audits to fix bugs, optimize logic, and ensure Apple-compliant, secure Swift-based development.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Location-Based Services</h4>
                  <p style={{ marginBottom: 0 }}>
                    We implement advanced location tracking, mapping, and geofencing to power contextual app experiences</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ReactJS Development Solutions Section */}
  {/* Add extra space before the section */}
  <div style={{ height: 38 }}></div>
  <section className="py-5" style={{ background: '#f6f6f6', paddingLeft: '0', paddingRight: '0' }}>
          <div className="container-fluid" style={{ maxWidth: '1600px' }}>
            <div className="row g-0 align-items-stretch">
              {/* Left Side: Heading */}
              <div className="col-12 text-center" style={{ background: '#f6f6f6', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingBottom: '40px' }}>
                <div style={{ position: 'relative' }}>
                  <h2 style={{ fontWeight: 600, fontSize: '2.5rem', color: '#1d1e22', margin: 0, lineHeight: 1.5}}>
                    Explore  Our iOS App <br/>Development Expertise
                  </h2>
                  <p>We build cutting-edge iOS apps using Swift and native<br/>
Apple tools to drive innovation, growth, and digital success.</p>
                </div>
              </div>
            </div>
            {/* Cards Section Below - Carousel */}
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
              <div id="solutions-carousel" style={{ display: 'flex', gap: 24, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 8, justifyContent: 'center' }}>
                {/* Card 1 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>IOT and Wearable App</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                    We build iOS apps that connect seamlessly with smart devices, wearables, and IoT ecosystems in real-time.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8}}>Secure Payment Gateway</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                     We integrate Apple Pay and third-party gateways, utilizing high-level encryption to ensure smooth in-app transactions.
                     </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8}}>VoIP Calling Integration</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                      We enable high-definition (HD) voice and video calling within iOS apps using advanced Voice over Internet Protocol (VoIP) protocols and call features.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        

        {/* Benefits of iOS App Development Section */}
        <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column - Text Content */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 style={{
                  fontWeight: 600,
                  fontSize: '2.6rem',
                  color: '#1d1e22',
                  marginBottom: '40px',
                  lineHeight: 1.2
                }}>
                  Benefits of iOS App Development
                </h2>

                {/* Benefit 1 */}
                <div className="benefit-item" style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#1d1e22',
                      borderRadius: '50%',
                      marginTop: '4px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#fff',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Reach a high-value, premium user base.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="benefit-item" style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#1d1e22',
                      borderRadius: '50%',
                      marginTop: '4px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#fff',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Ensure better app monetization and ROI.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="benefit-item" style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#1d1e22',
                      borderRadius: '50%',
                      marginTop: '4px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#fff',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Higher security and data privacy standards.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="benefit-item" style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#1d1e22',
                      borderRadius: '50%',
                      marginTop: '4px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#fff',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Access to Apple ecosystem: WatchOS, macOS, tvOS.
                    </p>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="benefit-item">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#1d1e22',
                      borderRadius: '50%',
                      marginTop: '4px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#fff',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#1d1e22',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
                      Frequent updates and App Store trust factor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="col-lg-6">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  minHeight: '400px'
                }}>
                  <img
                    src="/images/technologies/image2.png"
                    alt="Benefits of iOS App Development"
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

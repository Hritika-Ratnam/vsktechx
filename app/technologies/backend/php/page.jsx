"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function PHPPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '90vh', marginTop: 120 }}>
          <div className="w-100 text-center" style={{ position: 'relative' }}>
            <h1
              style={{
                fontSize: '7vw',
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: -30,
                letterSpacing: '-2px',
              }}
            >
              #1 PHP Development<br />Company
            </h1>
            
          </div>
          <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
              Partner with a Top PHP Development Company to achieve your business 
              goals.Our PHP Web <br/>Development 
              solutions provide fast, adaptable, and powerful web applications,
              perfectly aligning with <br/>your unique business requirements for optimal results.
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
                  Build strong, adaptable PHP<br/>
                  Development solutions to<br/>
                  propel your business growth
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  Experience our services at no cost for<br/>
                  three days.
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
                  Transform Your Vision with PHP Development Services
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '42px 38px' }}>
                      <h4 style={{ fontWeight: 500 }}>Robust Backend Solutions</h4>
                      <p style={{ marginBottom: 0 }}>
                        Develop powerful, scalable backend solutions using PHP to drive your <br/>application’s core functionality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: '#1d1e22', color: '#fff', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Social Networking Solutions</h4>
                  <p style={{ marginBottom: 0 }}>
                    Build custom social networking sites to boost collaboration and increase user engagement for your business.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Powerful CMS Development</h4>
                  <p style={{ marginBottom: 0 }}>
                    Develop a robust and secure custom CMS with PHP to elevate 
                    your standard solutions and drive your success..</p>
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
                  <h2 style={{ fontWeight: 600, fontSize: '2.5rem', color: '#1d1e22', margin: 0, lineHeight: 1.8 }}>
                    Discover related expertise
                  </h2>
                  
                </div>
              </div>
            </div>
            {/* Cards Section Below - Carousel */}
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
              <div id="solutions-carousel" style={{ display: 'flex', gap: 24, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 8, justifyContent: 'center' }}>
                {/* Card 1 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>PHP Web <br/>Development</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                    If your core solution requires scaling with modern technology, PHP is perfect. Our developers create custom API integrations to seamlessly connect your service components
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8}}>PHP Mobile <br/> Development</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                     As a leading PHP development company, we help startups validate their ideas with MVPs and user feedback, improving & refining their products.
                     </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8}}>Web Application<br/>Development</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                      Startups validate ideas through MVPs and user feedback. Expert PHP development company can refine and enhance these solutions effectively.</p>
                  </div>
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
                    Unmatched Industry Experience-<br/>PHP Application Development
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6
                  }}>
                    Leverage our expert PHP development services to create powerful,
                    scalable web solutions that drive your business forward.
                  </p>
                </div>

                {/* Challenges Grid */}
                <div className="row g-4">
                  {/* Left Column */}
                  <div className="col-md-6">
                    <div className="challenges-column" style={{ background: '#f8f9fa', padding: '40px 32px', borderRadius: '16px', height: '100%' }}>
                      {/* Challenge 1 */}
                      <div className="challenge-item" style={{ marginBottom: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#1d1e22',
                            borderRadius: '60%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}></div>
                          <p style={{
                            fontSize: '1.2rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Responsive Web Design for a Seamless Experience on Any Device.
                          </p>
                        </div>
                      </div>

                      {/* Challenge 2 */}
                      <div className="challenge-item" style={{ marginBottom: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#1d1e22',
                            borderRadius: '50%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}></div>
                          <p style={{
                            fontSize: '1.2rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Effortless Compatibility and Functionality Through Seamless Integration.
                          </p>
                        </div>
                      </div>

                      {/* Challenge 3 */}
                      <div className="challenge-item">
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#1d1e22',
                            borderRadius: '50%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}></div>
                          <p style={{
                            fontSize: '1.2rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Expert MVC Pattern for Streamlined and Efficient Software Development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-md-6">
                    <div className="challenges-column" style={{ background: '#f8f9fa', padding: '40px 32px', borderRadius: '16px', height: '100%' }}>
                      {/* Challenge 4 */}
                      <div className="challenge-item" style={{ marginBottom: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#1d1e22',
                            borderRadius: '50%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}></div>
                          <p style={{
                            fontSize: '1.2rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            SEO-Optimized Development for Improved Online Visibility.
                          </p>
                        </div>
                      </div>

                      {/* Challenge 5 */}
                      <div className="challenge-item" style={{ marginBottom: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#1d1e22',
                            borderRadius: '50%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}></div>
                          <p style={{
                            fontSize: '1.2rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Custom Engagement Models for Your Needs.
                          </p>
                        </div>
                      </div>

                      {/* Challenge 6 */}
                      <div className="challenge-item">
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#1d1e22',
                            borderRadius: '50%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}></div>
                          <p style={{
                            fontSize: '1.2rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            The product's outdated design fails to appear credible and appealing.
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

        {/* Ready to Hire AngularJS Match CTA Section */}
        <section style={{ padding: '40px 0 60px 0', background: '#fff' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 style={{
                  fontWeight: 600,
                  fontSize: '2.5rem',
                  color: '#1d1e22',
                  marginBottom: '24px',
                  lineHeight: 1.3
                }}>
                  Ready to Hire PHP Developer?
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#1d1e22',
                  marginBottom: '40px',
                  lineHeight: 1.6
                }}>
                  Experience our PHP development Services <br/>with a 3-day free trial.
                </p>
                <button
                  style={{
                    background: 'linear-gradient(135deg, #35031eff, #aaef7cff)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '16px 32px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 20, 147, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 20, 147, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 20, 147, 0.3)';
                  }}
                >
                  START FREE TRIAL NOW →
                </button>
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

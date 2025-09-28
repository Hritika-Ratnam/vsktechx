"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function PHPPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh', marginTop: 120 }}>
          <div className="w-100 text-center" style={{ position: 'relative' }}>
            <h2
              style={{
                fontSize: '7vw',
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: -30,
                letterSpacing: '-2px',
              }}
            >
              .Net Core<br />Development Company
            </h2>

            {/* Subtitle heading */}
            <h3
              style={{
                fontSize: '3vw',
                fontWeight: 500,
                lineHeight: 1.3,
                marginTop: '90px',
                marginBottom: '10px',
                letterSpacing: '-1px',
                color: '#1d1e22'
              }}
            >
              Reliable, Scalable .NET Core<br />
              Services for Next-Gen Solutions
            </h3>

          </div>
          {/* <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
              Partner with a Top PHP Development Company to achieve your business 
              goals.Our PHP Web <br/>Development 
              solutions provide fast, adaptable, and powerful web applications,
              perfectly aligning with <br/>your unique business requirements for optimal results.
</p>
          </div> */}
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
                  Custom ASP.NET Core Development Services
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
                  Custom ASP.NET Core Development Services
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '42px 38px' }}>
                      <h4 style={{ fontWeight: 500 }}>ASP.NET Core Migration</h4>
                      <p style={{ marginBottom: 0 }}>
                        Upgrade legacy applications to ASP.NET Core while retaining key functionalities, ensuring superior performance and alignment with evolving market trends.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: '#1d1e22', color: '#fff', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Application Maintenance</h4>
                  <p style={{ marginBottom: 0 }}>
                    Maintain flawless app performance with comprehensive maintenance services to resolve glitches, optimize usability, and ensure uninterrupted operations</p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '42px 38px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Web API Development</h4>
                  <p style={{ marginBottom: 0 }}>
                    Develop robust, high-performance Web APIs with ASP.NET Core to enhance app architecture, ensure seamless integrations, and optimize application scalability.</p>
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
                    Explore Advanced Expertise
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
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>API Integration & Migration</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                    Scale your core solution with modern technology. Our team crafts custom API integrations, linking service components seamlessly and enhancing system efficiency.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8}}>MVP Development</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                     Validate business concepts with MVPs and real-user feedback. Our expertise ensures robust MVP development, refining and optimizing products for market readiness.</p>
                  </div>
                </div>
                {/* Card 3 */}
                <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8}}>Custom Web <br/>Application</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                      Leverage tailored web application solutions designed to meet specific needs. We integrate advanced frameworks to deliver scalable, high-performance applications..</p>
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
                    Delivering Advanced <br/>.NET Core Development Solutions
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6
                  }}>
                    As a leading .NET Core development company, we create scalable and
                    robust applications to help businesses achieve their goals.
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
                            Human Resource Management Systems (HRMS).
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
                            Resource planning and interface tools.
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
                            Custom CRM app development.
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
                            Office automation and collaboration systems.
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
                            E-commerce application development.
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
                            Social platform development
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

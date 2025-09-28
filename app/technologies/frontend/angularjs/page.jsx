"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
export default function AngularJSPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh', marginTop: 120 }}>
          <div className="w-100 text-center" style={{ position: 'relative' }}>
            <h1
              style={{
                fontSize: '5vw',
                fontWeight: 500,
                lineHeight: 1.1,
                marginBottom: -30,
                letterSpacing: '-2px',
              }}
            >
              Angular JS Development<br />Company
            </h1>
            <svg
              className="hero-underline"
              width="100%"
              height="24"
              viewBox="0 0 400 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                left: '50%',
                top: '65px',
                transform: 'translateX(-50%)',
                zIndex: 0,
                maxWidth: '380px',
                minWidth: '280px'
              }}
            >
              <path
                d="M5 18C45 8 85 12 125 6C165 12 205 4 245 10C285 4 325 8 395 6"
                stroke="#FF7A1A"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: '1.25rem', maxWidth: 600, margin: '0 auto' }}>
              Partner with a leading AngularJS development company to build
high-performance, secure, and dynamic applications tailored<br />
to your business. Leverage our expertise to scale faster<br />
with flexible, data-driven AngularJS solutions.
</p>
          </div>
        </div>

        {/* Trusted Companies Section
        <section className="py-5" style={{ background: 'transparent' }}>
          <div className="container text-center">
            <h2 style={{ fontWeight: 500, fontSize: '2.5rem', marginBottom: 0 }}>
              Experts in React.js technology<br />trusted by companies like
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#1d1e22', margin: '18px 0 32px 0' }}>
              Join over 200+ tech companies already using Landingfolio
            </p>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4" style={{ maxWidth: 1200, margin: '0 auto' }}>
              <img src="/images/brands/dropbox.png" alt="Dropbox" style={{ height: 48 }} />
              <img src="/images/brands/tesla.png" alt="Tesla" style={{ height: 48 }} />
              <img src="/images/brands/meta.png" alt="Meta" style={{ height: 48 }} />
              <img src="/images/brands/uber.png" alt="Uber" style={{ height: 48 }} />
              <img src="/images/brands/pinterest.png" alt="Pinterest" style={{ height: 48 }} />
              <img src="/images/brands/atlassian.png" alt="Atlassian" style={{ height: 48 }} />
              <img src="/images/brands/asana.png" alt="Asana" style={{ height: 48 }} />
              <img src="/images/brands/whatsapp.png" alt="WhatsApp" style={{ height: 48 }} />
              <img src="/images/brands/netflix.png" alt="Netflix" style={{ height: 48 }} />
            </div>
          </div>
        </section> */}

        {/* Benefits Section */}
  <section className="py-5" style={{ background: 'transparent', paddingLeft: '18vw', paddingRight: '12vw' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="row align-items-start mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 style={{ fontWeight: 600, fontSize: '2.5rem', lineHeight: 1.1 }}>
                  Trusted AngularJS<br />Development Services for<br />Scalable Enterprise<br />Solutions
                </h2>
                <svg
                  className="section-underline"
                  width="100%"
                  height="20"
                  viewBox="0 0 180 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginTop: '-8px',
                    maxWidth: '160px',
                    minWidth: '120px'
                  }}
                >
                  <path
                    d="M5 15C25 8 45 12 65 6C85 12 105 4 125 10C145 6 165 8 175 6"
                    stroke="#FF7A1A"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '32px 28px' }}>
                      <h4 style={{ fontWeight: 500 }}>Enterprise AngularJS Application Development</h4>
                      <p style={{ marginBottom: 0 }}>
                        Hire AngularJS developers to build secure,high-performance enterprise apps using modern tools — optimized for speed, scalability, and modular architecture.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: '#000', color: '#fff', borderRadius: 20, padding: '32px 28px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>AngularJS Front-End UI Development</h4>
                  <p style={{ marginBottom: 0 }}>
                    Leverage AngularJS, UI Bootstrap, and Material Design to build highly interactive, responsive user interfaces that accelerate engagement and retention.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '32px 28px', height: '100%' }}>
                  <h4 style={{ fontWeight: 500 }}>Cross-Platform AngularJS App Development</h4>
                  <p style={{ marginBottom: 0 }}>
                    Develop powerful, feature-rich AngularJS applications that deliver consistent user experiences across web, iOS, and Android platforms to maximize brand reach.</p>
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
                  <h2 style={{ fontWeight: 500, fontSize: '2.5rem', color: '#1d1e22', margin: 0, lineHeight: 1.4 }}>
                    Related AngularJS Expertise to <br/>Power Your Next Project
                  </h2>
                  <svg
                    className="expertise-underline"
                    width="100%"
                    height="24"
                    viewBox="0 0 200 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: 'absolute',
                      left: '75%',
                      top: '35%',
                      transform: 'translateX(-50%)',
                      marginTop: '8px',
                      maxWidth: '140px',
                      minWidth: '120px',
                      zIndex: 1
                    }}
                  >
                    <path
                      d="M5 15C25 8 45 12 65 6C85 12 105 4 125 10C145 6 165 8 195 6"
                      stroke="#FF7A1A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Cards Section Below - Carousel */}
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
              <div id="solutions-carousel" style={{ display: 'flex', gap: 24, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 8, justifyContent: 'center' }}>
                {/* Card 1 */}
                <div style={{ background: '#fff', borderRadius: 38, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <div style={{ fontSize: 36, marginBottom: 18 }}>
                      <img src="https://d31kzidzn6t9lk.cloudfront.net/itservicesindia/mobile-dev.svg" alt="Mobile Dev" height={42} width={42} style={{ display: 'inline-block' }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8, textDecoration: 'underline' }}>AngularJS Web <br/>Development</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                      Unlock scalable, high-<br/>performance web solutions with <br/>our AngularJS development <br/>services tailored to your business <br/>goals.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div style={{ background: '#fff', borderRadius: 38, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <div style={{ fontSize: 36, marginBottom: 18 }}>
                        <img src="https://d31kzidzn6t9lk.cloudfront.net/itservicesindia/mobile-dev.svg" alt="Mobile Dev" height={42} width={42} style={{ display: 'inline-block' }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8, textDecoration: 'underline' }}>Angular JS Mobile App <br/> Development</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                      We create dynamic, cross-<br/>platform mobile apps with <br/>AngularJS—ideal for MVP <br/>validation, user engagement, and <br/>product-market fit.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div style={{ background: '#fff', borderRadius: 38, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                  <div>
                    <div style={{ fontSize: 36, marginBottom: 18 }}>
                        <img src="https://d31kzidzn6t9lk.cloudfront.net/itservicesindia/mobile-dev.svg" alt="Mobile Dev" height={42} width={42} style={{ display: 'inline-block' }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8, textDecoration: 'underline' }}>Single-Page App<br/>Development</h3>
                    <p style={{ color: '#1d1e22', fontSize: '1rem', marginBottom: 0 }}>
                      Build lightning-fast, SEO-<br/>optimized AngularJS SPAs that <br/>deliver smooth user experiences <br/>and drive digital growth.
                    </p>
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
                    lineHeight: 1.3
                  }}>
                    Experts in Solving AngularJS<br/>development challenges
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6
                  }}>
                    As a trusted AngularJS development company, we deliver<br/>
                    scalable web solutions by resolving core technical and<br/>
                    UX challenges across industries.
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
                            borderRadius: '50%',
                            marginTop: '8px',
                            flexShrink: 0
                          }}></div>
                          <p style={{
                            fontSize: '1rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Slow AngularJS performance reduces app speed and frustrates users.
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
                            fontSize: '1rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Cluttered, non-intuitive UI design weakens user engagement.
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
                            fontSize: '1rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Code inconsistencies in AngularJS apps lead to frequent bugs.
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
                            fontSize: '1rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Frequent updates increase AngularJS technical debt and instability.
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
                            fontSize: '1rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Poor onboarding flows result in higher user drop-off rates.
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
                            fontSize: '1rem',
                            color: '#1d1e22',
                            margin: 0,
                            lineHeight: 1.6
                          }}>
                            Outdated UI/UX design damages brand credibility and trust.
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
                  Ready to Hire AngularJS match?
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#1d1e22',
                  marginBottom: '40px',
                  lineHeight: 1.6
                }}>
                  Experience our AngularJS development<br/>
                  Services with a 3-day free trial.
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

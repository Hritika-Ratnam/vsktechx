"use client";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function PythonPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh', marginTop: 60 }}>
          <div className="w-100 text-center" style={{ position: 'relative' }}>
            <h1
              style={{
                fontSize: '5vw',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 0,
                letterSpacing: '-2px',
              }}
            >
              Python Development Services
            </h1>
            <svg
              width="340"
              height="18"
              viewBox="0 0 340 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'absolute', left: '50%', top: '60px', transform: 'translateX(-38%)', zIndex: 0 }}
            >
              <path d="M2 15C60 7 120 7 338 2" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="mt-5 w-100 text-center">
            <p style={{ fontSize: '1.25rem', maxWidth: 700, margin: '0 auto' }}>
              Create innovative Web and Mobile apps with the most versatile,flexible,and powerful programming language.
            </p>
          </div>
        </div>

       

        {/* Benefits Section */}
  <section className="py-5" style={{ background: 'transparent', paddingLeft: '18vw', paddingRight: '12vw' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="row align-items-start mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 style={{ fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.1 }}>
                  Our Cutting-Edge Python Development Solutions Tailored to Your Needs
                  </h2>
                <svg width="120" height="18" viewBox="0 0 120 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-10px' }}>
                  <path d="M2 15C30 7 60 7 118 2" stroke="#FF7A1A" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '32px 28px' }}>
                      <h4 style={{ fontWeight: 600 }}>Python API Development </h4>
                      <p style={{ marginBottom: 0 }}>
                        By Using Python API development Build <br/>
                        robust APIs with Python. 
                        Leverage <br/>
                        frameworks like Flask or FastAPI for <br/>
                        seamless integration and backend services.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: '#000', color: '#fff', borderRadius: 20, padding: '32px 28px', height: '100%' }}>
                  <h4 style={{ fontWeight: 600 }}>Python Mobile App <br/>Development</h4>
                  <p style={{ marginBottom: 0 }}>
                    Creating a Python Mobile app is streamlined <br/>using frameworks like Kivy and BeeWare, 
                    <br/>
                    enabling cross-platform development for <br/>iOS & Android.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '32px 28px', height: '100%' }}>
                  <h4 style={{ fontWeight: 600 }}>Python Website Development</h4>
                  <p style={{ marginBottom: 0 }}>
                    Hire expert Python Website developers to <br/>craft engaging websites that 
                    enhance user<br/> experience and strengthen your brand's<br/> credibility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Python Software Development Engagement Models Section */}
        <section className="py-5" style={{ background: 'transparent', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container text-center">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h2 style={{ fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '20px', color: '#222' }}>
                Python Software Development<br />
                Engagement Models We Offer
              </h2>
              <svg
                width="180"
                height="18"
                viewBox="0 0 180 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', left: '50%', bottom: '10px', transform: 'translateX(-50%)', zIndex: 0 }}
              >
                <path d="M2 15C35 7 65 7 178 2" stroke="#FF7A1A" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '20px auto 0', lineHeight: 1.6 }}>
              For projects with variable scopes, our Time and Material approach lets enterprises pay<br />
              based on the actual man-hours and resources used.
            </p>

            {/* Engagement Model Cards */}
            <div className="container" style={{ marginTop: '60px' }}>
              <div className="row g-4">
                {/* Dedicated Resources */}
                <div className="col-md-6">
                  <div style={{ background: '#f0f0f0', borderRadius: 20, padding: '40px 32px', height: '100%' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '2.0rem', marginBottom: '20px', color: '#222' }}>
                      Dedicated Resources
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#555', marginBottom: 0, lineHeight: 1.6 }}>
                      Our Python developers can integrate with your IT team to share development tasks and enhance security in your tech solutions.
                    </p>
                  </div>
                </div>

                {/* Time and Material */}
                <div className="col-md-6">
                  <div style={{ background: '#000', color: '#fff', borderRadius: 20, padding: '40px 32px', height: '100%' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '2.0rem', marginBottom: '20px', color: '#fff' }}>
                      Time and Material
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: 0, lineHeight: 1.6 }}>
                      For projects based on estimates, our Time and Material approach allows enterprises to pay for the actual man-hours and resources used.
                    </p>
                  </div>
                </div>

                {/* Hybrid IT Model */}
                <div className="col-md-6">
                  <div style={{ background: '#A8D5FF', borderRadius: 20, padding: '40px 32px', height: '100%' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '2.0rem', marginBottom: '20px', color: '#222' }}>
                      Hybrid IT Model
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#444', marginBottom: 0, lineHeight: 1.6 }}>
                      This hiring model combines fixed cost with time-and-materials, ideal for projects with changing scopes.
                    </p>
                  </div>
                </div>

                {/* Fixed Cost Approach */}
                <div className="col-md-6">
                  <div style={{ background: '#b0a77dff', borderRadius: 20, padding: '40px 32px', height: '100%' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '2.0rem', marginBottom: '20px', color: '#222' }}>
                      Fixed Cost Approach
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#444', marginBottom: 0, lineHeight: 1.6 }}>
                      Opt for our fixed-cost approach to streamline development, clarify project scope, and deliver optimized results within budget and set milestones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

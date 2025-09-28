"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useState } from "react";
export default function KnockoutJSPage() {
    const [showReverse, setShowReverse] = useState(false);
    const handleNext = () => setShowReverse(true);
    const handlePrev = () => setShowReverse(false);
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
               Knockout JS Web Development
              </h1>
              <svg
                width="340"
                height="18"
                viewBox="0 0 340 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', left: '50%', top: '60px', transform: 'translateX(-38%)', zIndex: 0 }}
              >
                <path d="M2 15C60 7 120 7 338 2" stroke="#FF7A1A" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mt-5 w-100 text-center">
              <p style={{ fontSize: '1.25rem', maxWidth: 600, margin: '0 auto' }}>
                Creating responsive, modern web apps with<br/>
advanced Knockout.js technology.
              </p>
            </div>
          </div>
  
          
  
          {/* Benefits Section */}
    <section className="py-5" style={{ background: 'transparent', paddingLeft: '18vw', paddingRight: '12vw' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
              <div className="row align-items-start mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h2 style={{ fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.1 }}>
                    Innovative, Scalable<br />Knockout.js Development<br />Tailored for You
                  </h2>
                  <svg width="120" height="18" viewBox="0 0 120 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-10px' }}>
                    <path d="M2 15C30 7 60 7 118 2" stroke="#FF7A1A" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="col-lg-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '32px 28px' }}>
                        <h4 style={{ fontWeight: 600 }}>Knockout.js Web Application Development</h4>
                        <p style={{ marginBottom: 0 }}>
                          Our experts specialize in Knockout.js web application development, 
                          creating efficient and scalable solutions with this versatile JavaScript framework.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-6">
                  <div style={{ background: '#000', color: '#fff', borderRadius: 20, padding: '32px 28px', height: '100%' }}>
                    <h4 style={{ fontWeight: 600 }}>Knockout.js Dashboard Development</h4>
                    <p style={{ marginBottom: 0 }}>
                      We excel in Knockout.js dashboard development, crafting dynamic, 
                      data-driven dashboards to keep your business ahead of the competition.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ background: '#C6FAFF', borderRadius: 20, padding: '32px 28px', height: '100%' }}>
                    <h4 style={{ fontWeight: 600 }}>Custom Knockout.js Development</h4>
                    <p style={{ marginBottom: 0 }}>
                      Our experts provide custom Knockout.js development, 
                      creating innovative, tailored solutions with advanced features for modern web designs.
                      </p>
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
                <div className="col-12 text-center" style={{ background: '#f6f6f6', minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h2 style={{ fontWeight: 700, fontSize: '2.5rem', color: '#222', margin: 0, lineHeight: 1.2 }}>
                    See Our  Professional Capabilities
                    <p>We leverage Knockout.js to transform your project and elevate it to
the next level of interactive, data-driven web development</p>
                  </h2>
                </div>
              </div>
              {/* Cards Section Below - Carousel */}
              <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                <div id="solutions-carousel" style={{ display: 'flex', gap: 24, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 8, justifyContent: 'center' }}>
                  {!showReverse ? (
                    <>
                      {/* Card 1 */}
                      <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                        <div>
                          <div style={{ fontSize: 36, marginBottom: 18 }}>
                            <img src="https://d31kzidzn6t9lk.cloudfront.net/itservicesindia/mobile-dev.svg" alt="Mobile Dev" height={42} width={42} style={{ display: 'inline-block' }} />
                          </div>
                          <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>Expertise and<br/>Experience</h3>
                          <p style={{ color: '#222', fontSize: '1rem', marginBottom: 0 }}>
                            Our team has successfully delivered numerous Knockout.js projects, 
                            creating dynamic web apps, dashboards, and e-commerce platforms across various industries.</p>
                        </div>
                        <div style={{ position: 'absolute', right: 24, bottom: 24, fontSize: 28, color: '#888', background: '#f6f6f6', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</div>
                      </div>
                      {/* Card 2 */}
                      <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                        <div>
                          <div style={{ fontSize: 36, marginBottom: 18 }}>
                              <img src="https://d31kzidzn6t9lk.cloudfront.net/itservicesindia/mobile-dev.svg" alt="Mobile Dev" height={42} width={42} style={{ display: 'inline-block' }} />
                          </div>
                          <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>Innovative<br/>Features</h3>
                          <p style={{ color: '#222', fontSize: '1rem', marginBottom: 0 }}>
                            Utilizing Knockout.js's powerful features like dynamic data binding <br/>and MVVM 
                            architecture, we create interactive, real-time web applications.
                          </p>
                        </div>
                        <div style={{ position: 'absolute', right: 24, bottom: 24, fontSize: 28, color: '#888', background: '#f6f6f6', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</div>
                      </div>
                      {/* Card 3 */}
                      <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                        <div>
                          <div style={{ fontSize: 36, marginBottom: 18 }}>
                              <img src="https://d31kzidzn6t9lk.cloudfront.net/itservicesindia/mobile-dev.svg" alt="Mobile Dev" height={42} width={42} style={{ display: 'inline-block' }} />
                          </div>
                          <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>Custom
<br />Solutions</h3>
                          <p style={{ color: '#222', fontSize: '1rem', marginBottom: 0 }}>
                            We provide tailored Knockout.js <br/>solutions, including custom web apps <br/>and dashboards, built to meet the<br/> unique needs of your business.</p>
                        </div>
                        <div style={{ position: 'absolute', right: 24, bottom: 24, fontSize: 28, color: '#888', background: '#f6f6f6', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Card 2 */}
                      <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', padding: '36px 32px', width: 340, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', flex: '0 0 auto' }}>
                        <div>
                          <div style={{ fontSize: 36, marginBottom: 18 }}>
                              <img src="https://d31kzidzn6t9lk.cloudfront.net/itservicesindia/mobile-dev.svg" alt="Mobile Dev" height={42} width={42} style={{ display: 'inline-block' }} />
                          </div>
                          <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>Scalability and
Performance</h3>
                          <p style={{ color: '#222', fontSize: '1rem', marginBottom: 0 }}>
                            Our Knockout.js solutions are <br/>optimized for scalability and high <br/>performance, ensuring they can<br/> handle large data volumes and traffic smoothly.</p>
                        </div>
                        <div style={{ position: 'absolute', right: 24, bottom: 24, fontSize: 28, color: '#888', background: '#f6f6f6', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</div>
                      </div>
                      
                    </>
                  )}
                </div>
                {/* Carousel Arrows */}
                <div className="d-flex flex-column justify-content-end align-items-center" style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                  <div className="d-flex gap-3">
                    <button onClick={handlePrev} disabled={!showReverse} style={{ background: '#eaeaea', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#bbb', marginRight: 8, opacity: showReverse ? 1 : 0.5, cursor: showReverse ? 'pointer' : 'not-allowed' }}>
                      &#8592;
                    </button>
                    <button onClick={handleNext} disabled={showReverse} style={{ background: '#000', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff', opacity: showReverse ? 0.5 : 1, cursor: showReverse ? 'not-allowed' : 'pointer' }}>
                      &#8594;
                    </button>
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
  
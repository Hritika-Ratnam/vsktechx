"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useState } from "react";
export default function VueJSPage() {
  const [showReverse, setShowReverse] = useState(false);
  const handleNext = () => setShowReverse(true);
  const handlePrev = () => setShowReverse(false);
  return (
    <>
      <Header />
      <main>
  <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh', marginTop: 24, padding: '200px 0px 160px' }}>
          <div className="w-100 text-center" style={{ position: 'relative' }}>
            <h1
              style={{
                fontSize: '5vw',
                fontWeight: 500,
                lineHeight: 1.1,
                margin: '0 0 32px',
                letterSpacing: '-2px',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Top <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  maxWidth: 'fit-content',
                  verticalAlign: 'middle',
                  overflow: 'visible',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1, display: 'inline-block', background: 'transparent' }}>Vue.js</span>
                <svg
                  viewBox="0 0 270 95"
                  width="100%"
                  height="1.2em"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    left: '-18%',
                    top: '-35%',
                    width: '135%',
                    height: '170%',
                    minWidth: 80,
                    maxWidth: 270,
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                >
                  <ellipse
                    cx="135"
                    cy="47"
                    rx="110"
                    ry="36"
                    stroke="#7EE6C3"
                    strokeWidth="4"
                    style={{ filter: 'drop-shadow(0px 2px 2px rgba(126,230,195,0.12))' }}
                  />
                  <path d="M15 65 Q70 90 135 80 Q200 70 255 40" stroke="#7EE6C3" strokeWidth="3" fill="none"/>
                </svg>
              </span> Development <br />Service Company
            </h1>
          </div>
          {/* <div className="mt-5 w-100 text-center">
            <p style={{ fontSize: '1.25rem', maxWidth: 600, margin: '0 auto' }}>
              Our company specializes in <b>ReactJS development</b> for modern<br />
              web applications, creating beautiful and cost-effective interfaces.
            </p>
          </div> */}
        </div>

        {/* Trusted Companies Section */}
  <section className="py-3" style={{ background: 'transparent', paddingTop: 0, marginTop: -22 }}>
          <div className="container text-center">
            <h2 style={{ fontWeight: 400, fontSize: '2.5rem', marginBottom: 0, marginTop: 0, lineHeight: 1.12 }}>
              Build scalable, progressive web apps <br />with
              <span style={{ position: 'relative', display: 'inline-block', marginLeft: 8, marginRight: 4 }}>
                Vue.js
                <svg
                  width="120"
                  height="24"
                  viewBox="0 0 120 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: 'absolute', left: 0, bottom: '-8px', pointerEvents: 'none', zIndex: 0 }}
                >
                  <path d="M6 18 Q40 10 114 8" stroke="#7EE6C3" strokeWidth="4" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
              development services
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#1d1e22', margin: '8px 0 20px 0' }}>
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
        </section>

        {/* Key Benefits of Outsourcing Vue.js Development Services Section */}
        <section style={{ padding: "80px 0 40px 0", background: "#fff" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{
      fontSize: "3rem",
      fontWeight: 700,
      marginBottom: 40,
      letterSpacing: "-1px",
      lineHeight: 1.15
    }}>
      Key Benefits of Outsourcing Vue.js<br />Development Services
    </h2>
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginBottom: 48,
      gap: 0
    }}>
      <button style={{
        background: "#f7f7f7",
        border: "none",
        borderRadius: "8px 0 0 8px",
        padding: "16px 20px",
        fontWeight: 600,
        fontSize: "1rem",
        color: "#222",
        cursor: "pointer"
      }}>COST EFFICIENCY</button>
      <button style={{
        background: "#eaeaea",
        border: "none",
        padding: "16px 20px",
        fontWeight: 600,
        fontSize: "1rem",
        color: "#222",
        cursor: "pointer"
      }}>FASTER TIME-TO-MARKET</button>
      <button style={{
        background: "#eaeaea",
        border: "none",
        padding: "16px 20px",
        fontWeight: 600,
        fontSize: "1rem",
        color: "#222",
        cursor: "pointer"
      }}>EASY INTEGRATION</button>
      <button style={{
        background: "#444",
        border: "none",
        padding: "16px 20px",
        fontWeight: 600,
        fontSize: "1rem",
        color: "#fff",
        cursor: "pointer"
      }}>QUALITY ASSURANCE</button>
      <button style={{
        background: "#222",
        border: "none",
        borderRadius: "0 8px 8px 0",
        padding: "16px 20px",
        fontWeight: 600,
        fontSize: "1rem",
        color: "#fff",
        cursor: "pointer"
      }}>ACCESS TO EXPERTISE</button>
    </div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: 48,
      textAlign: "left"
    }}>
      <div style={{ flex: 1, maxWidth: 420, fontSize: "1.18rem", color: "#222" }}>
        As a top Vue.js development company, we leverage Vue.js — a progressive and lightweight JavaScript framework — to build fast, responsive, and scalable web and mobile applications. Our approach simplifies the development lifecycle while delivering rich user experiences and seamless performance across platforms.
      </div>
      <div style={{ flex: 1, maxWidth: 420, fontSize: "1.18rem", color: "#222" }}>
        We offer specialized <a href="#" style={{ color: "#222", textDecoration: "underline" }}>Vue.js app development</a> and <a href="#" style={{ color: "#222", textDecoration: "underline" }}>Vue.js web development services</a> tailored to your business goals. <a href="#" style={{ color: "#222", textDecoration: "underline" }}>Our expert team</a> combines a user-first mindset with modern UI design, flexibility, and performance to build scalable, interactive applications for <a href="#" style={{ color: "#222", textDecoration: "underline" }}>startups</a>, enterprises, and everything in between.
      </div>
    </div>
  </div>
</section>
        {/* Solving Complex Vue.js Development Challenges with Precision Section */}
        <section style={{ background: '#fff', padding: '80px 0 40px 0' }}>
          <div className="container" style={{ maxWidth: 1200 }}>
            <h2 style={{ fontWeight: 700, fontSize: '2.8rem', color: '#222', textAlign: 'center', marginBottom: 16, lineHeight: 1.15, position: 'relative' }}>
              Solving Complex Vue.js Development<br />Challenges with Precision
              <svg width="220" height="18" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '50%', bottom: '-8px', transform: 'translateX(-50%)', zIndex: 0 }}>
                <path d="M10 14 Q80 10 210 10" stroke="#FF7A1A" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <path d="M30 17 Q120 15 190 13" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
            </h2>
            <div style={{ textAlign: 'center', fontSize: '1.25rem', color: '#222', marginBottom: 40, marginTop: 24 }}>
              As a top Vue.js development company, we help businesses<br />overcome technical hurdles—delivering clean, scalable,<br />and high-performing solutions.
            </div>
            <div style={{ background: '#f6f6f6', borderRadius: 20, padding: '40px 32px', margin: '0 auto', maxWidth: 900, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '48px 64px', width: '100%' }}>
                <div style={{ fontSize: '1.13rem', color: '#222', lineHeight: 1.7, minWidth: 320, maxWidth: 380 }}>
                  <div style={{ marginBottom: 18 }}>&rarr; Simplified complex app flows for improved development efficiency.</div>
                  <div style={{ marginBottom: 18 }}>&rarr; Optimized Vue.js performance for faster load and response times.</div>
                  <div style={{ marginBottom: 18 }}>&rarr; Ensured consistent functionality across diverse components and views.</div>
                </div>
                <div style={{ fontSize: '1.13rem', color: '#222', lineHeight: 1.7, minWidth: 320, maxWidth: 380 }}>
                  <div style={{ marginBottom: 18 }}>&rarr; Reduced technical debt with maintainable, scalable code architecture.</div>
                  <div style={{ marginBottom: 18 }}>&rarr; Enhanced user experience by streamlining onboarding journeys.</div>
                  <div style={{ marginBottom: 0 }}>&rarr; Modernized legacy codebases for long-term scalability and flexibility.</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Explore Our Expertise Section */}
        <section style={{ background: '#fff', padding: '80px 0 40px 0', display: 'flex', justifyContent: 'center' }}>
          <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontWeight: 700, fontSize: '2.8rem', color: '#222', textAlign: 'center', marginBottom: 40, lineHeight: 1.15, position: 'relative' }}>
              Explore Our Expertise
              <svg width="220" height="18" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '50%', bottom: '-8px', transform: 'translateX(-50%)', zIndex: 0 }}>
                <path d="M10 14 Q80 10 210 10" stroke="#FF7A1A" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <path d="M30 17 Q120 15 190 13" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
            </h2>
            <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, margin: '0 auto', maxWidth: 1200, flexWrap: 'nowrap' }}>
              {/* Node.js Card */}
              <div className="col-md-4" style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #eee', boxShadow: '0 1px 8px rgba(0,0,0,0.03)', padding: '28px 18px', minWidth: 300, maxWidth: 340, margin: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: 180 }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: 0.2, marginBottom: 10, textTransform: 'uppercase' }}>
                  NODE.JS DEVELOPMENT <span style={{ fontSize: 18, marginLeft: 4 }}>&#8599;</span>
                </div>
                <div style={{ fontSize: '1rem', color: '#222', lineHeight: 1.6 }}>
                  Develop high-performance backends with <a href="#" style={{ color: '#219A7E', textDecoration: 'underline' }}>Node.js development services</a>. Ensure real-time capabilities, faster load times, and scalable server-side applications.
                </div>
              </div>
              {/* AngularJS Card */}
              <div className="col-md-4" style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #eee', boxShadow: '0 1px 8px rgba(0,0,0,0.03)', padding: '28px 18px', minWidth: 300, maxWidth: 340, margin: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: 180 }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: 0.2, marginBottom: 10, textTransform: 'uppercase' }}>
                  ANGULAR.JS DEVELOPMENT <span style={{ fontSize: 18, marginLeft: 4 }}>&#8599;</span>
                </div>
                <div style={{ fontSize: '1rem', color: '#222', lineHeight: 1.6 }}>
                  Create structured, enterprise-grade apps with <a href="#" style={{ color: '#219A7E', textDecoration: 'underline' }}>Angular.js development services</a>. Leverage two-way data binding for robust, scalable solutions.
                </div>
              </div>
              {/* ReactJS Card */}
              <div className="col-md-4" style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #eee', boxShadow: '0 1px 8px rgba(0,0,0,0.03)', padding: '28px 18px', minWidth: 300, maxWidth: 340, margin: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: 180 }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: 0.2, marginBottom: 10, textTransform: 'uppercase' }}>
                  REACTJS DEVELOPMENT <span style={{ fontSize: 18, marginLeft: 4 }}>&#8599;</span>
                </div>
                <div style={{ fontSize: '1rem', color: '#222', lineHeight: 1.6 }}>
                  Accelerate your UI development with <a href="#" style={{ color: '#219A7E', textDecoration: 'underline' }}>React.js development services</a>. Build responsive, component-based apps optimized for speed and flexibility.
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

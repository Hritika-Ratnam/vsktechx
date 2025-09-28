"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function KenticoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ padding: '120px 0 40px', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 600,
                  color: '#1d1e22',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                  letterSpacing: '-1px'
                }}>
                  Kentico CMS <br />Development Services
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#1d1e22',
                  maxWidth: '840px',
                  margin: '0 auto 40px',
                  lineHeight: 1.6
                }}>
                  Leverage the full potential of Kentico Xperience with our expert CMS development services.<br />
                  Our team builds high-performing, scalable, and secure Kentico-powered websites and<br />
                  applications for exceptional digital experiences.
                </p>
                <button style={{
                  background: '#ff1493',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Discuss Your Kentico Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Kentico Development Partner Section */}
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
                  Professional Kentico CMS development services to enhance your digital presence
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '32px',
                  lineHeight: 1.6
                }}>
                  As a trusted Kentico development partner, we deliver feature-rich, secure, and scalable solutions that integrate seamlessly with your business goals.
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
                    alt="Kentico Development Services"
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

        {/* Kentico Expert Services Section */}
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
                  Expert Kentico CMS<br />Development Services
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '810px',
                  margin: '0 auto 60px',
                  lineHeight: 1.6
                }}>
                  We provide end-to-end Kentico development services — from design and custom module creation
                  to integrations, upgrades, and performance optimization.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Left Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  <Feature text="Custom Kentico CMS development tailored to your needs." />
                  <Feature text="Seamless third-party integrations and API development." />
                  <Feature text="Kentico MVC and Portal Engine expertise." />
                  <Feature text="Performance optimization for faster, smoother user experience." />
                  <Feature text="Advanced security configurations for maximum protection." />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  <Feature text="Kentico upgrade and migration services." />
                  <Feature text="Custom module and widget development." />
                  <Feature text="E-commerce solutions powered by Kentico." />
                  <Feature text="Kentico marketing automation setup and optimization." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Kentico Section */}
        <section style={{ padding: '40px 0', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <InfoCard
                  title="What is Kentico CMS?"
                  text="Kentico is an all-in-one CMS, E-commerce, and Online Marketing platform built on ASP.NET. It enables developers and marketers to create engaging websites, manage content efficiently, and deliver personalized customer experiences."
                />
                <InfoCard
                  title="Why choose Kentico for your business?"
                  text="Kentico offers flexibility, scalability, and a rich set of built-in features for content management, e-commerce, and marketing automation. With its secure architecture, powerful API, and robust customization options, Kentico helps businesses deliver outstanding digital experiences."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Reuse your existing responsive styles */
      `}</style>

      <Footer />
    </>
  );
}

// Small helper components to reduce repetition
function Feature({ text }) {
  return (
    <div className="d-flex align-items-start">
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#ff1493',
        marginTop: '8px',
        marginRight: '16px',
        flexShrink: 0
      }}></div>
      <p style={{
        fontSize: '1.1rem',
        color: '#1d1e22',
        margin: 0,
        lineHeight: 1.6
      }}>
        {text}
      </p>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div style={{
      border: '2px solid #ff1493',
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
            {title}
          </h3>
        </div>
        <div className="col-lg-7">
          <p style={{
            fontSize: '1.1rem',
            color: '#1d1e22',
            lineHeight: 1.6,
            margin: 0
          }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

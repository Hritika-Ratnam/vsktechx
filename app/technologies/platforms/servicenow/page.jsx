"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function ServiceNowPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "90vh", marginTop: 120 }}
        >
          <div className="w-100 text-center" style={{ position: "relative" }}>
            <h1
              style={{
                fontSize: "6vw",
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: -30,
                letterSpacing: "-2px",
              }}
            >
              Top ServiceNow <br /> Development Company for
            </h1>
          </div>
          <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: "1.25rem", maxWidth: 900, margin: "0 auto" }}>
              Transform your enterprise workflows with ServiceNow – the leading
              digital workflow platform that automates IT, HR, customer service,
              and business operations for seamless efficiency.
            </p>
          </div>
        </div>

        {/* What is Section */}
        <section style={{ padding: "40px 0", background: "#ffffff" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  style={{
                    border: "2px solid #52f840ff",
                    borderRadius: "22px",
                    padding: "40px",
                    marginBottom: "40px",
                    background: "#ffffff",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <h3
                        style={{
                          fontWeight: 600,
                          fontSize: "2rem",
                          color: "#1d1e22",
                          marginBottom: "20px",
                          lineHeight: 1.4,
                        }}
                      >
                        What is ServiceNow development?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p
                        style={{
                          fontSize: "1.1rem",
                          color: "#1d1e22",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        ServiceNow development involves creating, customizing,
                        and integrating workflows on the ServiceNow platform. It
                        enables organizations to streamline IT service
                        management, automate enterprise operations, and deliver
                        connected digital experiences across departments.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    border: "2px solid #52f840ff",
                    borderRadius: "22px",
                    padding: "40px",
                    background: "#ffffff",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <h3
                        style={{
                          fontWeight: 600,
                          fontSize: "2rem",
                          color: "#1d1e22",
                          marginBottom: "20px",
                          lineHeight: 1.4,
                        }}
                      >
                        Why choose ServiceNow for your business?
                      </h3>
                    </div>
                    <div className="col-lg-7">
                      <p
                        style={{
                          fontSize: "1.1rem",
                          color: "#1d1e22",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        ServiceNow is the #1 workflow automation platform,
                        offering solutions for ITSM, HR, CSM, security
                        operations, and more. With its scalable cloud platform
                        and AI-powered automation, ServiceNow helps businesses
                        reduce costs, increase productivity, and enhance
                        customer and employee experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hire Section */}
        <section style={{ padding: "80px 0", background: "#f8f9fa" }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2
                  style={{
                    fontWeight: 600,
                    fontSize: "2.6rem",
                    color: "#1d1e22",
                    marginBottom: "24px",
                    lineHeight: 1.4,
                  }}
                >
                  Hire ServiceNow Development Company for Your Workflow Needs
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#666",
                    marginBottom: "32px",
                    lineHeight: 1.6,
                  }}
                >
                  Start your ServiceNow journey with our free 3-day consultation
                  today!
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="col-lg-6">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    minHeight: "300px",
                  }}
                >
                  <img
                    src="/images/technologies/person.png"
                    alt="ServiceNow Development Services"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "400px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ padding: "80px 0", background: "#ffffff" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2
                  style={{
                    fontWeight: 600,
                    fontSize: "2.8rem",
                    color: "#1d1e22",
                    marginBottom: "20px",
                    lineHeight: 1.4,
                  }}
                >
                  ServiceNow Development Features
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#666",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  Discover the enterprise-grade features that make ServiceNow the
                  ideal platform for workflow automation and digital
                  transformation
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Feature 1 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#667eea", "#764ba2")}>⚙️</div>
                  <h4 style={featureTitleStyle}>Workflow Automation</h4>
                  <p style={featureTextStyle}>
                    Automate IT, HR, and business workflows to improve speed and
                    accuracy across the enterprise.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#f093fb", "#f5576c")}>☁️</div>
                  <h4 style={featureTitleStyle}>Cloud Platform</h4>
                  <p style={featureTextStyle}>
                    A secure, scalable, and flexible cloud platform for
                    enterprise digital workflows.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#4facfe", "#00f2fe")}>📊</div>
                  <h4 style={featureTitleStyle}>Analytics & AI</h4>
                  <p style={featureTextStyle}>
                    Gain actionable insights and optimize processes with
                    ServiceNow’s AI and predictive intelligence.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#fa709a", "#fee140")}>🤝</div>
                  <h4 style={featureTitleStyle}>Employee & Customer Experience</h4>
                  <p style={featureTextStyle}>
                    Deliver seamless digital experiences that enhance
                    satisfaction and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build Exceptional Apps Section */}
        <section style={{ padding: "80px 0", background: "#f8f9fa" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2
                  style={{
                    fontWeight: 700,
                    fontSize: "3rem",
                    color: "#1d1e22",
                    marginBottom: "20px",
                    lineHeight: 1.3,
                  }}
                >
                  Build Exceptional Solutions <br /> with Top ServiceNow
                  Developers
                </h2>
                <p
                  style={{
                    fontSize: "1.3rem",
                    color: "#1d1e22",
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: 1.5,
                  }}
                >
                  <a
                    href="#"
                    style={{ color: "#080808ff", textDecoration: "none" }}
                  >
                    Hire ServiceNow developers
                  </a>{" "}
                  to design, integrate, and optimize your workflows. From ITSM to
                  enterprise automation, we deliver scalable solutions that drive
                  digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero-paragraph {
          margin-top: 60px;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
        }
        @media (max-width: 768px) {
          .hero-paragraph {
            margin-top: 50px !important;
          }
        }
        @media (max-width: 576px) {
          .hero-paragraph {
            margin-top: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-paragraph {
            margin-top: 35px !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}

// Reusable styles
const featureCardStyle = {
  padding: "40px 30px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid #e9ecef",
  height: "100%",
  textAlign: "center",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};
const featureTitleStyle = {
  fontWeight: 600,
  fontSize: "1.4rem",
  color: "#1d1e22",
  marginBottom: "16px",
};
const featureTextStyle = {
  fontSize: "1rem",
  color: "#666",
  lineHeight: 1.6,
  margin: 0,
};
const iconStyle = (c1, c2) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
  fontSize: "24px",
  color: "white",
});

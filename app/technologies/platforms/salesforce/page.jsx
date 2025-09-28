"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function SalesforcePage() {
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
              Top Salesforce <br /> Development Company for
            </h1>
          </div>
          <div className="w-100 text-center hero-paragraph">
            <p style={{ fontSize: "1.25rem", maxWidth: 900, margin: "0 auto" }}>
              Empower your business with Salesforce – the world’s leading CRM
              platform that streamlines customer management, automates business
              processes, and drives growth through intelligent cloud solutions.
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
                        What is Salesforce development?
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
                        Salesforce development involves customizing, integrating,
                        and building applications on the Salesforce CRM platform.
                        It helps businesses automate workflows, improve customer
                        engagement, and leverage cloud-based solutions for sales,
                        service, marketing, and beyond.
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
                        Why choose Salesforce for your business?
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
                        Salesforce is the #1 CRM in the world, offering powerful
                        tools for sales automation, marketing campaigns, customer
                        support, and analytics. With its scalable cloud
                        infrastructure and AI-powered insights, Salesforce enables
                        businesses to improve efficiency, boost revenue, and
                        deliver personalized customer experiences.
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
                  Hire Salesforce Development Company for Your CRM Needs
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#666",
                    marginBottom: "32px",
                    lineHeight: 1.6,
                  }}
                >
                  Start your Salesforce journey with our free 3-day trial today!
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
                    alt="Salesforce Development Services"
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
                  Salesforce Development Features
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#666",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  Explore the powerful features that make Salesforce the ideal CRM
                  platform for modern businesses
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Feature 1 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#667eea", "#764ba2")}>⚡</div>
                  <h4 style={featureTitleStyle}>Automation</h4>
                  <p style={featureTextStyle}>
                    Automate sales, service, and marketing workflows to save time
                    and improve efficiency.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#f093fb", "#f5576c")}>☁️</div>
                  <h4 style={featureTitleStyle}>Cloud Solutions</h4>
                  <p style={featureTextStyle}>
                    Access Salesforce from anywhere with secure, scalable, and
                    reliable cloud infrastructure.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#4facfe", "#00f2fe")}>📊</div>
                  <h4 style={featureTitleStyle}>Analytics</h4>
                  <p style={featureTextStyle}>
                    Gain actionable insights with Salesforce’s powerful reporting
                    and AI-driven analytics tools.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-card" style={featureCardStyle}>
                  <div style={iconStyle("#fa709a", "#fee140")}>🤝</div>
                  <h4 style={featureTitleStyle}>Customer Engagement</h4>
                  <p style={featureTextStyle}>
                    Deliver personalized, connected experiences that strengthen
                    customer relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build Exceptional Salesforce Apps Section */}
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
                  Build Exceptional Solutions <br /> with Top Salesforce
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
                    Hire Salesforce developers
                  </a>{" "}
                  to customize, integrate, and optimize your Salesforce CRM. From
                  setup to advanced automation, we deliver scalable solutions that
                  empower your business growth.
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

"use client"
import React from "react"
import Link from "next/link"

const WhyWorkWithUsStyles = `
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    -ms-overflow-style: none;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: background-color 0.3s;
    opacity: 0;
  }
  
  .custom-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }

  .right-panel-wrapper {
    position: relative;
    height: auto;
    min-height: 600px;
    overflow: visible;
  }

  .right-panel-scroll {
    height: auto;
    padding: 10px;
    position: relative;
  }

  .right-panel-scroll.scrolled-bottom {
    overflow: visible;
  }
    .section-row{
    dispaly:flex;
    gap:16px;
    flex-wrap:wrap;
    }

  .section-box h3{
  margin bottom:10px;
  font-size:1.25rem;
  font-weigth:600;
  }
  .section-box{
  border:4px solid #f1f1f1;
  border-radius:12px;
  padding:20px;
  margin-bottom:16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
`

const WhyWorkWithUs = () => {
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      e.target.classList.add('scrolled-bottom');
    } else {
      e.target.classList.remove('scrolled-bottom');
    }
  };

  return (
    <>
      <style jsx global>{WhyWorkWithUsStyles}</style>
      <section className="py-120 bg-white">
        <div className="container">
          <div className="row">
            {/* left section */}
            <div className="col-lg-5 col-md-6 pe-lg-5">
              <div className="pe-lg-4">
                <h6 style={{ fontSize: '24px', letterSpacing: '1px', fontWeight: 600, color: '#222222' }} className="mb-3">Expert Minds</h6>
                <h2 style={{ fontSize: '48px', lineHeight: '1.1', fontWeight: 700, color: '#1d1e22' }} className="mb-4">Why Work With VSK TechX?</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#64748b', fontWeight: 400 }} className="mb-5">
                  We help you hire skilled developers to build custom web, app, and software solutions that 
                  solve real problems and drive growth.
                </p>
                <Link href="/contact/get-in-touch" style={{ fontSize: '16px', fontWeight: 500, padding: '12px 24px', backgroundColor: '#000000', color: '#ffffff', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s ease' }} className="hover:bg-blue-700">
                  Let's Talk
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* right section */}
            <div className="col-lg-7 col-md-6 ps-lg-5">
              <div className="right-panel-wrapper">
                <div className="right-panel-scroll custom-scrollbar" onScroll={handleScroll}>
                  <div className="position-relative">
                    {/* Left Column of Cards */}
<div style={{ width: "calc(50% - 12px)", float: "left" }}>
  {/* Custom Solutions Card */}
  <div className="card border border-1 border-gray-200 rounded-4 bg-white p-4 shadow-sm mb-4">
    <div className="card-icon mb-4">
      <div className="icon-circle rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center border"
        style={{ width: "64px", height: "64px", borderColor: "#f59e0b", borderWidth: "2px" }}>
        <i className="fas fa-cogs fa-2x" style={{ color: "#f59e0b" }}></i>
      </div>
    </div>
    <h4 className="card-title mb-3">Custom Solutions</h4>
    <p className="card-text text-secondary">
      Get tailored enterprise software, <u>SaaS platforms</u>, and <u>app development</u> using secure, scalable <u>full-stack</u> technologies.
    </p>
  </div>

  {/* Cost Efficiency Card */}
  <div className="card border border-1 border-gray-200 rounded-4 bg-white p-4 shadow-sm mt-4">
    <div className="card-icon mb-4">
      <div className="icon-circle rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center border"
        style={{ width: "64px", height: "64px", borderColor: "#10b981", borderWidth: "5px" }}>
        <i className="fas fa-chart-line fa-2x" style={{ color: "#10b981" }}></i>
      </div>
    </div>
    <h4 className="card-title mb-3">Cost Efficiency</h4>
    <p className="card-text text-secondary">
      Leverage offshore software development to reduce costs while maintaining high quality and timely delivery.
    </p>
  </div>

  {/* Ongoing Support Card */}
  <div className="card border border-1 border-gray-200 rounded-4 bg-white p-4 shadow-sm mt-4">
    <div className="card-icon mb-4">
      <div className="icon-circle rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center border"
        style={{ width: "64px", height: "64px", borderColor: "#0ea5e9", borderWidth: "2px" }}>
        <i className="fas fa-life-ring fa-2x" style={{ color: "#0ea5e9" }}></i>
      </div>
    </div>
    <h4 className="card-title mb-3">Ongoing Support</h4>
    <p className="card-text text-secondary">
      Get long-term software maintenance, updates, performance audits, and 24/7 post-launch support for every deployment.
    </p>
  </div>
</div>


                    {/* Right Column of Cards */}
                    <div style={{ width: "calc(50% - 12px)", float: "right", marginTop: "100px" }}>
                      {/* Flexible Hiring Card */}
                      <div className="card border border-1 border-gray-200 rounded-4 bg-white p-4 shadow-sm">
                        <div className="card-icon mb-4">
                          <div className="icon-circle rounded-circle bg-purple bg-opacity-10 d-flex align-items-center justify-content-center border" style={{ width: "64px", height: "64px", borderColor: "#8b5cf6", borderWidth: "2px" }}>
                            <i className="fas fa-users fa-2x" style={{ color: "#8b5cf6" }}></i>
                          </div>
                        </div>
                        <h4 className="card-title mb-3">Flexible Hiring</h4>
                        <p className="card-text text-secondary">
                          <u>Hire dedicated developers</u> in India through hourly, part-time, or full-time models for your custom tech requirements.
                        </p>
                      </div>
                    </div>
                     <div style={{ width: "calc(50% - 12px)", float: "right", marginTop: "20px",clear:"right" }}>
                      {/* Flexible Hiring Card */}
                      <div className="card border border-1 border-gray-200 rounded-4 bg-white p-4 shadow-sm">
                        <div className="card-icon mb-4">
                          <div className="icon-circle rounded-circle bg-purple bg-opacity-10 d-flex align-items-center justify-content-center border" style={{ width: "64px", height: "64px", borderColor: "#8b5cf6", borderWidth: "2px" }}>
                            <i className="fas fa-users fa-2x" style={{ color: "#8b5cf6" }}></i>
                          </div>
                        </div>
                        <h4 className="card-title mb-3">Client Focused</h4>
                        <p className="card-text text-secondary">
                          We provide user-first software engineering with business-aligned planning, agile delivery, and transparent reporting.
                        </p>
                      </div>
                    </div>
                    <div style={{ width: "calc(50% - 12px)", float: "right", marginTop: "20px",clear:"right" }}>
                      {/* Flexible Hiring Card */}
                      <div className="card border border-1 border-gray-200 rounded-4 bg-white p-4 shadow-sm">
                        <div className="card-icon mb-4">
                          <div className="icon-circle rounded-circle bg-purple bg-opacity-10 d-flex align-items-center justify-content-center border" style={{ width: "64px", height: "64px", borderColor: "#8b5cf6", borderWidth: "2px" }}>
                            <i className="fas fa-users fa-2x" style={{ color: "#8b5cf6" }}></i>
                          </div>
                        </div>
                        <h4 className="card-title mb-3">Highly Scalable</h4>
                        <p className="card-text text-secondary">
                          Build scalable <u>cloud-native applications </u>with API-first architecture, microservices, and container-ready deployment.
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
    </>
  )
}

export default WhyWorkWithUs

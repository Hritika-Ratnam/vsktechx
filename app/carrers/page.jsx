"use client";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";


const CarrersPage = () => {
  return (
    <>
      <Header />
  <div className="career-page container py-5" style={{ marginTop: "120px" }}>
    <div className="text-center mb-5">
      <h1 className="mb-2" style={{ fontWeight: 700, fontSize: "3rem" }}>Build for Everyone</h1>
      <div style={{ fontSize: "1.25rem", color: "#555" }}>Find your next job at IT Services India.</div>
    </div>

    {/* Find your team section */}
    <div className="row align-items-center justify-content-center mb-4" style={{ minHeight: '320px' }}>
      {/* Left Card */}
      <div className="col-md-6 mb-4 mb-md-0">
        <div style={{
          background: '#ffff',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 1px 8px rgba(0,0,0,0.03)',
          border: '1px solid #ececec',
          height: '100%'
        }}>
          <h2 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: '1rem' }}>Find your team</h2>
          <div style={{ fontSize: '1.2rem', color: '#1d1e22', marginBottom: '2.5rem' }}>
            We work together to make<br />
            information accessible to everyone<br />
            and to build products for them. Find<br />
            your team.
          </div>
          <span style={{ fontSize: '2rem', color: '#222', display: 'inline-block', marginTop: '1.5rem' }}>&rarr;</span>
        </div>
      </div>
      {/* Right Illustration */}
      <div className="col-md-6 d-flex justify-content-center">
        {/* Replace the src below with your own illustration if available */}
        <img src="/images/teamwork.jpg" alt="Find your team illustration" style={{ maxWidth: '570px', width: '100%' }} />
      </div>
    </div>
    {/* Pink info box */}
    <div className="d-flex justify-content-center mb-5">
      <div style={{
        background: '#fff',
        borderRadius: '28px',
        padding: '2rem 2.5rem',
        maxWidth: '700px',
        fontSize: '1.15rem',
        color: '#1d1e22',
        boxShadow: '0 4px 8px rgba(15, 14, 14, 0.03)'
      }}>
        We&apos;re always eager to grow our team with folks who are innovative thinkers and passionate about producing results.
      </div>
    </div>

        <section className="mb-5 d-flex justify-content-center">
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>Current Openings</h2>
            {[
              {
                role: 'Frontend Developer',
                shortDesc: '2+ years experience, React/Next.js',
                fullDesc: 'We are looking for a skilled Frontend Developer with experience in React and Next.js. You will work closely with our design and backend teams to build modern, scalable web applications. Responsibilities include developing new user-facing features, optimizing applications for speed and scalability, and collaborating on UI/UX improvements.'
              },
              {
                role: 'Backend Developer',
                shortDesc: '3+ years experience, Node.js/Express',
                fullDesc: 'Join our backend team to design and implement robust APIs and services using Node.js and Express. You should have experience with databases, RESTful APIs, and cloud deployment. You will be responsible for server-side logic, database integration, and ensuring high performance and responsiveness.'
              },
              {
                role: 'UI/UX Designer',
                shortDesc: '2+ years experience, Figma/Adobe XD',
                fullDesc: 'We need a creative UI/UX Designer to help us craft beautiful and user-friendly interfaces. You should be proficient in Figma or Adobe XD, have a strong portfolio, and be able to translate requirements into wireframes and prototypes. Collaboration with developers and stakeholders is key.'
              },
              {
                role: 'QA Engineer',
                shortDesc: '1+ years experience, Manual/Automation',
                fullDesc: 'We are seeking a QA Engineer to develop and execute exploratory and automated tests to ensure product quality. Responsibilities include reviewing quality specifications, designing test plans, and identifying system malfunctions.'
              },
              {
                role: 'Project Manager',
                shortDesc: '3+ years experience, Agile/Scrum',
                fullDesc: 'We are looking for a Project Manager with experience in Agile/Scrum methodologies. You will coordinate internal resources, manage project timelines, and ensure the successful delivery of projects.'
              }
            ].map((job, idx, arr) => (
              <div key={job.role} className="card mb-3" style={{ borderRadius: '14px', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{job.role}</span>
                    </div>
                    <button 
                      className="btn btn-sm" 
                      style={{ 
                        minWidth: 80, 
                        backgroundColor: '#09b850', 
                        borderColor: '#09b850', 
                        color: 'white',
                        fontWeight: '500'
                      }} 
                      onClick={() => window.location.href = `/carrers/apply?role=${encodeURIComponent(job.role)}`}
                    >
                      Apply
                    </button>
                  </div>
                  <div style={{ fontSize: '0.98rem', color: '#444' }}>{job.shortDesc}</div>
                  <details style={{ marginTop: '0.5rem' }}>
                    <summary style={{ cursor: 'pointer', color: '#1d1e22', fontSize: '0.95rem' }}>View more</summary>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#333' }}>{job.fullDesc}</div>
                  </details>
                </div>
              </div>
            ))}
            <div className="text-center mt-3">
              <button 
                className="btn btn-outline-secondary btn-sm more-openings-btn" 
                style={{ minWidth: 120, color: '#1d1e22' }} 
                onClick={() => window.location.href = '/carrers/openings'}
              >
                More Openings
              </button>
              <style jsx>{`
                .more-openings-btn:hover {
                  background-color: #09b850 !important;
                  border-color: #09b850 !important;
                  color: white !important;
                }
              `}</style>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default CarrersPage;

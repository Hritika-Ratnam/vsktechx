"use client";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const openings = [
  {
    role: 'Frontend Developer',
    shortDesc: '2+ years experience, React/Next.js',
    fullDesc: 'We are looking for a skilled Frontend Developer with experience in React and Next.js. You will work closely with our design and backend teams to build modern, scalable web applications. Responsibilities include developing new user-facing features, optimizing applications for speed and scalability, and collaborating on UI/UX improvements.',
    count: 2
  },
  {
    role: 'Backend Developer',
    shortDesc: '3+ years experience, Node.js/Express',
    fullDesc: 'Join our backend team to design and implement robust APIs and services using Node.js and Express. You should have experience with databases, RESTful APIs, and cloud deployment. You will be responsible for server-side logic, database integration, and ensuring high performance and responsiveness.',
    count: 1
  },
  {
    role: 'UI/UX Designer',
    shortDesc: '2+ years experience, Figma/Adobe XD',
    fullDesc: 'We need a creative UI/UX Designer to help us craft beautiful and user-friendly interfaces. You should be proficient in Figma or Adobe XD, have a strong portfolio, and be able to translate requirements into wireframes and prototypes. Collaboration with developers and stakeholders is key.',
    count: 1
  },
  {
    role: 'QA Engineer',
    shortDesc: '1+ years experience, Manual/Automation',
    fullDesc: 'We are seeking a QA Engineer to develop and execute exploratory and automated tests to ensure product quality. Responsibilities include reviewing quality specifications, designing test plans, and identifying system malfunctions.',
    count: 2
  },
  {
    role: 'Project Manager',
    shortDesc: '3+ years experience, Agile/Scrum',
    fullDesc: 'We are looking for a Project Manager with experience in Agile/Scrum methodologies. You will coordinate internal resources, manage project timelines, and ensure the successful delivery of projects.',
    count: 1
  },
  {
    role: 'DevOps Engineer',
    shortDesc: '2+ years experience, AWS/Docker/Kubernetes',
    fullDesc: 'Seeking a DevOps Engineer to manage CI/CD pipelines, automate deployments, and maintain cloud infrastructure. Experience with AWS, Docker, and Kubernetes is required.',
    count: 1
  },
  {
    role: 'Content Writer',
    shortDesc: '1+ years experience, Tech/Marketing',
    fullDesc: 'We are looking for a Content Writer to create engaging and informative content for our website, blog, and marketing materials. Strong writing skills and a passion for technology are a must.',
    count: 1
  },
  {
    role: 'Business Analyst',
    shortDesc: '2+ years experience, Requirement Gathering',
    fullDesc: 'Join our team as a Business Analyst to bridge the gap between business needs and technical solutions. Responsibilities include gathering requirements, analyzing processes, and supporting project delivery.',
    count: 1
  }
];

const OpeningsPage = () => {
  return (
    <>
      <Header />
      <div className="container py-5" style={{ marginTop: "120px" }}>
        <h1 className="mb-4 text-center">All Current Openings</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {openings.map((job) => (
              <div key={job.role} className="card mb-3" style={{ borderRadius: '14px', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{job.role}</span>
                      <span style={{ fontSize: '0.95rem', color: '#888', marginLeft: 12 }}>(Openings: {job.count})</span>
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
                    <summary style={{ cursor: 'pointer', color: '#007bff', fontSize: '0.95rem' }}>View more</summary>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#333' }}>{job.fullDesc}</div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpeningsPage;

// "use client";
// import React from "react";
// import Header from "@/components/layout/header/Header";
// import Footer from "@/components/layout/footer/Footer";
// import Link from "next/link";

// const techSections = [
//   { key: "frontend", label: "Frontend", desc: "UI technologies for building interactive web apps.", icon: "fa-laptop-code" },
//   { key: "backend", label: "Backend", desc: "Server-side technologies for scalable applications.", icon: "fa-server" },
//   { key: "mobile", label: "Mobile", desc: "Technologies for building mobile applications.", icon: "fa-mobile-alt" },
//   { key: "framework", label: "Framework", desc: "Popular frameworks for rapid development.", icon: "fa-cubes" },
//   { key: "ecommerce", label: "Ecommerce", desc: "Platforms for online stores and commerce.", icon: "fa-shopping-cart" },
//   { key: "cms", label: "CMS", desc: "Content management systems for easy publishing.", icon: "fa-edit" },
//   { key: "platforms", label: "Platforms", desc: "Cloud and deployment platforms.", icon: "fa-cloud" },
// ];

// const TechnologiesPage = () => {
//   return (
//     <>
//       <Header />
//       <div className="container py-5" style={{ marginTop: 120, maxWidth: 950 }}>
//         <h1 className="mb-5 text-center">Technologies we work with</h1>
//         <div className="row g-4 justify-content-center">
//           {techSections.map((section) => (
//             <div className="col-12 col-md-6 col-lg-4" key={section.key}>
//               <div
//                 className="card h-100 shadow-sm text-center p-4 d-flex flex-column"
//                 style={{ borderRadius:25, border: "2px solid #fff" }}
//               >
//                 <div
//                   className="d-flex justify-content-center align-items-center mb-3"
//                   style={{ height: 60 }}
//                 >
//                   <span
//                     style={{
//                       background: "#8ef639ff",
//                       borderRadius: 8,
//                       boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
//                       padding: 16,
//                       display: "inline-flex",
//                     }}
//                   >
//                     <i
//                       className={`fa ${section.icon}`}
//                       style={{ fontSize: 32, color: "#222" }}
//                     ></i>
//                   </span>
//                 </div>
//                 <h4 className="mb-2" style={{ fontWeight: 700 }}>
//                   {section.label}
//                 </h4>
//                 <div className="mb-3" style={{ color: "#555", fontSize: "1rem" }}>
//                   {section.desc}
//                 </div>

//                 {/* Centered Button */}
//                 <div className="d-flex justify-content-center mt-auto">
//                   <Link
//                     href={`/technologies/${section.key}`}
//                     className="btn btn-outline-primary btn-sm"
//                     style={{ fontSize: "0.75rem", padding: "2px 10px" ,
                      
//                       color: "#1d1e22", 
//                       borderColor: "#1d1e22",
//                     }}
//                   >
//                     View More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default TechnologiesPage;
"use client";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Link from "next/link";

const techSections = [
  { key: "frontend", label: "Frontend", desc: "UI technologies for building interactive web apps.", icon: "fa-laptop-code" },
  { key: "backend", label: "Backend", desc: "Server-side technologies for scalable applications.", icon: "fa-server" },
  { key: "mobile", label: "Mobile", desc: "Technologies for building mobile applications.", icon: "fa-mobile-alt" },
  { key: "framework", label: "Framework", desc: "Popular frameworks for rapid development.", icon: "fa-cubes" },
  { key: "ecommerce", label: "Ecommerce", desc: "Platforms for online stores and commerce.", icon: "fa-shopping-cart" },
  { key: "cms", label: "CMS", desc: "Content management systems for easy publishing.", icon: "fa-edit" },
  { key: "platforms", label: "Platforms", desc: "Cloud and deployment platforms.", icon: "fa-cloud" },
];

const TechnologiesPage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid py-5 tech-container" style={{ marginTop: 150, maxWidth: "100%", paddingLeft: "15px", paddingRight: "15px" }}>
        <div className="container" style={{ maxWidth: "950px" }}>
          <h1 className="mb-5 text-center" style={{ fontSize: "3.2rem" }}>Technologies we work with</h1>
          <div className="row g-4 justify-content-center tech-card-container">
            {techSections.map((section) => (
              <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={section.key}>
              <div className="card h-100 shadow-sm text-center p-4 d-flex flex-column tech-card">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: 60 }}
                >
                  <span
                    style={{
                      background: "#fff",
                      borderRadius: 8,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.8)",
                      padding: 16,
                      display: "inline-flex",
                    }}
                  >
                    <i
                      className={`fa ${section.icon}`}
                      style={{ fontSize: 32, color: "#222" }}
                    ></i>
                  </span>
                </div>
                <h4 className="mb-2" style={{ fontWeight: 700 }}>
                  {section.label}
                </h4>
                <div className="mb-3" style={{ color: "#555", fontSize: "1rem" }}>
                  {section.desc}
                </div>

                <div className="d-flex justify-content-center mt-auto">
                  <Link
                    href={`/technologies/${section.key}`}
                    className="btn btn-outline-primary btn-sm"
                    style={{
                      fontSize: "0.75rem",
                      padding: "2px 10px",
                      color: "#1d1e22",
                      borderColor: "#1d1e22",
                    }}
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* Hover Styles */}
      <style jsx>{`
        .tech-container {
          max-width: 950px;
          margin: 0 auto;
        }
        
        .tech-card {
          border: 3px solid #f1f1f1;
          border-radius: 25px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        }
        .tech-card-container:hover .tech-card:not(:hover) {
          border-color: transparent;
        }
        .tech-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
          border: 4px solid #f1f1f1;
          background: #fff;
        }
        
        /* Disable hover effects on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .tech-card:hover {
            transform: none;
            box-shadow: none;
            border: 3px solid #f1f1f1;
          }
          .tech-card-container:hover .tech-card:not(:hover) {
            border-color: #f1f1f1;
          }
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .tech-container {
            margin-top: 120px !important;
            padding: 20px 15px !important;
            max-width: 100% !important;
          }
          
          .tech-card {
            margin-bottom: 20px;
            min-height: 200px;
          }
          
          h1 {
            font-size: 2rem !important;
            margin-bottom: 2rem !important;
          }
          
          .tech-card h4 {
            font-size: 1.2rem;
          }
          
          .tech-card .mb-3 {
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 576px) {
          .tech-container {
            margin-top: 100px !important;
            padding: 15px 10px !important;
          }
          
          h1 {
            font-size: 1.8rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .tech-card {
            padding: 20px 15px !important;
            min-height: 180px;
          }
          
          .tech-card h4 {
            font-size: 1.1rem;
          }
          
          .tech-card .mb-3 {
            font-size: 0.85rem;
          }
          
          .tech-card i {
            font-size: 28px !important;
          }
        }
        
        @media (max-width: 480px) {
          .tech-container {
            margin-top: 90px !important;
            padding: 10px 5px !important;
          }
          
          h1 {
            font-size: 1.6rem !important;
            margin-bottom: 1rem !important;
          }
          
          .tech-card {
            padding: 15px 10px !important;
            min-height: 160px;
            margin-bottom: 15px;
          }
          
          .tech-card h4 {
            font-size: 1rem;
          }
          
          .tech-card .mb-3 {
            font-size: 0.8rem;
            line-height: 1.3;
          }
          
          .tech-card i {
            font-size: 24px !important;
          }
          
          .row.g-4 {
            gap: 15px !important;
            margin: 0 !important;
          }
          
          .col-12 {
            padding: 0 5px !important;
          }
        }
        
        @media (max-width: 360px) {
          .tech-container {
            margin-top: 80px !important;
            padding: 5px !important;
          }
          
          h1 {
            font-size: 1.4rem !important;
            margin-bottom: 0.8rem !important;
          }
          
          .tech-card {
            padding: 12px 8px !important;
            min-height: 150px;
            border-radius: 15px !important;
          }
          
          .tech-card h4 {
            font-size: 0.9rem;
          }
          
          .tech-card .mb-3 {
            font-size: 0.75rem;
            line-height: 1.2;
          }
          
          .tech-card i {
            font-size: 20px !important;
          }
          
          .btn-sm {
            font-size: 0.65rem !important;
            padding: 1px 8px !important;
          }
        }
        
        /* Additional Mobile Portrait Orientation Fix */
        @media (max-width: 768px) and (orientation: portrait) {
          .tech-container {
            margin-top: 140px !important;
          }
        }
        
        @media (max-width: 480px) and (orientation: portrait) {
          .tech-container {
            margin-top: 110px !important;
          }
        }
      `}</style>
    </>
  );
};

export default TechnologiesPage;

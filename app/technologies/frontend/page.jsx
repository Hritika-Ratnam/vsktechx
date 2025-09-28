// "use client";
// import Header from "@/components/layout/header/Header";
// import Footer from "@/components/layout/footer/Footer";
// import Link from "next/link";

// const frontendTechs = [
//   { key: "nextjs", label: "Next JS", desc: "A React framework for production with hybrid static & server rendering.", image: "/images/technologies/Next.js.png" },
//   { key: "reactjs", label: "React JS", desc: "A declarative, efficient, and flexible JavaScript library for building UI.", image: "/images/technologies/React.png" },
//   { key: "gatsbyjs", label: "Gatsby JS", desc: "A React-based, GraphQL powered static site generator.", image: "/images/technologies/Gatsby .png" },
//   { key: "angularjs", label: "Angular JS", desc: "A structural framework for dynamic web apps.", image: "/images/technologies/AngularJS.png" },
//   { key: "meteorjs", label: "Meteor JS", desc: "A full-stack platform for building web and mobile apps in pure JavaScript.", image: "/images/technologies/Meteor.js.png" },
//   { key: "vuejs", label: "Vue JS", desc: "A progressive JavaScript framework for building user interfaces.", image: "/images/technologies/Vue.js.png" },
//   { key: "knockoutjs", label: "Knockout JS", desc: "A JavaScript MVVM library for creating rich, responsive UIs.", image: "/images/technologies/Knockout.png" },
//   { key: "backbonejs", label: "BackBone JS", desc: "A lightweight JavaScript library that adds structure to web apps.", image: "/images/technologies/Backbone.js.png" },
//   { key: "nuxtjs", label: "Nuxt JS", desc: "A framework for creating Vue.js applications, server-side rendered or statically generated.", image: "/images/technologies/Nuxt JS.png" },
//   { key: "nestjs", label: "Nest JS", desc: "A progressive Node.js framework for building efficient, scalable server-side apps.", image: "/images/technologies/Nest.js.png" },
// ];

// export default function FrontendPage() {
//   return (
//     <>
//       <Header />
//       <div className="container py-5" style={{ marginTop: 120 }}>
//         <h1 className="mb-4 text-center">Frontend Technologies</h1>
//         <div className="row g-4 justify-content-center">
//           {frontendTechs.map((tech) => (
//             <div className="col-12 col-md-6 col-lg-4" key={tech.key}>
//               <div className="card h-100 shadow-sm text-center p-4" style={{ borderRadius: 25, border: '5px solid #4bd474ff' }}>
//                 <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: 60 }}>
//                   <span style={{ background: '#e5f0e8ff', borderRadius: 12, padding: 16, display: 'inline-flex' }}>
//                     <img src={tech.image} alt={`${tech.label} logo`} style={{ width: 32, height: 32, objectFit: 'contain' }} />
//                   </span>
//                 </div>
//                 <h4 className="mb-2" style={{ fontWeight: 600 }}>{tech.label}</h4>
//                 <div className="mb-3" style={{ color: '#1d1e22', fontSize: '1rem' }}>{tech.desc}</div>
//                 <Link href={`/technologies/frontend/${tech.key}`} className="btn btn-outline-primary btn-sm mt-auto" style={{ fontSize: "0.75rem", padding: "2px 0px" }}>View More</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Link from "next/link";

const frontendTechs = [
  { key: "nextjs", label: "Next JS", desc: "A React framework for production with hybrid static & server rendering.", image: "/images/technologies/Next.js.png" },
  { key: "reactjs", label: "React JS", desc: "A declarative, efficient, and flexible JavaScript library for building UI.", image: "/images/technologies/React.png" },
  { key: "gatsbyjs", label: "Gatsby JS", desc: "A React-based, GraphQL powered static site generator.", image: "/images/technologies/Gatsby .png" },
  { key: "angularjs", label: "Angular JS", desc: "A structural framework for dynamic web apps.", image: "/images/technologies/AngularJS.png" },
  { key: "meteorjs", label: "Meteor JS", desc: "A full-stack platform for building web and mobile apps in pure JavaScript.", image: "/images/technologies/Meteor.js.png" },
  { key: "vuejs", label: "Vue JS", desc: "A progressive JavaScript framework for building user interfaces.", image: "/images/technologies/Vue.js.png" },
  { key: "knockoutjs", label: "Knockout JS", desc: "A JavaScript MVVM library for creating rich, responsive UIs.", image: "/images/technologies/Knockout.png" },
  { key: "backbonejs", label: "BackBone JS", desc: "A lightweight JavaScript library that adds structure to web apps.", image: "/images/technologies/Backbone.js.png" },
  { key: "nuxtjs", label: "Nuxt JS", desc: "A framework for creating Vue.js applications, server-side rendered or statically generated.", image: "/images/technologies/Nuxt JS.png" },
  { key: "nestjs", label: "Nest JS", desc: "A progressive Node.js framework for building efficient, scalable server-side apps.", image: "/images/technologies/Nest.js.png" },
];

export default function FrontendPage() {
  return (
    <>
      <Header />
      <div className="container py-5 tech-container" style={{ marginTop: 150 }}>
        <h1 className="mb-4 text-center" style={{ fontSize: "2.5rem" }}>Frontend Technologies</h1>
        <div className="row g-4 justify-content-center tech-card-container">
          {frontendTechs.map((tech) => (
            <div className="col-12 col-md-6 col-lg-4" key={tech.key}>
              <div className="card h-100 shadow-sm text-center p-4 d-flex flex-column tech-card">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: 80 }}
                >
                  <span
                    style={{
                      background: "#fff",
                      borderRadius: 18,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.8)",
                      padding: 16,
                      display: "inline-flex",
                    }}
                  >
                    <img
                      src={tech.image}
                      alt={`${tech.label} logo`}
                      loading="lazy"
                      style={{ width: 36, height: 36, objectFit: "contain" }}
                    />
                  </span>
                </div>
                <h4 className="mb-2" style={{ fontWeight: 600 }}>
                  {tech.label}
                </h4>
                <div className="mb-3" style={{ color: "#1d1e22", fontSize: "1rem" }}>
                  {tech.desc}
                </div>
                <div className="d-flex justify-content-center mt-auto">
                  <Link
                    href={`/technologies/frontend/${tech.key}`}
                    className="btn btn-outline-primary btn-sm"
                    style={{
                      fontSize: "0.85rem",
                      padding: "2px 8px",
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
      <Footer />

      {/* Hover Styles and Responsive Design */}
      <style jsx>{`
        .tech-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .tech-card {
          border: 2px solid #f1f1f1;
          border-radius: 25px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        }
        .tech-card-container:hover .tech-card:not(:hover) {
          border-color: transparent;
        }
        .tech-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
          border: 2px solid #f1f1f1;
          background: #fff;
        }
        
        /* Disable hover effects on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .tech-card:hover {
            transform: none;
            box-shadow: none;
            border: 2px solid #f1f1f1;
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
          
          .tech-card img {
            width: 32px !important;
            height: 32px !important;
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
          
          .tech-card img {
            width: 28px !important;
            height: 28px !important;
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
          
          .tech-card img {
            width: 24px !important;
            height: 24px !important;
          }
          
          .btn-sm {
            font-size: 0.65rem !important;
            padding: 1px 8px !important;
          }
        }
        
        /* Portrait Orientation Specific Fixes */
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
}

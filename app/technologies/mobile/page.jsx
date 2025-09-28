"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Link from "next/link";

const MobileTechs = [
  { key: "ios", label: "iOS", desc: "iOS is a mobile operating system developed and distributed by Apple Inc.", image: "/images/technologies/Apple.png" },
  { key: "android", label: "Android", desc: "Android is a mobile operating system based on a modified version of the Linux kernel and other open source software.", image: "/images/technologies/Android.png" },
  { key: "swift", label: "Swift", desc: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc.", image: "/images/technologies/Swift.png" },
  { key: "kotlin", label: "Kotlin", desc: "Kotlin is a programming language that runs on the Java Virtual Machine and also can be compiled to JavaScript source code.", image: "/images/technologies/Kotlin.png" },
  { key: "flutter", label: "Flutter", desc: "Flutter is an open-source UI software development kit created by Google.", image: "/images/technologies/Flutter.png" },
  { key: "ionic", label: "Ionic", desc: "Ionic is an open-source UI software development kit for building cross-platform mobile apps.", image: "/images/technologies/Ionic.png" },
];

export default function MobilePage() {
  return (
    <>
      <Header />
      <div className="container py-5 tech-container" style={{ marginTop: 150 }}>
        <h1 className="mb-4 text-center" style={{ fontSize: "2.5rem" }}>Mobile Technologies</h1>
        <div className="row g-4 justify-content-center tech-card-container">
          {MobileTechs.map((tech) => (
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
                      boxShadow: "0 4px 4px rgba(0,0,0,0.5)",
                      padding: 16,
                      display: "inline-flex",
                    }}
                  >
                    <img
                      src={tech.image}
                      alt={`${tech.label} logo`}
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
                    href={`/technologies/mobile/${tech.key}`}
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
          border: 3px solid #f1f1f1;
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

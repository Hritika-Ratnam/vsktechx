"use client";
import React, { useState } from "react";
import Image from "next/image";

const technologiesData = {
  Mobile: [
    { name: "Android", icon: "/images/technologies/Android.png", link: "#" },
    { name: "iOS", icon: "/images/technologies/Apple.png", link: "#" },
    { name: "Swift", icon: "/images/technologies/Swift.png", link: "#" },
    { name: "Ionic", icon: "/images/technologies/Ionic.png", link: "#" },
    { name: "Flutter", icon: "/images/technologies/Flutter.png", link: "#" },
    { name: "React Native", icon: "/images/technologies/React.png", link: "#" },
    { name: "Kotlin", icon: "/images/technologies/Kotlin.png", link: "#" },
  ],
  FrontEnd: [
    { name: "React JS", icon: "/images/technologies/React.png", link: "#" },
    { name: "Vue JS", icon: "/images/technologies/Vue.js.png", link: "#" },
    { name: "Angular JS", icon: "/images/technologies/AngularJS.png", link: "#" },
    { name: "Gatsby JS", icon: "/images/technologies/Gatsby .png", link: "#" },
    { name: "Meteor JS", icon: "/images/technologies/Meteor.js.png", link: "#" },
    { name: "Next JS", icon: "/images/technologies/Next.js.png", link: "#" },
    { name: "Nuxt JS", icon: "/images/technologies/Nuxt JS.png", link: "#" },
    { name: "Knockout JS", icon: "/images/technologies/Knockout.png", link: "#" },
    { name: "BackBone JS", icon: "/images/technologies/Backbone.js.png", link: "#" },
    { name: "Nest JS", icon: "/images/technologies/nest.js.png", link: "#" },
  ],
  Backend: [
    { name: "Node.js", icon: "/images/technologies/Node.js.png", link: "#" },
    { name: "Python", icon: "/images/technologies/Python.png", link: "#" },
    { name: "AspNet", icon: "/images/technologies/Net.png", link: "#" },
    { name: "ExpressJS", icon: "/images/technologies/Express.png", link: "#" },
    { name: "NetCore", icon: "/images/technologies/Net core.png", link: "#" },
    { name: "php", icon: "/images/technologies/php.png", link: "#" },
  ],
  Frameworks: [
    { name: "CodeIgniter", icon: "/images/technologies/CodeIgniter.png", link: "#" },
    { name: "Laravel", icon: "/images/technologies/Laravel.png", link: "#" },
    { name: "Django", icon: "/images/technologies/Django.png", link: "#" },
    { name: "rubyonrailsPage", icon: "/images/technologies/Ruby on Rails.png", link: "#" },
  ],
  CMS: [
    { name: "WordPress", icon: "/images/technologies/WordPress.png", link: "#" },
    { name: "Drupal", icon: "/images/technologies/Drupal.png", link: "#" },
  ],
  Database: [
    { name: "MongoDB", icon: "/images/technologies/MongoDB.png", link: "#" },
    { name: "MySQL", icon: "/images/technologies/MySQL.png", link: "#" },
    { name: "PostgreSQL", icon: "/images/technologies/PostgresSQL.png", link: "#" },
    { name: "SQLite", icon: "/images/technologies/SQLite.png", link: "#" },
    { name: "Oracle", icon: "/images/technologies/Oracle.png", link: "#" },
    { name: "Firebase", icon: "/images/technologies/Firebase.png", link: "#" },
    { name: "DynamoDb", icon: "/images/technologies/Ruby.png", link: "#" },
  ],
  DevOps: [
    { name: "Docker", icon: "/images/technologies/Docker.png", link: "#" },
    { name: "Kubernetes", icon: "/images/technologies/Kubernetes.png", link: "#" },
    { name: "Jenkins", icon: "/images/technologies/Jenkins.png", link: "#" },
    { name: "Azure", icon: "/images/technologies/Azure.png", link: "#" },
    { name: "AWS", icon: "/images/technologies/AWS.png", link: "#" },
    { name: "Gradle", icon: "/images/technologies/Gradle.png", link: "#" },
  ],
  Ecommerce: [
    { name: "Shopify", icon: "/images/technologies/Shopify.png", link: "#" },
    { name: "Magento", icon: "/images/technologies/Magneto.png", link: "#" },
    { name: "Kentico", icon: "/images/technologies/Kentico.png", link: "#" },
    { name: "WooCommerce", icon: "/images/technologies/woo.png", link: "#" },
  ],
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Mobile");

  return (
    <section className="technologies-section py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontWeight: 700, fontSize: "2.5rem" }}>
          Technologies we work with
        </h2>
        <div
          className="d-flex justify-content-center mb-4 gap-2"
          style={{
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {Object.keys(technologiesData).map((tab) => (
            <button
              key={tab}
              className="tech-tab"
              style={{
                flex: "0 1 auto",
                minWidth: "120px",
                padding: "0.75rem 1rem",
                borderRadius: "18px",
                border: "none",
                background: activeTab === tab ? "#181A20" : "#fff",
                color: activeTab === tab ? "#fff" : "#181A20",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                boxShadow: activeTab === tab ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.2s",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
              onClick={() => setActiveTab(tab)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {technologiesData[activeTab].map((tech) => (
           <a
  key={tech.name}
  href={tech.link}
  className="tech-box d-flex flex-column align-items-center justify-content-center"
  style={{
    width: 130,
    height: 130,
    borderRadius: 20,
    background: "transparent", // No background initially
    boxShadow: "none", // No shadow initially
    textDecoration: "none",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#fff"; // White background on hover
    e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "transparent"; // Back to transparent
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  <Image src={tech.icon} alt={tech.name} width={50} height={50} />
  <span style={{ marginTop: 8, fontWeight: 500, color: "#181A20", fontSize: "0.9rem", textAlign: "center" }}>{tech.name}</span>
</a>

          ))}
        </div>
      </div>
      
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .tech-tab {
            font-size: 0.8rem !important;
            padding: 0.5rem 0.75rem !important;
            min-width: 100px !important;
          }
          
          .tech-box {
            width: 110px !important;
            height: 110px !important;
          }
          
          .tech-box img {
            width: 40px !important;
            height: 40px !important;
          }
          
          .tech-box span {
            font-size: 0.8rem !important;
            margin-top: 6px !important;
          }
        }
        
        @media (max-width: 576px) {
          .tech-tab {
            font-size: 0.75rem !important;
            padding: 0.5rem !important;
            min-width: 80px !important;
          }
          
          .tech-box {
            width: 100px !important;
            height: 100px !important;
          }
          
          .tech-box img {
            width: 35px !important;
            height: 35px !important;
          }
          
          .tech-box span {
            font-size: 0.75rem !important;
            margin-top: 5px !important;
          }
        }
        
        @media (max-width: 480px) {
          .tech-tab {
            font-size: 0.7rem !important;
            padding: 0.4rem 0.6rem !important;
            min-width: 70px !important;
          }
          
          .tech-box {
            width: 90px !important;
            height: 90px !important;
          }
          
          .tech-box img {
            width: 30px !important;
            height: 30px !important;
          }
          
          .tech-box span {
            font-size: 0.7rem !important;
            margin-top: 4px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;

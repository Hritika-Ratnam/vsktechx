"use client";
import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CustomCursor from "@/components/layout/CustomCursor";

const serviceColumns = [
  [
    "Software Development",
    "Software Consulting",
    "ERP Software Development", 
    "Custom CRM Development",
    "AR/VR Development",
    "IoT Development",
    "Microservices",
    "Product Development",
    "Maintenance And Support"
  ],
  [
    "Application Development",
    "Web Application",
    "Custom Application", 
    "Application Modernization",
    "Application Management",
    "Application Maintenance",
    "Cloud Application",
    "Application Integration",
    "Ecommerce Application"
  ],
  [
    "Mobile App Development",
    "Hire Dedicated Developers",
    "Full Stack Development",
    "SaaS Development", 
    "Artificial Intelligence",
    "Data Analytics",
    "Business Intelligence",
    "UX/UI Design"
  ]
];

const ServicesDropdownPage = ({ params }) => {
  const { service } = React.use(params);
  
  return (
    <>
      <Header />
      <PageHeader 
        title={service.replace(/-/g, " ")} 
        breadcrumbs={[
          { label: "Home", link: "/" }, 
          { label: "Services", link: "/services" }, 
          { label: service.replace(/-/g, " "), link: null }
        ]} 
      />
      
      {/* Services Grid Section */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-h-screen overflow-y-auto">
            {serviceColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-2">
                {column.map((serviceItem, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-3 px-4 border-b border-gray-200 hover:bg-gray-50"
                  >
                    {serviceItem}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {service.replace(/-/g, " ")}
        </h2>
        <p className="text-gray-600">
          Details about {service.replace(/-/g, " ")} will go here.
        </p>
      </div>
      
      <Footer />
      <CustomCursor />
    </>
  );
};

export default ServicesDropdownPage;

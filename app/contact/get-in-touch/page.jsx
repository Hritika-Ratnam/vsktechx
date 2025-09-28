"use client"
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import "./get-in-touch.scss";

const GetInTouchDetails = () => {
  const breadcrumbs = [
    { label: '', link: '/' },
    { label: '', link: '/contact' },
    { label: '', link: null }
  ];
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    services: "",
    budget: "",
    projectDetail: "",
    newsletter: false,
    nda: false,
    files: []
  });



  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/logos')
      .then(res => res.json())
      .then(data => setLogos(data.data || []))
      .catch(() => setLogos([]));
  }, []);

  // const testimonialRefs = useRef([]);
  // const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  // const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // const testimonials = [
  //   {
  //     text: "IT Services India successfully delivered the project on time and within budget, and the client was pleased with the results. The team communicated effectively via Slack and email. Their collaborative approach and...",
  //     author: "Michael G.",
  //     title: "CEO",
  //     company: "PEGNATO",
  //     verified: "Verified by DesignRush",
  //     avatar: "MG"
  //   },
  //   {
  //     text: "Responsive and efficient, IT Services India quickly implemented any requests for changes that came up during peer review discussions. Their comprehensive experience, coupled with their proactive approach, made for a fruitful partnership. Customers can expect clean and professional designs from this team.",
  //     author: "Barry Fish",
  //     title: "MD",
  //     company: "A2B OFFICE",
  //     verified: "Verified by Clutch",
  //     avatar: "BF"
  //   }
  // ];

  // useEffect(() => {
  //   const observers = [];
  //   
  //   testimonialRefs.current.forEach((ref, index) => {
  //     if (ref) {
  //       const observer = new IntersectionObserver(
  //         ([entry]) => {
  //           if (entry.isIntersecting) {
  //             setVisibleTestimonials(prev => [...new Set([...prev, index])]);
  //           } else {
  //             setVisibleTestimonials(prev => prev.filter(i => i !== index));
  //           }
  //         },
  //         {
  //           threshold: 0.2,
  //           rootMargin: '0px 0px -50px 0px'
  //         }
  //       );
  //       
  //       observer.observe(ref);
  //       observers.push(observer);
  //     }
  //   });

  //   return () => {
  //     observers.forEach(observer => observer.disconnect());
  //   };
  // }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (files) => {
    setFormData(prev => ({
      ...prev,
      files: Array.from(files)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! Thank you for your interest.');
  };


  const FileUploadComponent = () => {
    const handleClick = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      input.accept = '.pdf,.doc,.docx,.txt,.jpg,.png';
      input.style.display = 'none';
      
      input.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
          handleFileUpload(files);
        }
      });
      
      document.body.appendChild(input);
      input.click();
      document.body.removeChild(input);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDrop = (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFileUpload(files);
      }
    };

    return (
      <div 
        className="file-upload"
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="file-upload-text">
          {formData.files.length > 0 
            ? `Selected: ${formData.files.map(f => f.name).join(', ')}`
            : "Select or Drop your file here"
          }
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <PageHeader title="" breadcrumbs={breadcrumbs} />
      <div className="get-in-touch-container">
        <div className="container">
          <h1 style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "50px",
            padding: "96px 0px 96px 0px",
            margin: 0
          }}>
            Let's Talk About Your Project &
            <br />
            Find the Perfect Solution
          </h1>
        </div>

        <div className="main-container">
          <div className="left-section">
            <div className="header">
              <h2 className="header-title">Get Free Quote</h2>
              <p className="header-text">Fill the basic form details and our
              <br></br>
              <span className="representative">Representative</span> will get back to you soon.
              </p>
              
              {/* <p style={ ...styles.headerTextNew}>
                
              </p> */}
            </div>

            <div className="trusted-by">
              <h3 className="trusted-by-title">Trusted by</h3>
              <div className="logos-grid">
                {logos.map((logo, index) => (
                  <img 
                    key={logo.name || index} 
                    className="logo" 
                    src={logo.url} 
                    alt={logo.alt || `Logo ${index + 1}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
              </div>
            </div>

            {/* <div className="testimonials">
              <div 
                ref={(el) => testimonialRefs.current[0] = el}
                className={`testimonial ${visibleTestimonials.includes(0) ? 'visible' : ''}`}
              >
                <div className="testimonial-text">
                  "VSK TechX successfully delivered the project on time and within budget, and the client was pleased with the results. The team communicated effectively via Slack and email. Their collaborative approach and..."
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-avatar">MG</div>
                    <div className="author-details">
                      <h4 className="author-name">Michael G.</h4>
                      <p className="author-title">CEO</p>
                    </div>
                  </div>
                  <div className="company-info">
                    <div>
                      <div className="company-logo">PEGNATO</div>
                      <div className="verified">Verified by DesignRush</div>
                    </div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => testimonialRefs.current[1] = el}
                style={{
                  ...styles.testimonial,
                  ...(visibleTestimonials.includes(1) ? styles.testimonialVisible : {})
                }}
              >
                <div className="testimonial-text">
                  "Responsive and efficient, IT Services India quickly implemented any requests for changes that came up during peer review discussions. Their comprehensive experience, coupled with their proactive approach, made for a fruitful partnership. Customers can expect clean and professional designs from this team."
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-avatar">BF</div>
                    <div className="author-details">
                      <h4 className="author-name">Barry Fish</h4>
                      <p className="author-title">MD</p>
                    </div>
                  </div>
                  <div className="company-info">
                    <div>
                      <div className="company-logo">A2B OFFICE</div>
                      <div className="verified">Verified by Clutch</div>
                    </div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => testimonialRefs.current[2] = el}
                className={`testimonial ${visibleTestimonials.includes(2) ? 'visible' : ''}`}
              >
                <div className="testimonial-text">
                  "They took the time to thoroughly understand our specific needs. With the new system, the client reduced stockouts, enhanced their supply chain, and fulfilled orders more efficiently and accurately."
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-avatar">BF</div>
                    <div className="author-details">
                      <h4 className="author-name">Barry Fish</h4>
                      <p className="author-title">MD</p>
                    </div>
                  </div>
                  <div className="company-info">
                    <div>
                      <div className="company-logo">A2B OFFICE</div>
                      <div className="verified">Verified by Clutch</div>
                    </div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label" htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="company">
                  Company <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter Your Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="email">
                  E-mail <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div>
                    <label className="label" htmlFor="country">
                      Country <span className="required">*</span>
                    </label>
                    <select
                      className="select"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="in">India</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>
                  <div>
                    <label className="label" htmlFor="phone">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      className="input"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="label" htmlFor="services">
                  Interested services
                </label>
                <select
                  className="select"
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  <option value="web-development">Software Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ecommerce">E-commerce Solutions</option>
                  <option value="cloud-services">Digital Marketing</option>
                  {/* <option value="consulting">IT Consulting</option> */}
                </select>
              </div>

              <div className="form-group">
                <label className="label" htmlFor="budget">
                  Choose a Budget (USD)
                </label>
                <select
                  className="select"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label className="label" htmlFor="projectDetail">
                  Project Detail <span className="required">*</span>
                </label>
                <textarea
                  className="textarea"
                  id="projectDetail"
                  name="projectDetail"
                  placeholder="Describe your project requirements..."
                  value={formData.projectDetail}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <FileUploadComponent />
              </div>

              <div className="checkbox-group">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                />
                <label className="checkbox-label" htmlFor="newsletter">
                  I would like to receive information about VSK TechX India news and events. By submitting this form, you agree to our privacy policy.
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="nda"
                  name="nda"
                  checked={formData.nda}
                  onChange={handleInputChange}
                />
                <label className="checkbox-label" htmlFor="nda">
                  I want a copy of NDA.
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Process Steps Section */}
        <div className="process-section">
          <div className="process-container">
            <div className="process-steps">
              <div className="process-step">
                <h3 className="process-title">Share Your <br></br> Requirement</h3>
                <div className="process-underline"></div>
                <p className="process-description">
                  We keenly analyze your requirements from the beginning for a seamless development process.
                </p>
              </div>
              
              <div className="process-step">
                <h3 className="process-title">Non Disclosure Agreement (NDA)</h3>
                <div className="process-underline"></div>
                <p className="process-description">
                  Your business ideas are always safe with us. We assure you of complete confidentiality with NDA.
                </p>
              </div>
              
              <div className="process-step">
                <h3 className="process-title">Understanding Your Requirement</h3>
                <div className="process-underline"></div>
                <p className="process-description">
                  Once we have your requirement, will allocate our expert team consultation to choose the approach.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Section */}
        <div className="contact-section">
          <div className="contact-container">
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope size={40} color="#FF6B35" />
                </div>
                <h4 className="contact-title">General inquiries</h4>
                <p className="contact-info">contact@kripaluinnovations.com</p>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaPhoneAlt size={40} color="#2196F3" />
                </div>
                <h4 className="contact-title">Phone Number</h4>
                <p className="contact-info">+ 91 726 600 6663</p>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaWhatsapp size={40} color="#25D366" />
                  {/* <svg width="40" height="40" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382C17.276 14.284 16.324 13.82 16.148 13.754C15.972 13.688 15.844 13.654 15.716 13.85C15.588 14.046 15.252 14.478 15.144 14.606C15.036 14.734 14.928 14.75 14.732 14.652C14.536 14.554 13.884 14.338 13.12 13.662C12.524 13.14 12.144 12.494 12.036 12.298C11.928 12.102 12.024 12 12.122 11.902C12.21 11.814 12.318 11.674 12.416 11.566C12.514 11.458 12.548 11.382 12.614 11.254C12.68 11.126 12.648 11.018 12.6 10.92C12.552 10.822 12.144 9.87 11.988 9.478C11.836 9.098 11.68 9.15 11.564 9.144C11.456 9.138 11.328 9.138 11.2 9.138C11.072 9.138 10.876 9.186 10.7 9.382C10.524 9.578 10.02 10.042 10.02 10.994C10.02 11.946 10.72 12.862 10.818 12.99C10.916 13.118 12.144 15.086 14.012 15.914C14.444 16.098 14.78 16.214 15.044 16.296C15.476 16.428 15.876 16.408 16.194 16.36C16.548 16.306 17.28 15.914 17.436 15.486C17.592 15.058 17.592 14.694 17.544 14.606C17.496 14.518 17.668 14.478 17.472 14.382ZM12.012 21.798C10.218 21.798 8.466 21.294 6.948 20.346L6.588 20.132L2.892 21.12L3.9 17.52L3.66 17.148C2.634 15.588 2.088 13.776 2.088 11.898C2.091 6.478 6.592 2.001 12.015 2.001C14.652 2.001 17.142 3.042 19.068 4.968C20.994 6.894 22.032 9.384 22.032 12.021C22.029 17.441 17.532 21.918 12.109 21.918L12.012 21.798ZM20.484 3.516C18.258 1.29 15.282 0.078 12.012 0.078C5.472 0.078 0.162 5.388 0.159 11.931C0.159 14.046 0.747 16.116 1.86 17.928L0 24L6.252 22.188C7.998 23.199 9.984 23.736 12.012 23.736C18.552 23.736 23.862 18.426 23.865 11.883C23.865 8.613 22.653 5.637 20.484 3.516Z"/>
                  </svg> */}
                </div>
                <h4 className="contact-title">Connect on WhatsApp</h4>
                <p className="contact-info">Make a quick call</p>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaComments size={40} color="#5865F2" />
                </div>
                <h4 className="contact-title">Quick discussion</h4>
                <p className="contact-info">Live chat with Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetInTouchDetails;